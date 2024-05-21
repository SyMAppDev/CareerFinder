import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import { colors } from "../../utils/colors";
import { InstitutionType, Institutions } from "../../data/Institutions";
import ItemsList from "../../components/ItemsList";


function SearchScreen(){

    const [searchValue, setSearchValue] = useState("");
    const [searchedInstitutions, setSearchedInstitutions] = useState<InstitutionType[]>(Institutions);

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
            <ItemsList title="Universidades" items={searchedInstitutions} isSearch={searchValue.length>0}/>

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