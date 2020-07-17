const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const app = new Koa();
const routing = require('./routes');

app.use(async (ctx, next) => {
    try {
        await next();
    } catch(err) {

    }
});
app.use(bodyparser());
routing(app);

app.listen(3000, () => {
    console.log('We are lisitening at http://localhost:3000');
});