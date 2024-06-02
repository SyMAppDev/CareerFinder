import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import { colors } from "../../utils/colors";
import { InstitutionType, Institutions } from "../../data/Institutions";
import ItemsList from "../../components/ItemsList";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../../components/navigators/StackNavigator";


interface TabNavigatorNavigationProp
  extends StackScreenProps<StackParamList, "TabNavigator"> {}

function SearchScreen({ navigation }: TabNavigatorNavigationProp){

    const [searchValue, setSearchValue] = useState("");
    const [searchedInstitutions, setSearchedInstitutions] = useState<InstitutionType[]>(Institutions);


    function onCardPress(item : InstitutionType){
        navigation.navigate("University", {item})
      }

    function onSearch(value: string) {
        setSearchValue(value);

        setSearchedInstitutions(
          Institutions.filter((item) =>
              item.title.toLowerCase().includes(value.toLowerCase()) || item.subtitle.toLowerCase().includes(value.toLowerCase())
            
        )
    );
    console.log(searchedInstitutions)
      }

    return (

        <SafeAreaView style={styles.container}>

            <Header onSearch={onSearch} searchValue={searchValue}  />
            <ItemsList title="Universidades" items={searchedInstitutions} isSearch={searchValue.length>0} onItemPress={onCardPress}/>

        </SafeAreaView>
    )
}

export default React.memo(SearchScreen)

const styles = StyleSheet.create({
  container: {
    padding: 24,
    // backgroundColor: colors.white,
    flex:1,
  }
  });