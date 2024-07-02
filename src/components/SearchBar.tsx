import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../utils/colors";
import DistanceSlider from "./DistanceSlider";

interface SearchBarProps {
  onSearch: (str: string) => void;
  onDistanceChange: (distance: number) => void;
  searchValue: string;
  searchDistance: number;
  onFocus: () => void;
  onBlur: () => void;
}

function SearchBar({
  onSearch,
  onDistanceChange,
  searchValue,
  searchDistance,
  onFocus,
  onBlur,
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);


  function onFilterPress() {
    setIsFilterOpen(!isFilterOpen);
  }

  function toggleFocus() {
    setIsFocused(!isFocused);
    isFocused ? onBlur() : onFocus();
  }



  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <View style={styles.searchContainer}>
          <View style={isFocused ? styles.hiddenIcon : styles.iconContainer}>
            <Image
              source={require("../assets/images/search.png")}
              style={styles.searchIcon}
            />
          </View>
          <TextInput
            placeholder="Search..."
            style={styles.input}
            onChangeText={(text) => onSearch(text)}
            value={searchValue}
            onFocus={toggleFocus}
            onBlur={toggleFocus}
          />
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={onFilterPress}>
          <View style={styles.filterContainer}>
            <Image
              source={require("../assets/images/filter.png")}
              style={styles.filterIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
      {isFilterOpen && (
        <View style={styles.sliderRow}>
          <DistanceSlider currentDistance={searchDistance} maxDistance={100} onDistanceChange={onDistanceChange} />
        </View>
      )}
    </View>
  );
}

export default React.memo(SearchBar);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 8,
    flex: 1,
    maxWidth: "80%",
    paddingHorizontal: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  iconContainer: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  hiddenIcon: {
    overflow: "hidden",
    width: 0,
  },
  searchIcon: {
    width: 16,
    height: 18,
    alignSelf: "center",
  },
  input: {
    flex: 1,
    paddingVertical: 8,
  },
  filterContainer: {
    backgroundColor: colors.lightGrey,
    padding: 8,
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  filterIcon: {
    width: 29,
    height: 29,
  },
  sliderRow: {
    marginTop: 8,
  },
});
