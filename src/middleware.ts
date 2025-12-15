import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export async function middleware (request: NextRequest) {
    const token = await getToken({req: request});
    const url = request.nextUrl;

    if (
        token && (
            url.pathname === '/sign-in' || 
            url.pathname === '/sign-up' ||
            url.pathname === '/verify'
        )
    ) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    if(!token && url.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/sign-up', request.url));
    }

    return NextResponse.next();
}
