import { publicProcedure, router } from './trpc';
import {z} from 'zod';
import { createHTTPServer } from '@trpc/server/adapters/standalone';


const todoInputTypes=z.object({
    title:z.string(),
    description:z.string(),
})

const appRouter = router({
  createTodo:publicProcedure
        .input(todoInputTypes)
        .mutation(async(opts)=>{
                console.log(opts.ctx.username);
            const title=opts.input.title;
            const description=opts.input.description;
            //Db

            return {
                id:"1",
            }
        }),
    
    signup:publicProcedure
        .input(z.object({
            email:z.string(),
            password:z.string(),
        }))
        .mutation(async(opts)=>{
            const username=opts.ctx.username
            let email=opts.input.email;
            let password=opts.input.password;

            //Db

            let token='1541992'

            return{
                token:token,
            }


        })
});

const server = createHTTPServer({
    router: appRouter,
    createContext(opts){
        let authHeader = opts.req.headers["authorization"]
        //jwt verify
        return {
            username:"123"
        }
    }
  });
server.listen(3000);
export type AppRouter = typeof appRouter;

