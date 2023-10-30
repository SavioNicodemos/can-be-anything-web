import {
  AdapterAccount,
  AdapterSession,
  VerificationToken,
} from 'next-auth/adapters';

export type PublicUserDTO = {
  image: string | null;
  name: string;
  username: string;
};

export type PrivateUserDTO = PublicUserDTO & {
  id: string;
  email: string;
  emailVerified: string | null;
};

export type AccountDTO = AdapterAccount;

export type SessionDTO = AdapterSession;

export type VerificationTokenDTO = VerificationToken;
