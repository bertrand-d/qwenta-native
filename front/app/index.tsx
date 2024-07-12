import { Text, View, Button } from "react-native";
import { useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0)

  const handleOnPress = () => {
    console.log(count)
    setCount(count + 1)
    console.log(count)
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{count}</Text>
      <Button title ="Increment" onPress={handleOnPress}/>
    </View>
  );
}
