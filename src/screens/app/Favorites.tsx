import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { StackParamList } from "../../components/navigators/StackNavigator";
import { InstitutionType, Institutions } from "../../data/Institutions";
import { Modal, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import ItemsList from "../../components/ItemsList";
import ProductCard from "../../components/ProductCard";
import ModalProduct from "../../components/ModalProduct";


interface TabNavigatorNavigationProp
  extends StackScreenProps<StackParamList, "TabNavigator"> {}

function Favorites({ navigation }: TabNavigatorNavigationProp){
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<InstitutionType | null>(null);
  const [favoriteInstitutions, setFavoriteInstitutions] = useState<InstitutionType[]>(Institutions.filter(x=>x.isFavorite));

  function onCardPress(item : InstitutionType){
      setSelectedItem(item);
      setModalVisible(true);
  }

  
  function closeModal() {
    setModalVisible(false);
    setSelectedItem(null);
  }

    return (

        <SafeAreaView style={styles.container}>
            <ItemsList title="Favoritos" items={favoriteInstitutions} onItemPress={onCardPress}/>
          <ModalProduct modalVisible={modalVisible} closeModal={closeModal} selectedItem={selectedItem}/>
        </SafeAreaView>
    )
}

export default React.memo(Favorites)

const styles = StyleSheet.create({
  container: {
    padding: 24,
    // backgroundColor: colors.white,
    flex:1,
  },
  
  });