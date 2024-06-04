import React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../utils/colors";

interface SearchBarProps {
  onFilterPress: () => void;
  onSearch: (str: string) => void;
  searchValue: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

function SearchBar({
  onFilterPress,
  onSearch,
  searchValue,
  onFocus,
  onBlur,
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.iconContainer}>
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
          onFocus={onFocus}
          onBlur={onBlur}
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
  );
}

export default React.memo(SearchBar);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 8,
    flex: 1,
    maxWidth: "80%",
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
    borderRadius: 8,
  },
  searchIcon: {
    width: 16,
    height: 18,
  },
  input: {
    flex: 1,
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
});
