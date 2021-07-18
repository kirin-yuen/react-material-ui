<!--
 * @Author: ywl
 * @LastEditors: ywl
-->
 * react-app 脚手架

  ```bash
  npx create-react-app "your project name"
  ```

  ### material ui 常用链接
  * [图标](https://material-ui.com/components/material-icons/)




#### 注意点：
为了尽可能减少行数与代码量，建议按如下方式编写
* 赋值解构
  ```js
  const { avatar: clsAvatar} = style
  ```
* 箭头函数，参数不需要不写，一行代码不用加 {}
* 组件可自闭合的请闭合
* 样式处理抽离出 style.js