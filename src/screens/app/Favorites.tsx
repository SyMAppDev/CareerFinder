import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { StackParamList } from "../../components/navigators/StackNavigator";
import { InstitutionType, Institutions } from "../../data/Institutions";
import { SafeAreaView, StyleSheet } from "react-native";
import ItemsList from "../../components/ItemsList";


interface TabNavigatorNavigationProp
  extends StackScreenProps<StackParamList, "TabNavigator"> {}

function Favorites({ navigation }: TabNavigatorNavigationProp){

    const [favoriteInstitutions, setFavoriteInstitutions] = useState<InstitutionType[]>(Institutions.filter(x=>x.isFavorite));


    function onCardPress(item : InstitutionType){
        navigation.navigate("University", {item})
      }


    return (

        <SafeAreaView style={styles.container}>

            <ItemsList title="Favoritos" items={favoriteInstitutions} onItemPress={onCardPress}/>

        </SafeAreaView>
    )
}

export default React.memo(Favorites)

const styles = StyleSheet.create({
  container: {
    padding: 24,
    // backgroundColor: colors.white,
    flex:1,
  }
  });