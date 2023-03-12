import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';
import { spotifyMongoAuth } from '../../../server/auth';

export default NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    SpotifyProvider({
      id: 'spotify_user',
      authorization:
        'https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,playlist-read-collaborative,user-library-read',
      clientId: process.env.SPOTIFY_CLIENT_ID || '',
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET || ''
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        return {
          ...token,
          access_token: account.access_token,
          expires_at: account.expires_at,
          refresh_token: account.refresh_token,
        }
      }else if(Date.now() < (Number(token.expires_at) * 1000)) {
        return token;
      } else {
        const response = await fetch(
          `https://accounts.spotify.com/api/token?grant_type=refresh_token&refresh_token=${token.refresh_token}`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${process.env.SPOTIFY_REFRESH_CREDENTIALS}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        });
        
        const tokens = await response.json()

        if (!response.ok) {
          return token;
        }

        return {
          ...token,
          access_token: tokens.access_token,
          expires_at: Math.floor(Date.now() / 1000 + tokens.expires_in),
          refresh_token: tokens.refresh_token ?? token.refresh_token,
        }
      }
    },
    async signIn({ account }) {
      if (!account!.access_token) {
        return false;
      }

      const userSigned = await spotifyMongoAuth(account?.access_token!);

      if (!userSigned) {
        return false;
      }

      return true;
    },
    async redirect() {
      return Promise.resolve('/menu');
    },
    async session({ session, token, user }) {
      session.accessToken = token.access_token;
      return session;
    },
  },
});
