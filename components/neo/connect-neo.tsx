import { View, Button, Linking } from "react-native";
import { useWalletConnect } from "@cityofzion/wallet-connect-sdk-react";

export default function ConnectNeo() {
  const sdk = useWalletConnect();

  const handleConnectToNeo = async () => {
    try {
      if (!sdk) return;

      if (!sdk.isConnected()) {
        const { uri, approval } = await sdk.createConnection("neo3:mainnet", [
          "invokeFunction",
          "testInvoke",
          "signMessage",
          "verifyMessage",
        ]);

        await Linking.openURL(`https://neon.coz.io/connect?uri=${uri}`);
        const session = await approval();

        sdk.setSession(session);
        sdk.manageSession();
      }
    } catch (error) {
      console.error("Connection error:", error);
    }
  };

  return (
    <View>
      <Button
        onPress={handleConnectToNeo}
        title={sdk.isConnected() ? "Connected" : "Connect to the Neo"}
        color="#7AE2CF"
      />
    </View>
  );
}
