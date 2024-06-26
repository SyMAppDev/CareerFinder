import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";
import { colors } from "../utils/colors";

interface InputProps {
  isPassword?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder: string;
  style?: object;
  keyboardType?: KeyboardTypeOptions;
  isError?: boolean;
}

function Input({
  isPassword,
  value,
  onChangeText,
  placeholder,
  style,
  isError,
  ...props
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !isPasswordVisible}
          style={[styles.input, style]}
          {...props}
        />
        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Image
              style={styles.eye}
              source={
                isPasswordVisible
                  ? require("../assets/images/eye.png")
                  : require("../assets/images/eye_closed.png")
              }
            />
          </Pressable>
        ) : null}
      </View>
      <Text style={styles.invalidField}>{isError ? "Invalid field.": ""}</Text>
    </View>
  );
}

export default React.memo(Input);

export const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
  },
  inputContainer: {
    backgroundColor: colors.white,
    borderRadius: 14,
    borderColor: colors.grey,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 5,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
  },
  eye: {
    width: 15,
    height: 12,
    marginHorizontal: 16,
  },
  arrow: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
    transform: [{ rotate: "270deg" }],
  },
  placeholder: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
    color: colors.lightGrey,
  },
  invalidField: {
    color: colors.error,
    marginLeft:10,
  },
});
