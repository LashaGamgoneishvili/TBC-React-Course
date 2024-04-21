"use client";

import { useState } from "react";

export default function LoginForm({ onHandleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      className="flex flex-col p-32 rounded-md justify-center items-center gap-4 bg-gray-500"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-2">
        <label className="text-white">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={() => onHandleLogin(email, password)}>Login</button>
    </form>
  );
}
