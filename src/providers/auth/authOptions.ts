import { PrivateUserDTO } from '@/@dtos/UserDTO';
import { axios as axiosPrivate } from '@/services/axios';
import { AxiosError } from 'axios';
import { AuthOptions } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { LaravelAdapter } from './ApiAdapter';

export const authOptions: AuthOptions = {
  adapter: LaravelAdapter(),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      name: 'Email and Password',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Your Email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const url = process.env.NEXT_PUBLIC_BASE_URL + '/sanctum/csrf-cookie';
        const res = await fetch(url);

        const setCookieHeader = res.headers.get('set-cookie');
        // console.log("setCookieHeader", setCookieHeader)
        // you'll find your_site_session key in this console log

        const cookies = setCookieHeader?.split(', ');
        // console.log(cookies)
        let sessionKey = null;
        let xsrfToken = null;

        for (const cookie of cookies!) {
          if (cookie.startsWith('canbeanything_session=')) {
            sessionKey = cookie.split('=')[1];
          } else if (cookie.startsWith('XSRF-TOKEN=')) {
            xsrfToken = cookie.split('=')[1];
          }

          if (sessionKey && xsrfToken) {
            break;
          }
        }

        const data = {
          email: credentials?.email,
          password: credentials?.password,
        };

        // TODO: Add cookie to headers
        // Cookie: `canbeanything_session=${sessionKey}`,

        axiosPrivate.defaults.headers.common['X-XSRF-TOKEN'] = xsrfToken;

        try {
          console.log('Here?');
          const response = await axiosPrivate.post('/login', data);
          console.log('Not here');

          axiosPrivate.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${response.data.data.token}`;

          const user: PrivateUserDTO = response.data.data.user;

          return {
            email: user.email,
            name: user.name,
            emailVerified: user.email_verified_at,
            id: user.id,
            image: user.image,
            accessToken: response.data.data.token,
          } as AdapterUser;
        } catch (error) {
          if (error instanceof AxiosError) {
            console.error('AxiosError', error.response?.data.message);
          }
          throw new Error('Authentication failed');
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      console.log('**********----------***** JWT *****----------*********');
      if (user) {
        token.name = user.name;
        token.email = user.email;
        token.picture = user.image;
        token.sub = user.id;
        token.accessToken = user.accessToken;
      }
      console.log({ token });
      return token;
    },
    async session({ session, token }) {
      console.log('**********----------***** SESSION *****----------*********');
      console.log({ session, token });
      session.accessToken = token.access_token;
      session.user = token.user;
      return session;
    },
  },
};
