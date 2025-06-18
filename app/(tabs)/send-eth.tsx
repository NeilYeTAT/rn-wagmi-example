import "@walletconnect/react-native-compat";
import ConnectEth from "@/components/eth/connect-eth";
import SendEthTransaction from "@/components/eth/send-eth-transaction";
import { View, Text } from "react-native";
import {
  AppKit,
  createAppKit,
  defaultWagmiConfig,
} from "@reown/appkit-wagmi-react-native";
import { sepolia, mainnet } from "@wagmi/core/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { YOUR_PROJECT_ID } from "@/constant";

const projectId = YOUR_PROJECT_ID;

const metadata = {
  name: "AppKit RN",
  description: "AppKit RN Example",
  url: "https://reown.com/appkit",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
  redirect: {
    native: "rnwagmiexample://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

const chains = [mainnet, sepolia] as const;

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createAppKit({
  projectId,
  wagmiConfig,
  defaultChain: mainnet,
  enableAnalytics: true,
});

const queryClient = new QueryClient();

export default function SendEth() {
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
            FOR ETH
          </Text>
        </View>

        <ConnectEth />
        <SendEthTransaction />

        <AppKit />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
