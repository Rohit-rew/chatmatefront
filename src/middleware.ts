import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

// env variable
const secret = process.env.JWT_SECRET;

export async function middleware(req: NextRequest, res: NextResponse) {
  if (req.nextUrl.pathname.includes("chat")) {
    const tokenFromCookies = req.cookies.get("chatmate")?.value;
    if (tokenFromCookies) {
      const data = await jose.jwtVerify(
        tokenFromCookies,
        new TextEncoder().encode(secret)
      );
      if (data) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL("/", req.url));
      }
    } else {
      return NextResponse.redirect(new URL("/accounts/login", req.url));
    }
  }

  if (req.nextUrl.pathname.includes("login") || req.nextUrl.pathname.includes("signup")) {
    const tokenFromCookies = req.cookies.get("chatmate")?.value;

    if (tokenFromCookies) {
      const data = await jose.jwtVerify(
        tokenFromCookies,
        new TextEncoder().encode(secret)
      );
      if (data) {
        return NextResponse.redirect(new URL("/chat", req.url));
      } else {
        return NextResponse.next();
      }
    } else {
      return NextResponse.next();
    }
  }

  if ((req.nextUrl.pathname == "/")) {
    const tokenFromCookies = req.cookies.get("chatmate")?.value;

    if (tokenFromCookies) {
      const data = await jose.jwtVerify(
        tokenFromCookies,
        new TextEncoder().encode(secret)
      );
      if (data) {
        return NextResponse.redirect(new URL("/chat", req.url));
      } else {
        return NextResponse.next();
      }
    } else {
      return NextResponse.next();
    }
  }


}
