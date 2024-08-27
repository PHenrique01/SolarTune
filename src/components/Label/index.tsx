import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons"

interface LabelProps {
    nameLabel: string;
    iconeName: keyof typeof Ionicons.glyphMap;
}

export default function Label({ nameLabel, iconeName }: LabelProps) {
    return (
        <View className="flex flex-row items-center gap-2 pb-2.5">
            <Ionicons name={iconeName} size={18} color="#CCCCCC" />
            <Text className="text-lg color-c4">{nameLabel}</Text>
        </View>
    )
}