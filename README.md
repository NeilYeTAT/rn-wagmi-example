# Reown - React Native 钱包连接最小示例

这是一个在 React Native 中使用 Reown 实现连接钱包的最小示例。

## 🚀 运行项目

### 1. Reown 配置

[https://cloud.reown.com](https://cloud.reown.com)

- 只需要在 `https://cloud.reown.com` 获取 `Project ID`，然后在 `app/_layout.tsx` 中对应位置填写。
- 不需要配置 `Project Domains` 和 `Mobile Application IDs`

参考：[Why use empty whitelisted domains?](https://github.com/WalletConnect/walletconnect-monorepo/issues/2934)

### 2. 启动！

```shell
npm install
npm run android
```

## 🏗️ 构建生产包（使用 EAS Build）

参考官方文档：[EAS Build 启动！](https://docs.expo.dev/build/setup/)

### 1. 安装 `eas cli`

```shell
npm install -g eas-cli
```

### 2. 注册并登录 Expo

- 注册 `Expo` 帐号，[Expo 官网](https://expo.dev/)
- 执行命令登录

```shell
eas login
```

### 3. 初始化构建配置

```shell
eas build:configure
```

系统会提示：

```text
Would you like to automatically create an EAS project for @yeyu-qwq/rn-wagmi-example? › YES
Which platforms would you like to configure for EAS Build? › Android
```

**注意**：IOS 开发需要对应的 Apple 开发者帐号，Apple 开发者帐号怎么获得呢？充钱...

> 除非你恰好财力雄厚，否则不建议勾选 IOS

### 4. 配置 `eas.json` 生成 APK

参考：[How to build expo apk using eas build](https://stackoverflow.com/questions/72204856/how-to-build-expo-apk-using-eas-build)

```json
"production": {
   "autoIncrement": true,
   "android": {
      "buildType": "apk"
   }
}
```

### 5. 开始构建！

```shell
eas build --platform android
```

泡杯咖啡 ☕️，静静等待，构建需要大概十多分钟~

> 同一个 Expo 帐号一天构建多次可能会需要排队，我最长一次的构建时间是 29 分钟 🤡，最后发现忘记配置输出产物是 APK 🤡

## ⚠️ 注意事项

### 1. 如何获取 钱包/dapp 的 package name?

- google play 搜索对应的 app，搜索栏会有 `https://play.google.com/store/apps/details?id=io.cityofzion.neon`，id 后即为 package name

> `all wallets` 选项中集成了很多钱包，一般不需要手动去 `queries.js` 中特别配置

### 2. 添加 Babel 配置文件(否则会报错)

确保根目录存在 `babel.config.js` 文件，内容示例：

感谢 🙏🏻 `ChatGPT`

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          unstable_transformImportMeta: true,
        },
      ],
    ],
  };
};
```
