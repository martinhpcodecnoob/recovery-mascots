import NextAuth from 'next-auth' 
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name:"Recovery-mascots",
            credentials: {
                email: { label: "email", type: "email", placeholder: "test@test.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const user = {id:'1',name:'Martin Hernandez',email:"hp.u.smile@gmnil.com"}
                if (user) {
                    return user
                } else {
                    return null
                }
                // const res = await fetch(
                // `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
                // {
                //     method: "POST",
                //     body: JSON.stringify({
                //     email: credentials?.email,
                //     password: credentials?.password,
                //     }),
                //     headers: { "Content-Type": "application/json" },
                // }
                // );
                // const user = await res.json();
                
                // if (user.error) {
                //     console.log("Error: ",user);
                    
                //     throw user;
                // }
        
                // return user;
            },
            }),
        ],
})

export {handler as GET, handler as POST}