import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { parseEther } from "viem";
import { useSendTransaction } from "wagmi";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function SendEthTransaction() {
  const [etherCount, setEtherCount] = useState("");
  const { data, sendTransaction, isSuccess, error } = useSendTransaction();

  async function startTransaction() {
    sendTransaction?.({
      to: "0xeDC7B74Ccf1a1DF2A4EE00349b0Fe582ccE998d6",
      value: parseEther(etherCount),
    });
  }

  return (
    <View style={{ marginTop: 24, padding: 12 }}>
      <SafeAreaProvider>
        <SafeAreaView>
          <TextInput
            onChangeText={(text) => {
              setEtherCount(text);
            }}
            style={{
              backgroundColor: "pink",
              height: 100,
              width: "auto",
              marginBottom: 100,
              padding: 12,
              fontSize: 20,
            }}
            value={etherCount}
            keyboardType="numeric"
          />
        </SafeAreaView>
      </SafeAreaProvider>

      <Button title="Send ETH" onPress={startTransaction} />
      {isSuccess && <Text style={{ marginTop: 100 }}>tx success: {data}</Text>}
      {error && <Text style={{ color: "red" }}>{error.message}</Text>}
    </View>
  );
}
