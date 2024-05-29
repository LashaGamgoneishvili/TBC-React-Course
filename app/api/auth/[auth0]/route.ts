import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/api/user-api/create-user",
    authorizationParams: {
      prompt: "login",
    },
  }),
});
