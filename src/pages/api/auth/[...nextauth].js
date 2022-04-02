import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
		}),
	],
});

//"1037512717167-dlr9vsgs2k4drpudjjodd3ehel17vfdt.apps.googleusercontent.com"
// "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"
