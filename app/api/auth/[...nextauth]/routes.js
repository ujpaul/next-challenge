import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  session: { strategy: "jwt" },
  providers: [
    GoogleProvider({
        clientId: "1077769135744-9ggu64k6veoq3478cr2srapmfqtk2qnc.apps.googleusercontent.com",
        clientSecret: "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"
      })
    // ...add more providers here
  ],
  async jwt({ token, account }) {
    // Persist the OAuth access_token to the token right after signin
    if (account) {
      token.accessToken = account.access_token
    }
    return token
  },
  async session({ session, token, user }) {
    // Send properties to the client, like an access_token from a provider.
    session.accessToken = token.accessToken
    return session
  }
}
const handler = NextAuth(authOptions)
export  { handler as GET, handler as POST }