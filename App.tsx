/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,

  StyleSheet,

} from 'react-native';
import { colors } from './src/utils/colors';
import SignInScreen from './src/screens/auth/SignInScreen';


function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: colors.white,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <SignInScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default React.memo(App);
