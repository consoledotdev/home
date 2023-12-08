import { createMiddleware, rateLimit } from "@arcjet/next";
export const config = {
    // matcher tells Next.js which routes to run the middleware on
    matcher: ["/((?!_next/static|_next/image|favicon.ico|favicon.png|img).*)"],
};
const middleware = createMiddleware({
    key: "ajkey_01hh02wwzbeapbm8skq87q4492",
    rules: [],
});
export default middleware;
