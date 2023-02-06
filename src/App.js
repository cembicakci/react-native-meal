import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import CategoryCard from './components/CategoryCard';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Kategoriler" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
