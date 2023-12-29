import arcjet, { createMiddleware } from "@arcjet/next";
export const config = {
    // matcher tells Next.js which routes to run the middleware on
    matcher: ["/((?!_next/static|_next/image|favicon.ico|favicon.png|img).*)"],
};
const aj = arcjet({ key: process.env.ARCJET_KEY!, rules: [] });

export default createMiddleware(aj);
