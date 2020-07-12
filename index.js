const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const usersRouter = new Router({ prefix: '/users' });
// 5 - 2
router.get('/', (ctx) => {
    ctx.body = 'Home Page';
});

usersRouter.get('/', (ctx) => {
    ctx.body = [
        {name: 'leilei'},
        {name: 'kiki'},
    ];
});

usersRouter.post('/', (ctx) => {
    console.log(ctx.request.body);
    ctx.body = { name: 'lilei'};
});

usersRouter.get('/:id', (ctx) => {
    ctx.body = { name: 'lilei'};
});

usersRouter.put('/:id', (ctx) => {
    ctx.body = { name: 'lilei2'};
});

usersRouter.delete('/:id', (ctx) => {
    ctx.status = 204;
});

app.use(bodyparser());
app.use(router.routes());
app.use(usersRouter.routes());
app.use(usersRouter.allowedMethods());
app.listen(3000);