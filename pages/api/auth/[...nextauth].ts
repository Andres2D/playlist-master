import NextAuth from 'next-auth';
import SpotifyProvider from "next-auth/providers/spotify";

export default NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    SpotifyProvider({
      id: 'spotify_user',
      authorization: 'https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private',
      clientId: process.env.SPOTIFY_CLIENT_ID || '',
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
    })  
  ], 
  callbacks: {
    async jwt({token, account}) {
      if (account) {
        token.accessToken = account.refresh_token;
      }
      return token;
    }
  }
});