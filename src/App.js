import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';


const Stack = createNativeStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTintColor: '#FFB938',
  headerTitleStyle: {
    fontSize: 18,
  },
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
