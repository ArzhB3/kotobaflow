import LineProvider from 'next-auth/providers/line';
import { Session, getServerSession } from 'next-auth';

import { env } from './env';
import { prisma } from './prisma';

import { PrismaAdapter } from '@auth/prisma-adapter';

export const authOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		LineProvider({
			clientId: env.LINE_CLIENT_ID,
			clientSecret: env.LINE_CLIENT_SECRET,
			profile(profile) {
				return {
					id: profile.sub,
					username: profile.name,
					name: profile.name,
					email: profile.email,
					image: profile.picture,
				};
			},
		}),
	],
	callbacks: {
		session({ session, user }: { session: Session; user: any }) {
			if (!session?.user) return session;
			session.user.id = user.id;
			return session;
		},
	},
};

export const getAuthSession = async () => {
	const session = await getServerSession(authOptions);
	return session;
};
