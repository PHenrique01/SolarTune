import { Text, TouchableOpacity, View } from "react-native";

interface ButtonProps{
    name: string;
    icon?: string;
    onPress?(): void;
    disabled?: any;
}

export default function ButtonComp( {name, icon, onPress, disabled}: ButtonProps) {
    return (
        <TouchableOpacity className="bg-p flex flex-row justify-center py-4 rounded">
            <Text className="color-c11 capitalize text-lg font-semibold">{name}</Text> 
        </TouchableOpacity>
    )
} 