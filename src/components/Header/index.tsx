import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"

export default function HeaderComp() {
    return (
        <View className="flex flex-row justify-between items-center">
            <View>
                <Text className="color-p text-4xl">SolarTune</Text>
            </View>
            <View>
                <Pressable>
                    <Ionicons name="menu" size={24} color={"#CCCCCC"}/>
                </Pressable>
            </View>
        </View>
    )
}