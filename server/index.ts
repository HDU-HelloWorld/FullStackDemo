import koa from 'koa'; //引入koa模块
import cors from 'koa2-cors' //引入koa-cors模块
import bodyParser from 'koa-bodyparser' //引入koa-bodyparser模块

const app = new koa(); //创建koa实例

app.use(cors())//挂载cors中间件 实现跨域**
app.use(bodyParser())//挂载bodyparser中间件

//临时中间件 （后面提到该中间件）
app.use(async (ctx, next) => {
    //获取请求参数
    // const { username, password } = ctx.request;
    console.log(ctx.request.body);

    ctx.response.body = "asdhkajsdhaksjdjkahsasdjkhkasdjhasdjk";
    ctx.response.status = 200;
});

//监听端口 5174
app.listen(5174, () => {
    console.log("starting at port 5174")
})