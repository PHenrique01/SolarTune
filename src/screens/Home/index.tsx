import { View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import HeaderComp from '@/src/components/Header';
import imgProduto1 from '../../assets/images/img1.png';
import imgProduto2 from '../../assets/images/img2.png';
import imgProduto3 from '../../assets/images/img3.png';


export default function Home() {
    const statusBarHeight = Constants.statusBarHeight;

    return (
        <LinearGradient colors={[ "#000000", "#111111" ]} locations={[ 0.4, 1 ]} className='flex-1'>
            <View style={{ marginTop: statusBarHeight + 8 }} className="px-5 pt-5">
                <HeaderComp />
                <View className="flex flex-col gap-8 pt-20">
                    <Text className="color-c4 text-3xl">Descubra os fones de ouvido que combinam tecnologia avançada e sustentabilidade</Text>
                    <TouchableOpacity className="bg-p flex flex-row justify-center py-4 rounded w-40">
                        <Text className="color-c11 text-lg font-semibold">Ver agora</Text>
                    </TouchableOpacity>
                </View>
                <View className='relative'>
                    <View className='pt-10'>
                        <Image source={imgProduto3} className='w-32 h-40'/>
                    </View>
                    <View className='pt-8'>
                        <Image source={imgProduto2} className='w-32 h-40 absolute right-0'/>
                    </View>
                    <View className='pt-8'>
                        <Image source={imgProduto1} className='w-32 h-40 absolute left-28 top-36'/>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}