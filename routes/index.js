const Router = require("koa-router");

const user_router = require("./user");

router = new Router();

router
.get("/", async (ctx) => {
    await ctx.render("index", {engine: "pug"})
})

router
.use("/user", user_router.routes(), user_router.allowedMethods());

module.exports = router;