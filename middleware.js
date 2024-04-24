import { NextResponse } from "next/server";
import { AUTH_COOKIE_KEY } from "./constant";
import { cookies } from "next/headers";
import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18nConfig";

export function middleware(request) {
  // let cookie = request.cookies.get(AUTH_COOKIE_KEY);
  let url = request.nextUrl.pathname;
  let modifiedUrl = url.substring(3);
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);
  // console.log(cookie);
  if (!cookie && modifiedUrl !== "/login" && url !== "/login") {
    console.log("login");
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (cookie && modifiedUrl === "/login") {
    console.log("logout");
    return NextResponse.redirect(new URL("/", request.url));
  }

  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
