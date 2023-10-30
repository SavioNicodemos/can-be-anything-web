import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { LaravelAdapter } from './ApiAdapter';

export const authOptions: AuthOptions = {
  adapter: LaravelAdapter(),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};
