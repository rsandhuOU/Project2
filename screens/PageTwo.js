import { View, Text, SafeAreaView, Image, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { WestEU } from "../assets";
import { EastEU } from "../assets";
import { Africa } from "../assets";
import { Asia } from "../assets";
import { Australia } from "../assets";
import { Rio } from "../assets";

const PageTwo = () => {

    const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
            <TouchableOpacity 
                style={styles.container}
                onPress={() => navigation.navigate("Western Europe")}>
                <ImageBackground source={WestEU} style={styles.image}>
                <View className="flex-1 relative items-center justify-center">
                        <Text className="text-black text-[38px] font-bold">Western Europe</Text>
                </View>
                </ImageBackground>
            </TouchableOpacity>   
                
                         
            <TouchableOpacity 
                style={styles.container}
                onPress={() => navigation.navigate("Eastern Europe")}>
                <ImageBackground source={EastEU} style={styles.image}>
                <View className="flex-1 relative items-center justify-center">
                        <Text className="text-black text-[38px] font-bold">Eastern Europe</Text>
                </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
  
        <View style={{ flex: 1 }}>
            <TouchableOpacity 
                style={styles.container}
                onPress={() => navigation.navigate("Africa")}>
                <ImageBackground source={Africa} style={styles.image}>
                <View className="flex-1 relative items-center justify-center">
                        <Text className="text-black text-[38px] font-bold">Africa</Text>
                </View>
                </ImageBackground>
            </TouchableOpacity>   
                
                         
            <TouchableOpacity 
                style={styles.container}
                onPress={() => navigation.navigate("Asia")}>
                <ImageBackground source={Asia} style={styles.image}>
                <View className="flex-1 relative items-center justify-center">
                        <Text className="text-black text-[38px] font-bold">Eastern Asia</Text>
                </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
            <TouchableOpacity 
                style={styles.container}
                onPress={() => navigation.navigate("Australia")}>
                <ImageBackground source={Australia} style={styles.image}>
                <View className="flex-1 relative items-center justify-center">
                        <Text className="text-black text-[38px] font-bold">Australia</Text>
                </View>
                </ImageBackground>
            </TouchableOpacity>   
                
                         
            <TouchableOpacity 
                style={styles.container}
                onPress={() => navigation.navigate("South America")}>
                <ImageBackground source={Rio} style={styles.image}>
                <View className="flex-1 relative items-center justify-center">
                        <Text className="text-black text-[38px] font-bold">South America</Text>
                </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    

        
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      opacity: 0.8,
    },
    text: {
      color: 'blue',
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000a0',
    },
  });

export default PageTwo;