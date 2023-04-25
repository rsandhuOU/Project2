import { View, Text, Button } from "react-native";
import React from "react";
import { useState } from "react";

function EasternEurope(){
  const [area, setArea] = useState({
    name: "Prague",
    country: "Czech Republic",
    language: "Czech",
    population: "2.7 million",
    rating: "95%",
    attractions: "Historic City Center, Gothic and Baroque Architecture, Picturesque Views"
  });

  const updateArea = () => {
    setArea(previousState => {
      return { ...previousState, 
        name: "Adriatic Coast",
        country: "Croatia",
        language: "Croatian",
        population: "1.37 million",
        rating: "94%",
        attractions: "Beautiful Beaches, Not Crowded, Unique Beach Towns" }
    });
  }

  const updateArea1 = () => {
    setArea(previousState => {
      return { ...previousState, 
        name: "Istanbul",
        country: "Turkey",
        language: "Turkish",
        population: "15.46 million",
        rating: "83%",
        attractions: "Historic Palaces and Mosques, Food unlike anywhere else, Intense Soccer/Basketball environments" }
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
  )
}

export default EasternEurope;