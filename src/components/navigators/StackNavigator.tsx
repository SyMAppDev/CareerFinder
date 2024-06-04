import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from "../../screens/auth/SignInScreen";
import TabNavigator from "./TabNavigator";
import University from "../../screens/app/University";


export type StackParamList = {
  SignInScreen: undefined;
  TabNavigator: undefined;
  University: undefined;
};

const Stack = createStackNavigator<StackParamList>();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
            borderWidth: 0,
          },
          // cardStyle: { backgroundColor: colors.white }, // Set the background color for all screens
        }}
      >
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown: false}}/>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="University" component={University} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default React.memo(StackNavigator);
