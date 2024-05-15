import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './src/screens/Home';
import Estudiantes from './src/screens/Estudiantes';
import Comida from './src/screens/Comida';
import DetailScreen from './src/screens/DetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Main"
          component={MainStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} /> 
            ),
          }}
        />
        <Tab.Screen
          name="Estudiantes"
          component={Estudiantes}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="school" color={color} size={size} /> 
            ),
          }}
        />
        <Tab.Screen
          name="Comida"
          component={Comida}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="food" color={color} size={size} /> 
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
);

export default App;
