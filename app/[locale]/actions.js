"use server";
// import { cookies } from "next/headers";
// import { AUTH_COOKIE_KEY } from "../../constant";

// export async function login(username, password) {
// console.log(username, password);
// const response = await fetch("https://dummyjson.com/auth/login", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     username: username,
//     password: password,
//   }),
// });

//   const response = await fetch("https://dummyjson.com/auth/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       username: "kminchelle",
//       password: "0lelplR",
//     }),
//   });

//   const user = await response.json();
//   const cookieStore = cookies();
//   cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user.token));
// }
// export async function logout() {
//   const cookieStore = cookies();
//   cookieStore.delete(AUTH_COOKIE_KEY);
// }

// action="/api" method="POST"