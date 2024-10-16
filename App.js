import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "./OnboardingScreen"; // Đường dẫn đến file OnboardingScreen.js
import SignInScreen from "./SignInScreen"; // Đường dẫn đến file SignInScreen.js

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen 
          name="Onboarding" 
          component={OnboardingScreen} 
          options={{ headerShown: false }} // Ẩn header cho màn hình Onboarding
        />
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          options={{ headerShown: true }} // Hiện header cho màn hình SignIn
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
