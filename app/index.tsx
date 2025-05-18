import { Button, View } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingVertical: 8,
        paddingHorizontal: 16,
      }}
    >
      <Button
        title="Go To Zeller List Screen"
        onPress={() => router.push("/zellerList")}
      />
    </View>
  );
}
