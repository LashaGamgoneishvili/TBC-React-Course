import { NextResponse } from "next/server";
// import { AUTH_COOKIE_KEY } from "./constant";
// import { cookies } from "next/headers";
import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18nConfig";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // let url = request.nextUrl.pathname;
  // let modifiedUrl = url.substring(3);
  // const cookieStore = cookies();
  // const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  const cookieStore = request.cookies;
  const appSessionCookie = cookieStore.get("appSession");
  const { pathname } = request.nextUrl;
  if (
    !appSessionCookie &&
    (pathname.startsWith("/profile") ||
      pathname.startsWith("/admin") ||
      pathname.startsWith("/checkout") ||
      pathname.startsWith("/login"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // if (appSessionCookie && pathname.startsWith("/login")) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // if (!cookie && url !== "/login") {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  // if (cookie && url === "/login") {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
