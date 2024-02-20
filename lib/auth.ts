import { getServerSession, type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hash } from "bcrypt"
import { createUser, getUserByUsername } from "@/actions/auth";
import { TUser } from "@/types/TUser";
const VERCEL_DEPLOYMENT = !!process.env.VERCEL_URL;


// FUCK AROUND => FIND OUT @merto
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "signup",
            name: "Credentials",
            credentials: {
                username: {},
                password: {}
            },
            async authorize(credentials: any, req: any) {
                const { username, password } = credentials
                const hashedPassword = await hash(password, 10)
                // const currentDate = new Date();
             
                try {
                    const res = await createUser(username, hashedPassword)
                    if(res.error || !res.data){
                        throw new Error(typeof res.error === 'string'?res.error:'Unexpected Error')
                    }
                    const response : any = {
                        email:res.data.userID,
                        image:res.data.user_img,
                        name:res.data.user_name,
                        id:res.data.userID
                    }
                    return response
                } catch (error) {
                    console.error('Error during authorization:', error);
                    return null;
                }
            }
        }),
        CredentialsProvider({
            id: "verify-password",
            name: "Credentials",
            credentials: {
                username: {},
                password: {}
            },
            async authorize(credentials: any, req: any) {
                const { username, password } = credentials
                // const currentDate = new Date();
             
                try {
                    const user = await getUserByUsername(username)
                    if(!user.data){
                        throw new Error("There is no user with this username")
                    }
                    const passwordMatches = await compare(password || '', user.data.password);
                    if(!passwordMatches){
                        throw new Error("Wrong Credentials")
                    }

                    const response : any = {
                        email:user.data.userID,
                        image:user.data.user_img,
                        name:user.data.user_name,
                        id:user.data.userID
                    }
                    return response
                } catch (error) {
                    console.error('Error during authorization:', error);

                    return null;
                }
            }
        }),
      

    ],
    pages: {
        signIn: `/login`,
        verifyRequest: `/login`,
        error: "/login", // Error code passed in query string as ?error=
    },
    session: { strategy: "jwt" },
    cookies: {
        sessionToken: {
            name: `${VERCEL_DEPLOYMENT ? "__Secure-" : ""}next-auth.session-token`,
            options: {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
                // When working on localhost, the cookie domain must be omitted entirely (https://stackoverflow.com/a/1188145)
                domain: VERCEL_DEPLOYMENT
                    ? `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
                    : undefined,
                secure: VERCEL_DEPLOYMENT,
            },
        },
        callbackUrl: {
            name: `__Secure-next-auth.callback-url`,
            options: {
                sameSite: 'lax',
                path: '/',
                secure: true
            }
        },
        state: {
            name: `${VERCEL_DEPLOYMENT ? "__Secure-" : ""}next-auth.state`,
            options: {
                httpOnly: false,
                sameSite: "lax",
                path: "/",
                secure: true,
                maxAge: 900
            },
        },
        pkceCodeVerifier: {
            name: `${VERCEL_DEPLOYMENT ? "__Secure-" : ""}next-auth.pkce.code_verifier`,
            options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: true,
                maxAge: 900
            }
        },

    },
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.user = user;
            }
            return token;
        },
        session: async ({ session, token }) => {
            session.user = {
                ...session.user,
                // @ts-expect-error
                id: token.sub,
                //username: token?.user?.username || token?.user?.gh_username,
            };
            return session;
        },
    },
};



export function getSession() {
    return getServerSession(authOptions) as Promise<{
        user: {
            id: string;
            image: string;
            name: string | null;
            email:string
        };
    } | null>;
}