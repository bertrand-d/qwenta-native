import { Text } from "react-native";
import styles from '../styles/Fonts.js'

export default function MyText(props) {
  return (
      <Text style={[styles.fontStyle, props.style]}>{props.children}</Text>
  );
}
