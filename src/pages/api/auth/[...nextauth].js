import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId:
				"1037512717167-dlr9vsgs2k4drpudjjodd3ehel17vfdt.apps.googleusercontent.com",
			clientSecret: "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",
		}),
	],
});
