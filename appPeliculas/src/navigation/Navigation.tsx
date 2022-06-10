import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { DetailsScreen } from '../screens/DetailScreen';
import { HomeScreen } from '../screens/HomeScreen';
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
export default Navigator;
