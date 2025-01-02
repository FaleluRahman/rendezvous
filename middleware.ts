import { NextRequest, NextResponse } from "next/server";


export async function middleware(request: NextRequest) {
let isAuthenticated = false;

  const cookie = request.cookies.get("student");
  if (cookie && cookie.value) {
    const student = JSON.parse(cookie.value);
    if (student && student.jamiaNo) {
      isAuthenticated = true;
    }
  }
  if (isAuthenticated) {
    if (["/login"].includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  if (isAuthenticated) {
    return NextResponse.next();
  }
  if (!isAuthenticated) {
    if (["/"].includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  }
}
export const config = { matcher: ["/", "/login"] };
