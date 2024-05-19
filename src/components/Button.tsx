import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { colors } from "../utils/colors";

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: any;
  isGoogle?:boolean
}

function Button({ title, onPress, style, isGoogle}: ButtonProps) {
  const customStyle = !!style; // customStyle is true if style is provided

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, style, , isGoogle && styles.googleButton]}
    >
      {isGoogle && <Image style={styles.google} source={require('../assets/images/google.png')}/>}
      <Text style={[styles.title, customStyle && styles.customTitle]}>{title}</Text>
    </TouchableOpacity>
  );
}

export default React.memo(Button);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    width: '100%',
    marginVertical:8,
    flexDirection:'row',
    justifyContent:'center',
    
  },
  title: {
  
    color: colors.white, // default color
    textAlign: "center",
    fontSize: 20,
    fontWeight: '400'
  },
  customTitle: {
    color: colors.black, // color when custom style is applied
  },
   googleButton: {
   backgroundColor:colors.lightGrey,
   borderWidth:0,
  },
  google:{
    marginRight:8
  }
});
