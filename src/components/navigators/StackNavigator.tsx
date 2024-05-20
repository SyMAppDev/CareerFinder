import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from "../../screens/auth/SignInScreen";
import { colors } from "../../utils/colors";

export type StackParamList = {
  SignInScreen: undefined;
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
          headerTitle: "",
          cardStyle: { backgroundColor: colors.white }, // Set the background color for all screens
        }}
      >
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default React.memo(StackNavigator);
