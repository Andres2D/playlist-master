import NextAuth from 'next-auth';
import SpotifyProvider from "next-auth/providers/spotify";
import { spotifyMongoAuth } from '../../../server/auth';

export default NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    SpotifyProvider({
      id: 'spotify_user',
      authorization: 'https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,playlist-read-collaborative,user-library-read',
      clientId: process.env.SPOTIFY_CLIENT_ID || '',
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
    })  
  ], 
  callbacks: {
    async signIn({account}) { 

      if(!account!.access_token) {
        return false
      }

      const userSigned = await spotifyMongoAuth(account?.access_token!);

      if(!userSigned) {
        return false;
      }
      
      return true;
    },
    async redirect() {
      return Promise.resolve('/menu');
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({token, account}) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  }
});
