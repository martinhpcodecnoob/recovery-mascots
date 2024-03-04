import { login } from '@/utils/api';
import NextAuth, { DefaultSession } from 'next-auth' 
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
    interface Session {
        user:{
            id?: string
            accessToken:string

        } & DefaultSession["user"]
    }

    interface User{
        accessToken?:string
    }
}

const handler = NextAuth({
    secret:process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name:"Recovery-mascots",
            credentials: {
                email: { label: "email", type: "email", placeholder: "test@test.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (
                    !credentials ||
                    typeof credentials.email !== "string" ||
                    typeof credentials.password !== "string"
                ) {
                return null;
                }
                const response = await login(credentials)
                const data = response.data

                if (data) {
                    const {user} = data
                    return{
                        id:user._id,
                        name:user.name,
                        email:user.email,
                        accessToken:user.accessToken
                    }
                } else {
                    return null
                }
                
            },
            }),
        ],
    callbacks:{
        async signIn({user}) {
            return true
        },
        async jwt({token,user}) {
            if (user && typeof user.accessToken === 'string') {
                token.accessToken = user.accessToken
            }
            if (user && typeof user.id === 'string') {
                token.id = user.id
            }
            return token
        },
        async session({token,session}) {
            if (token && typeof token.accessToken === 'string') {
                session.user.accessToken = token.accessToken
            }
            if (token && typeof token.id === 'string') {
                session.user.id = token.id
            }
            return session
        }
    }
})

export {handler as GET, handler as POST}