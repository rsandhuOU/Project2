import { View, Text, Button } from "react-native";
import React from "react";
import { useState } from "react";

function Asia(){
  const [area, setArea] = useState({
    name: "Hong Kong",
    country: "China",
    language: "English and Mandarin",
    population: "7.5 million",
    rating: "89%",
    attractions: "Historic Temples/Museums, Vibrant Street Life, Luxury"
  });

  const updateArea = () => {
    setArea(previousState => {
      return { ...previousState, 
        name: "Phuket",
        country: "Thailand",
        language: "Thai",
        population: "79,308",
        rating: "88%",
        attractions: "Vibrant Nightlife, Exotic Beaches, Delicious Seafood" }
    });
  }

  const updateArea1 = () => {
    setArea(previousState => {
      return { ...previousState, 
        name: "Tokyo",
        country: "Japan",
        language: "Japanese",
        population: "38.14 million",
        rating: "77%",
        attractions: "Japanese Culture, Largest City in the World, Unique Technologies" }
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

export default Asia;