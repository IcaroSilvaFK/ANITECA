import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { v4 as isUuid } from "uuid";

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
		}),
	],
	callbacks: {
		async signIn({ user }) {
			return {
				...user,
				id: isUuid(),
			};
		},
	},
});
