 * react-app 脚手架

  ```bash
  npx create-react-app "your project name"
  ```


### webpack 配置
* npm run eject 将隐藏配置暴露出来，运行后会抛出多出 `config` 与 `scripts` 文件夹
* `@` 绝对路径的配置
  * 找到 `config` 文件里面的 `webpack.config.js`
  ```js
    alias:{
        "@": path(__dirname, "../src"),
        "@cmps": path(__dirname, "../src/components"),
    }
  ```
  