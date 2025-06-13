import { useFonts } from "expo-font";
import "react-native-reanimated";
import { View, Text } from "react-native";

// * copy from https://docs.reown.com/appkit/react-native/core/installation#wagmi
import "@walletconnect/react-native-compat";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, arbitrum } from "@wagmi/core/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createAppKit,
  defaultWagmiConfig,
  AppKit,
} from "@reown/appkit-wagmi-react-native";
import ConnectView from "@/components/connect-view";

// 0. Setup queryClient
const queryClient = new QueryClient();

// * 1. Get projectId at https://cloud.reown.com
// todo: 填写你的 Project id
const projectId = "YOUR_PROJECT_ID";

// 2. Create config
const metadata = {
  name: "AppKit RN",
  description: "AppKit RN Example",
  url: "https://reown.com/appkit",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

const chains = [mainnet, polygon, arbitrum] as const;

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createAppKit({
  projectId,
  wagmiConfig,
  defaultChain: mainnet, // Optional
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});
// * copy end

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <View
          style={{
            marginTop: 64,
            padding: 24,
            display: "flex",
          }}
        >
          <Text
            style={{
              backgroundColor: "pink",
              fontSize: 50,
              margin: "auto",
            }}
          >
            Hello react native
          </Text>
        </View>

        {/* 连接钱包组件 */}
        <ConnectView />

        <AppKit />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
