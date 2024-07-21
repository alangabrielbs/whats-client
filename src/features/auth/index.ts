import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    // TODO: integrate with API
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "E-mail",
          type: "email",
          placeholder: "email@gmail.com",
        },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: "Alan Gabriel",
          email: "contato@alangabriel.dev",
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    error: "/login",
  },
});
