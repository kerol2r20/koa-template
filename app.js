const koa = require("koa");
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const path = require("path");
const views = require("koa-views");
const router = require("./routes/index");

const app = new koa();

app.use(logger());
app.use(bodyParser());
app.use(require("koa-static")(path.join(__dirname, "/public")))
app.use(views(path.join(__dirname, "/views"), {
    extension: "pug",
    map: {
        pug: "pug",
    }
}));
app.use(router.routes()).use(router.allowedMethods());

module.exports = app;
