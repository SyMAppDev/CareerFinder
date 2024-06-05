import React, { useState } from "react";
import { Image, LayoutAnimation, StyleSheet, Text, UIManager, View } from "react-native";
import { colors } from "../utils/colors";
import SearchBar from "./SearchBar";

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

interface HeaderProps {
  onSearch: (str: string) => void;
  searchValue: string;
  title: string;
}

function Header({ onSearch, searchValue, title}: HeaderProps) {
  const [showHeader, setShowHeader] = useState(true);

  const toggleHeader = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowHeader(!showHeader);
  };

  return (
    <View style={styles.container}>
      <View style={showHeader ? styles.topRow : styles.hiddenTopRow}>
        <Text style={styles.title}>{title}</Text>
        <Image source={require("../assets/images/profile.png")} />
      </View>
      <SearchBar onFilterPress={() => { }} onSearch={onSearch} searchValue={searchValue} onFocus={toggleHeader} onBlur={toggleHeader} />
    </View>
  );
}

export default React.memo(Header);

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  hiddenTopRow: {
    height: 0,
    overflow: 'hidden',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
  },

});
