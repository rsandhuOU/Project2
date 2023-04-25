import { View, Text, SafeAreaView, Image, Button } from "react-native";
import React from "react";
import { useState } from "react";

function WesternEurope(){
  const [area, setArea] = useState({
    name: "French Riviera",
    country: "France",
    language: "French",
    population: "2 million",
    rating: "97%",
    attractions: "St. Tropez's beaches, Monaco's Casinos, Nice's Architecture"
  });

  const updateArea = () => {
    setArea(previousState => {
      return { ...previousState, 
        name: "Scottish Highlands",
        country: "United Kingdom",
        language: "English",
        population: "600,000",
        rating: "94%",
        attractions: "Medieval Castles, Britain's Largest Mountains, Skiing and Golfing" }
    });
  }

  const updateArea1 = () => {
    setArea(previousState => {
      return { ...previousState, 
        name: "Amsterdam",
        country: "The Netherlands",
        language: "Dutch",
        population: "2.48 million",
        rating: "89%",
        attractions: "Historic Museums, Unique Shopping Centers and Architecture, Lively Nightlife" }
      
    });
  }
  return (
    
    <View className="px-6 mt-8 space-y-3 flex items-center">
      <Text className="text-[#3C6072] text-[42px]">{area.name}</Text>

      <Text>
        Country: {area.country}
      </Text>
      <Text>
        Language: {area.language}
      </Text>
      <Text>
        Population: {area.population}
      </Text>
      <Text>
        App Rating: {area.rating}
      </Text>
      <Text style={{textAlignVertical: "center",textAlign: "center",}}>
        Attractions: {area.attractions}
      </Text>
        
       <View>
       <Button
        onPress={updateArea}
        title='2nd Rated Place'
        />
        <Button
        onPress={updateArea1}
        title='3rd Rated Place'
        />
       </View>
      
    </View>



    // <SafeAreaView className="bg-white flex-1 relative">
    //   <Text>We are in {area.name} which is in {area.country}</Text>
    //   <Button 
    //     title="Next Area"
    //     onPress={() => (updateArea)}></Button>
    // </SafeAreaView>
  )
}


export default WesternEurope;