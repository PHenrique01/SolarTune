import { ImageBackground, Text, View } from "react-native";
import Constants from "expo-constants"
import Label from "@/src/components/Label";
import Input from "@/src/components/Input";
import ButtonComp from "@/src/components/Button";

export default function Register() {
    const statusBarHeight = Constants.statusBarHeight;

    return (
        <ImageBackground source={require('../../assets/images/bg-img.png')} className="bg-cover bg-center">
            <View style={{ marginTop: statusBarHeight + 8}} className="flex justify-center min-h-screen px-5">
                <View className="pb-16">
                    <Text className="text-5xl color-c4 capitalize">Criar uma nova conta</Text>
                </View>
                <View className="flex flex-col gap-5 pb-5">
                    <View>
                        <Label iconeName="person" nameLabel="Name" />
                        <Input handleBlur={"name"} handleChange={"name"} />
                    </View>
                    <View>
                        <Label iconeName="mail" nameLabel="E-mail" />
                        <Input handleBlur={"email"} handleChange={"email"} />
                    </View>
                    <View>
                        <Label iconeName="key" nameLabel="Senha" />
                        <Input handleBlur={"senha"} handleChange={"senha"} />
                    </View>
                    <View className="flex flex-col gap-5 pt-10">
                        <ButtonComp name="Cadastrar-se"/>
                        <Text className="text-lg text-center color-c4">Já possui um cadastro? <Text className="underline">Entrar na conta</Text></Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}