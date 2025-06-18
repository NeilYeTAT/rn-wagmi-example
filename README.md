# Reown - Minimal Wallet Connect Example in React Native

This is a minimal example demonstrating how to connect a wallet using **Reown** in a React Native project.

## 🚀 Run the Project

### 1. Reown Configuration

🔗 [https://cloud.reown.com](https://cloud.reown.com)

- Simply obtain your **Project ID** from `https://cloud.reown.com` and paste it into the corresponding field in `constant.ts`.
- You do **not** need to configure **Project Domains** or **Mobile Application IDs**.

📌 Reference: [Why use empty whitelisted domains?](https://github.com/WalletConnect/walletconnect-monorepo/issues/2934)

### 2. Start the App!

```bash
npm install
npm run android
```

---

## 🏗️ Build a Production APK (Optional)

Refer to the official guide: [Get started with EAS Build](https://docs.expo.dev/build/setup/)

### 1. Install `eas-cli`

```bash
npm install -g eas-cli
```

### 2. Register and Log in to Expo

- Sign up for an [Expo account](https://expo.dev/)
- Then log in:

```bash
eas login
```

### 3. Initialize Build Configuration

```bash
eas build:configure
```

You’ll be prompted with:

```text
Would you like to automatically create an EAS project for @your-username/project-name? › YES
Which platforms would you like to configure for EAS Build? › Android
```

> ⚠️ **Note**: iOS builds require an Apple Developer account (which costs money).  
> Unless you have the budget, it's recommended to skip iOS for now.

### 4. Configure `eas.json` to Build an APK

Reference: [How to build expo apk using eas build](https://stackoverflow.com/questions/72204856/how-to-build-expo-apk-using-eas-build)

Edit your `eas.json` like this:

```json
"production": {
  "autoIncrement": true,
  "android": {
    "buildType": "apk"
  }
}
```

### 5. Start Building!

```bash
eas build --platform android
```

☕️ Grab a coffee and relax. The build will take about 10–15 minutes.

---

## ⚠️ Known Issue

If you connect a wallet on the **first page**, the **second page** will also mistakenly think a wallet is connected.  
This is a known issue due to a bug in the current implementation.  
It will be fixed later when time permits.

---

Made with ❤️ using Reown
