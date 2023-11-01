import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	server: {
		LINE_CLIENT_ID: z.string().min(1),
		LINE_CLIENT_SECRET: z.string().min(1),
	},
	client: {},
	runtimeEnv: {
		LINE_CLIENT_ID: process.env.LINE_CLIENT_ID,
		LINE_CLIENT_SECRET: process.env.LINE_CLIENT_SECRET,
	},
});
