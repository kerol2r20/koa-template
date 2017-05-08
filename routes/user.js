const Router = require("koa-router");

const router = new Router();

router.get("/", async (ctx) => {
    await ctx.render("user", {uid: "**no specify**"});
})

router.get("/:uid", async (ctx) => {
    await ctx.render("user", {uid: ctx.params.uid});
});

module.exports = router;
