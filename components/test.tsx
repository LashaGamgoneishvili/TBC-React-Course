"use client";
import { useUser } from "@auth0/nextjs-auth0/client";

function Test() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {!user ? (
        <a href="/api/auth/login" className="text-black">
          Login
        </a>
      ) : (
        <a href="/api/auth/logout  " className="text-black">
          Logout
        </a>
      )}
    </div>
  );
}

export default Test;
