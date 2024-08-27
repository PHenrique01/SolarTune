import { ImageBackground, ScrollView, Text, View, TextInput } from "react-native";
import { useState } from "react";
import { Formik } from "formik"
import * as Yup from "yup"
import Constants from "expo-constants";
import Label from "@/src/components/Label";
import Input from "@/src/components/Input";
import ButtonComp from "@/src/components/Button";

export default function Login() {
    const statusBarHeight = Constants.statusBarHeight;

    const [resultado, setResultado] = useState<null | 'logado' | 'falhou'>(null);

    const handleLogin = async ({ email, senha }: any) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (email.trim() == '' && senha.trim() == ''){
          setResultado('logado');
      }
      else{
        setResultado('falhou');
      }  
    };

    return (
        <ImageBackground source={require('../../assets/images/bg-img.png')} className="bg-cover bg-center">
            <Formik initialValues={{email: '', senha: ''}} validationSchema={Yup.object().shape({
                email: Yup.string().required("Digite o email").email("E-mail não válido!"),
                senha: Yup.string().required("Digite a sua senha").min(10, "A senha precisa ter 10 caracteres!")
            })} onSubmit={handleLogin}>

                {({
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <View style={{ marginTop: statusBarHeight + 8}} className="flex justify-center min-h-screen px-5">
                        <View className="pb-16">
                            <Text className="text-6xl color-c4">Bem-vindo De Volta Ao <Text className="color-p">SolarTune</Text></Text>
                        </View>
                        <View className="flex flex-col gap-5 pb-5">
                            <View>
                                <Label iconeName="person" nameLabel="E-mail" />
                                <Input handleBlur={"email"} handleChange={"email"} />
                                { errors.email && touched.email && (
                                    <Text className="">{errors.email}</Text>
                                )}
                            </View>
                            <View>
                                <Label iconeName="key" nameLabel="Senha" />
                                <Input handleBlur={"senha"} handleChange={"senha"} />
                            </View>
                        </View>
                        <Text className="text-lg underline text-right color-c4 pb-11">Esqueceu a senha?</Text>
                        <View className="flex flex-col gap-5">
                            <ButtonComp name="entrar" onPress={() => { handleSubmit()}} disabled={isSubmitting} />
                            <Text className="text-lg text-center color-c4">Não tem uma conta ainda? <Text className="underline">Cadastre-se</Text></Text>
                        </View>
                        {resultado == 'logado' && (
                            <Text className="color-green-600">Logado com sucesso</Text>
                        )}
                        {resultado == 'falhou' && (
                            <Text className="color-red-600">Email ou senha incorreto</Text>
                        )}
                    </View>
                )}
            </Formik>
        </ImageBackground>
    )
}