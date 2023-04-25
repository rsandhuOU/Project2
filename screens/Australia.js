import { View, Text, Button } from "react-native";
import React from "react";
import { useState } from "react";

function Australia(){
  const [area, setArea] = useState({
    name: "Gold Coast",
    country: "Australia",
    language: "English",
    population: "540,559",
    rating: "92%",
    attractions: "Sandy Beaches known for Surfing, Proximity to Great Barrier Beach, Australian Wildlife"
  });

  const updateArea = () => {
    setArea(previousState => {
      return { ...previousState, 
        name: "Uluru National Park",
        country: "Australia",
        language: "English",
        population: "3,000",
        rating: "90%",
        attractions: "Uluru Rock, Desert Vallies, Australian Wildlife" }
    });
  }

  const updateArea1 = () => {
    setArea(previousState => {
      return { ...previousState, 
        name: "Queenstown",
        country: "New Zealand",
        language: "English",
        population: "18,600",
        rating: "88%",
        attractions: "Fjords and Natural Beauty, Adrenline packed Activies, Southern Beaches" }
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

export default Australia;