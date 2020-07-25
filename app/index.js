const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const error = require('koa-json-error');
const parameter = require('koa-parameter');
const mongoose = require('mongoose');
const app = new Koa();
const routing = require('./routes');
const { connectionStr } = require('./config');

mongoose.set('useUnifiedTopology', true);
mongoose.connect(connectionStr, { useNewUrlParser: true }, () => {
    console.log('MongoDB connected successfully');
});
mongoose.connection.on('error', console.error);
// 7 - 6
app.use(error({
    postFormat: (err, { stack, ...rest }) => {
        return process.env.NODE_ENV === 'production'
        ? rest : { stack, ...rest }
    }
}));
app.use(bodyparser());
app.use(parameter(app));
routing(app);

app.listen(3000, () => {
    console.log('We are lisitening at http://localhost:3000');
});