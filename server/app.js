const express = require("express");
const { graphqlHTTP } = require("express-graphql"); // express 能识别 graphql
const schema = require("./schema");


const app = express();

// 为 graphql 创建一个 endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql:true // 开启查询工具
  })
);

app.listen(4000, (resp) => {
  console.log("正在监听 4000");
});
