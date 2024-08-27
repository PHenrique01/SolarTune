import { TextInput, View } from "react-native";

interface InputProps {
    handleBlur: any;
    handleChange: any;
}

export default function Input({ handleBlur, handleChange }:InputProps) {
    return (
        <TextInput onBlur={handleBlur} onChange={handleChange} className="border-solid border-2 rounded p-2 border-c8" />
    )
}