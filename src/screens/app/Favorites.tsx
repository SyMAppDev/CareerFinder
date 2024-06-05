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
  const [selectedComponent, setSelectedComponent] = useState<React.ReactNode | null>(null);
  const [favoriteInstitutions, setFavoriteInstitutions] = useState<InstitutionType[]>(Institutions.filter(x=>x.isFavorite));

  function onCardPress(item : InstitutionType){
    openModal(item)
    openModal(item)
      setModalVisible(true);
  }
  function closeModal() {
    setModalVisible(false);
    setSelectedComponent(null);
  }

  function openModal (item: InstitutionType) {
    setSelectedComponent(
        <ProductCard item={item} onClose={closeModal}/>
    );
    setModalVisible(true);
};
  

    return (

        <SafeAreaView style={styles.container}>
            <ItemsList title="Favoritos" items={favoriteInstitutions} onItemPress={onCardPress}/>
          <GenericModal modalVisible={modalVisible} closeModal={closeModal} componentToRender={selectedComponent}/>
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