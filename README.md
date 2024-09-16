# js 算法刷题 ACM 模式编码环境

LeetCode 中使用 js 比较顺畅，但一些 ACM 模式的 OJ 写起来就没有那么方便。可借助 VSCode 来优化答题体验，提供了输入流、读取行、优先队列等 snippets，方便使用。

编辑器: VSCode

`npm i` 安装依赖后，即可使用，在 `src/code.js` 中编写代码，该文件不提交。

已做设置：

- 通过 `jsconfig.json` 配置，代码提排除浏览器 API，避免智能提示过多产生干扰
- 项目 eslint 自动修复，无需关注代码格式
- 项目级 snippets 配置，安装即可使用，不需进行编辑器设置
- 提供与 leetcode PriorityQueue 一致 API 的实现，可直接代码引入

预置了一些 snippets ，以 a 开头，方便调用:

- abuf 输入流基础框架模板
- areadline 读取一行并拆分
- aarr 创建指定长度的数组
- aswap 交换数组元素
- aPriorityQueue 定义优先队列类，与 leetcode 的 API 一致
- 可依据需要自行增加 snippets