import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
enableScreens();

import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { colors } from './src/utils/colors';
import StackNavigator from './src/components/navigators/StackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <View style={styles.backgroundStyle}>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <StackNavigator />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default React.memo(App);
