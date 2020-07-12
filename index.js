const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const usersRouter = new Router({ prefix: '/users' });
// 4 - 4
const auth = async (ctx, next) => {
    if(ctx.url !== 'users') {
        ctx.throw(401);
    }
    next();
};

router.get('/', (ctx) => {
    ctx.body = 'Home Page';
});

usersRouter.get('/', (ctx) => {
    ctx.body = 'User List';
});

usersRouter.post('/', auth, (ctx) => {
    ctx.body = 'Create User';
});

usersRouter.get('/:id', (ctx) => {
    ctx.body = `This is User ${ctx.params.id}`;
});

app.use(router.routes());
app.use(usersRouter.routes());
app.listen(3000);