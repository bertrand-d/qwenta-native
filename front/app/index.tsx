import { Text, View} from "react-native";
import style from '../Style.js'


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={style.button}>Edit app/index.tsx to edit this screen test 2.</Text>
    </View>
  );
}
