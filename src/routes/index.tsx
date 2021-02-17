import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StartScreen, HomeScreen, NewsDetailsScreen} from '../pages';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewsDetail" component={NewsDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
