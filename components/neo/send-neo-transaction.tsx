import { useWalletConnect } from "@cityofzion/wallet-connect-sdk-react";
import { wallet } from "@cityofzion/neon-core";
import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const BNEO_CONTRACT_HASH = "0x48c40d4666f93408be1bef038b6722404d9a4c2a";
const TO_ADDRESS = "NRmen8ukq7qo4hwGVDnCC5qwiUpR3eMXBW";

export default function SendNeoTransaction() {
  const [neoAmount, setNeoAmount] = useState("");
  const sdk = useWalletConnect();

  async function startTransaction() {
    try {
      const userAddress = sdk.getAccountAddress();

      if (!userAddress) return;

      const amount = BigInt(Math.floor(Number(neoAmount) * 1e8)).toString();

      const txid = await sdk.invokeFunction({
        invocations: [
          {
            scriptHash: BNEO_CONTRACT_HASH,
            operation: "transfer",
            args: [
              {
                type: "Hash160",
                value: wallet.getScriptHashFromAddress(userAddress),
              },
              {
                type: "Hash160",
                value: wallet.getScriptHashFromAddress(TO_ADDRESS),
              },
              { type: "Integer", value: amount },
              { type: "Any", value: null },
            ],
          },
        ],
        signers: [
          {
            account: wallet.getScriptHashFromAddress(userAddress),
            scopes: "Global",
          },
        ],
      });
      console.log(txid, "txid");
    } catch (error) {
      console.error(error, "tx error");
    }
  }

  return (
    <View style={{ marginTop: 24, padding: 12 }}>
      <SafeAreaProvider>
        <SafeAreaView>
          <TextInput
            onChangeText={(text) => {
              setNeoAmount(text);
            }}
            style={{
              backgroundColor: "pink",
              height: 100,
              width: "auto",
              marginBottom: 100,
              padding: 12,
              fontSize: 20,
            }}
            value={neoAmount}
            keyboardType="numeric"
          />
        </SafeAreaView>
      </SafeAreaProvider>

      <Button title="Send NEO" onPress={startTransaction} />
    </View>
  );
}
