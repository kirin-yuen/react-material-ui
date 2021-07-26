// 反向代理文件 setupProxy 需要放在 src 里(受限于 create-react-app)
const {
    createProxyMiddleware
} = require('http-proxy-middleware');

module.exports = function (app) {
    // /api代表代理路径
    // target表示目标服务器地址
    app.use(
        createProxyMiddleware('/graphql', {
            target: 'http://localhost:4000/',
        })
    )
}