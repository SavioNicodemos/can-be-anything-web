import { ResponseDTO } from '@/@dtos/ResponseDTO';
import {
  AccountDTO,
  PrivateUserDTO,
  SessionDTO,
  VerificationTokenDTO,
} from '@/@dtos/UserDTO';
import { axios } from '@/services/axios';
import type { Adapter } from 'next-auth/adapters';

type SessionAndUser = {
  user: PrivateUserDTO;
  session: SessionDTO;
};

const convertUserEmail = (user: PrivateUserDTO | null) => {
  if (!user) return null;

  return {
    ...user,
    emailVerified: user.emailVerified ? new Date(user.emailVerified) : null,
  };
};

export function LaravelAdapter(client = null, options = {}): Adapter {
  return {
    async createUser({ email, name, image, emailVerified }) {
      const response = await axios.post<ResponseDTO<PrivateUserDTO>>(`/users`, {
        email,
        name,
        image,
        emailVerified: emailVerified?.getTime() ?? null,
      });

      const newUser = convertUserEmail(response.data.data);

      return newUser!;
    },

    async getUserByEmail(email) {
      const response = await axios.get<ResponseDTO<PrivateUserDTO>>(
        `/users/email/${email}`
      );

      const newUser = convertUserEmail(response.data.data);

      return newUser;
    },

    async getUserByAccount({ providerAccountId, provider }) {
      const response = await axios.get<ResponseDTO<PrivateUserDTO | null>>(
        `/users/account/${provider}/${providerAccountId}`
      );

      const newUser = convertUserEmail(response.data.data);

      return newUser;
    },

    async linkAccount(account) {
      const response = await axios.post<ResponseDTO<AccountDTO>>(
        '/accounts/link',
        account
      );

      return response.data.data;
    },

    async createSession({ sessionToken, userId, expires }) {
      const response = await axios.post<ResponseDTO<SessionDTO>>('/sessions', {
        sessionToken,
        userId,
        expires: expires.getTime(),
      });

      const newSession = {
        ...response.data.data,
        expires: new Date(response.data.data.expires),
      };

      return newSession;
    },

    async getSessionAndUser(sessionToken) {
      const response = await axios.get<ResponseDTO<SessionAndUser>>(
        `/sessions/${sessionToken}`
      );

      const { user, session } = response.data.data;

      const newUser = convertUserEmail(user);

      const newSession = {
        ...session,
        expires: new Date(session.expires),
      };

      return {
        user: newUser!,
        session: newSession,
      };
    },

    async deleteSession(sessionToken) {
      const response = await axios.delete<ResponseDTO<null>>(
        `/sessions/${sessionToken}`
      );

      return response.data.data;
    },

    async getUser(id) {
      const response = await axios.get<ResponseDTO<PrivateUserDTO>>(
        `/users${id}`
      );

      const newUser = convertUserEmail(response.data.data);

      return newUser!;
    },

    async updateUser(user) {
      const response = await axios.put<ResponseDTO<PrivateUserDTO>>(
        `/users/${user.id}`,
        user
      );

      const newUser = convertUserEmail(response.data.data);

      return newUser!;
    },

    async updateSession({ sessionToken, expires, userId }) {
      const response = await axios.put<ResponseDTO<SessionDTO>>(
        `/sessions/${sessionToken}`,
        {
          expires,
          userId,
        }
      );

      return response.data.data;
    },

    async createVerificationToken({ identifier, expires, token }) {
      const response = await axios.post<ResponseDTO<VerificationTokenDTO>>(
        `/verification-tokens`,
        {
          identifier,
          expires,
          token,
        }
      );

      return response.data.data;
    },

    async useVerificationToken({ identifier, token }) {
      const response = await axios.post<ResponseDTO<VerificationTokenDTO>>(
        `/verification-tokens/use`,
        {
          identifier,
          token,
        }
      );

      return response.data.data;
    },

    async deleteUser(userId) {
      const response = await axios.delete<ResponseDTO<null>>(
        `/users/${userId}`
      );

      return response.data.data;
    },

    async unlinkAccount({ providerAccountId, provider }) {
      const response = await axios.delete<ResponseDTO<AccountDTO>>(
        `/accounts/unlink/${provider}/${providerAccountId}`
      );

      return response.data.data;
    },
  };
}
