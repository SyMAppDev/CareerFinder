import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface DividerProps {
    title: string;
  }
  
  function Button({ title }: DividerProps) {
  
    return (
        <View style={styles.container}>
        <View style={styles.line} />
        <Text style={styles.text}>{title}</Text>
        <View style={styles.line} />
      </View>
    )
}

export default React.memo(Button);
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: '#CCCCCC',
    },
    text: {
      color: '#999999',
      paddingHorizontal: 10,
      fontSize: 16,
    },
  });