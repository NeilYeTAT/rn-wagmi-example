// based on https://github.com/expo/config-plugins/issues/123#issuecomment-1746757954
// * copy from https://docs.reown.com/appkit/react-native/core/installation#android

const {
  withAndroidManifest,
  createRunOncePlugin,
} = require("expo/config-plugins");

const queries = {
  package: [
    { $: { "android:name": "com.wallet.crypto.trustapp" } },
    { $: { "android:name": "io.metamask" } },
    // * Neon Wallet package name: io.cityofzion.neon
    { $: { "android:name": "io.cityofzion.neon" } },
    { $: { "android:name": "me.rainbow" } },
    { $: { "android:name": "io.zerion.android" } },
    { $: { "android:name": "io.gnosis.safe" } },
    { $: { "android:name": "com.uniswap.mobile" } },
  ],
};

/**
 * @param {import('@expo/config-plugins').ExportedConfig} config
 */
const withAndroidManifestService = (config) => {
  return withAndroidManifest(config, (config) => {
    config.modResults.manifest = {
      ...config.modResults.manifest,
      queries,
    };

    return config;
  });
};

module.exports = createRunOncePlugin(
  withAndroidManifestService,
  "withAndroidManifestService",
  "1.0.0"
);
