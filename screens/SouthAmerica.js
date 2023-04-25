import { View, Text, Button } from "react-native";
import React from "react";
import { useState } from "react";

function SouthAmerica(){
  const [area, setArea] = useState({
    name: "Machu Picchu",
    country: "Peru",
    language: "Spanish",
    population: "5,286",
    rating: "96%",
    attractions: "Spectacular Views, Incan History, Adventure Seaking"
  });

  const updateArea = () => {
    setArea(previousState => {
      return { ...previousState, 
        name: "Buenos Aires",
        country: "Argentina",
        language: "Spanish",
        population: "15.37 million",
        rating: "94%",
        attractions: "World-class Cusine, Historical Sites, Vibrant Entertainment" }
    });
  }

  const updateArea1 = () => {
    setArea(previousState => {
      return { ...previousState, 
        name: "Rio de Janeiro",
        country: "Brazil",
        language: "Portuguese",
        population: "12.28 million",
        rating: "77%",
        attractions: "Famous Copacobana Beach, Carnival and Samba, Natural Beauty" }
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

export default SouthAmerica;