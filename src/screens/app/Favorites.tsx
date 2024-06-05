import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { StackParamList } from "../../components/navigators/StackNavigator";
import { InstitutionType, Institutions } from "../../data/Institutions";
import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ItemsList from "../../components/ItemsList";
import ProductCard from "../../components/ProductCard";
import GenericModal from "../../components/GenericModal";


interface TabNavigatorNavigationProp
  extends StackScreenProps<StackParamList, "TabNavigator"> {}

function Favorites({ navigation }: TabNavigatorNavigationProp){
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<React.ReactNode | null>(null);
  const [favoriteInstitutions, setFavoriteInstitutions] = useState<InstitutionType[]>(Institutions.filter(x=>x.isFavorite));

  function onCardPress(item : InstitutionType){
    openModal(item)
      setModalVisible(true);
  }
  function closeModal() {
    setModalVisible(false);
    setSelectedItem(null);
  }

  function openModal (item: InstitutionType) {
    setSelectedItem(
        <ProductCard item={item} onClose={closeModal}/>
    );
    setModalVisible(true);
};
  

    return (

        <SafeAreaView style={styles.container}>
            <ItemsList title="Favoritos" items={favoriteInstitutions} onItemPress={onCardPress}/>
          <GenericModal modalVisible={modalVisible} closeModal={closeModal} selectedItem={selectedItem}/>
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