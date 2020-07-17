const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const error = require('koa-json-error');
const app = new Koa();
const routing = require('./routes');

app.use(error({
    postFormat: (err, { stack, ...rest }) => {
        return process.env.NODE_ENV === 'production'
        ? rest : { stack, ...rest }
    }
}));
app.use(bodyparser());
routing(app);

app.listen(3000, () => {
    console.log('We are lisitening at http://localhost:3000');
});