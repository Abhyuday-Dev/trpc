"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const trpc_1 = require("./trpc");
const zod_1 = require("zod");
const standalone_1 = require("@trpc/server/adapters/standalone");
const todoInputTypes = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
});
const appRouter = (0, trpc_1.router)({
    createTodo: trpc_1.publicProcedure
        .input(todoInputTypes)
        .mutation((opts) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(opts.ctx.username);
        const title = opts.input.title;
        const description = opts.input.description;
        //Db
        return {
            id: "1",
        };
    })),
    signup: trpc_1.publicProcedure
        .input(zod_1.z.object({
        email: zod_1.z.string(),
        password: zod_1.z.string(),
    }))
        .mutation((opts) => __awaiter(void 0, void 0, void 0, function* () {
        const username = opts.ctx.username;
        let email = opts.input.email;
        let password = opts.input.password;
        //Db
        let token = '1541992';
        return {
            token: token,
        };
    }))
});
const server = (0, standalone_1.createHTTPServer)({
    router: appRouter,
    createContext(opts) {
        let authHeader = opts.req.headers["authorization"];
        //jwt verify
        return {
            username: "123"
        };
    }
});
server.listen(3000);
