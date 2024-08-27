import { View } from "react-native";
import Login from "../screens/Login";
import Register from "../screens/Register";

export default function Index() {
  return (
    <View style={{ flex: 1}}>
      {/* <Login/> */}
      <Register />
    </View>
  );
}
