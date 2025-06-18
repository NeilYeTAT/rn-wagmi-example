import { View, Text } from "react-native";
import ConnectNeo from "@/components/neo/connect-neo";
import SendNeoTransaction from "@/components/neo/send-neo-transaction";
import { WalletConnectProvider } from "@cityofzion/wallet-connect-sdk-react";
import { YOUR_PROJECT_ID } from "@/constant";

const wcOptions = {
  projectId: YOUR_PROJECT_ID, // the ID of your project on Wallet Connect website
  relayUrl: "wss://relay.walletconnect.com", // we are using walletconnect's official relay server
  metadata: {
    name: "MyApplicationName", // your application name to be displayed on the wallet
    description: "My Application description", // description to be shown on the wallet
    url: "https://myapplicationdescription.app/", // url to be linked on the wallet
    icons: ["https://myapplicationdescription.app/myappicon.png"], // icon to be shown on the wallet
  },
};

export default function SendNeo() {
  return (
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
        FOR NEO
      </Text>

      <WalletConnectProvider autoManageSession={true} options={wcOptions}>
        <ConnectNeo />
        <SendNeoTransaction />
      </WalletConnectProvider>
    </View>
  );
}
