import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";
import { HomeImage, travel } from "../assets";
import { Airplane} from "../assets";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    return (
    <SafeAreaView className="bg-white flex-1 relative">

        <View className="flex-row px-6 mt-8 items-center space-x-2">
            <Image source={Airplane} className="w-12 h-12"></Image>
            <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel App</Text>
        </View>


        <View className="px-6 mt-8 space-y-3 flex items-center">
            <Text className="text-[#3C6072] text-[42px]">Choose your perfect </Text>
            <Text className="text-[#3C6072] text-[42px]">travel plan!</Text>

            {/* <Text className="text-[#00BCC9] text-[38px] font-bold">
                Good Moments
            </Text> */}

            <Text className="text-[#3C6072] text-base">
                Welcome to Ronveer Sandhu's travel planning app. 
                Explore different regions and popular destinations rated by us; more to be added!
            </Text>
        </View>

      {/* Circle Section
      <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View> */}

        <View className="flex-1 relative items-center justify-center">
            <Image source={HomeImage} className="w-80 h-80 object-cover"></Image>
        </View>

      <TouchableOpacity onPress={() => navigation.navigate("Regions")} className="items-center justify-center">
      <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-60 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Explore</Text>
          </Animatable.View>
      </TouchableOpacity>
    
    </SafeAreaView>
    );
 };

export default HomeScreen;