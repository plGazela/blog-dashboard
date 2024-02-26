import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const config = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login"
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = { username: "Gazela", password: "zaq1@WSX" };
  
        if(!credentials?.username || !credentials?.password) {
          return null;
        } else if( credentials.password !== user.password ) {
          return null;
        }

        return {
          username: user.username,
        };
      }
    })
  ],
} satisfies NextAuthOptions

export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, config)
}