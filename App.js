import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PageTwo from './screens/PageTwo';
import WesternEurope from './screens/WesternEurope';
import EasternEurope from './screens/EasternEurope';
import Africa from './screens/Africa';
import Asia from './screens/Asia';
import Australia from './screens/Australia';
import SouthAmerica from './screens/SouthAmerica';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Regions" component={PageTwo} />
          <Stack.Screen name="Western Europe" component={WesternEurope} />
          <Stack.Screen name="Eastern Europe" component={EasternEurope} />
          <Stack.Screen name="Africa" component={Africa} />
          <Stack.Screen name="Asia" component={Asia} />
          <Stack.Screen name="Australia" component={Australia} />
          <Stack.Screen name="South America" component={SouthAmerica} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
