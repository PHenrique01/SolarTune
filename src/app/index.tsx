import { View } from "react-native";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";

export default function Index() {
  return (
    <View style={{ flex: 1}}>
      <Home />
    </View>
  );
}
