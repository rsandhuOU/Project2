import { View, Text, Button } from "react-native";
import React from "react";
import { useState } from "react";

function Africa(){
  const [area, setArea] = useState({
    name: "Serengeti Park",
    country: "Tanzania",
    language: "Swahili and English",
    population: "1.73 million surrounding the park",
    rating: "98%",
    attractions: "Truck Safari, Witness the Great Migration, Rivers with Immense Wildlife"
  });

  const updateArea = () => {
    setArea(previousState => {
      return { ...previousState, 
        name: "Cape Town",
        country: "South Africa",
        language: "English",
        population: "4.61 million",
        rating: "91%",
        attractions: "Breathtaking Views, Penguin Beaches, Gardens" }
    });
  }

  const updateArea1 = () => {
    setArea(previousState => {
      return { ...previousState, 
        name: "Marrakesh",
        country: "Morocco",
        language: "Turkish",
        population: "928,850",
        rating: "84%",
        attractions: "Luxurious/Historic Hotels, Spa Central of Africa, Convergence of Beach and Desert" }
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

export default Africa;