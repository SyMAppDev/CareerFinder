import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Modal, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import { colors } from "../../utils/colors";
import { InstitutionType, Institutions } from "../../data/Institutions";
import ItemsList from "../../components/ItemsList";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../../components/navigators/StackNavigator";
import ProductCard from "../../components/ProductCard"; // Ensure this path is correct
import GenericModal from "../../components/GenericModal";

interface TabNavigatorNavigationProp
  extends StackScreenProps<StackParamList, "TabNavigator"> {}

function SearchScreen({ navigation }: TabNavigatorNavigationProp){

    const [searchValue, setSearchValue] = useState("");
    const [searchedInstitutions, setSearchedInstitutions] = useState<InstitutionType[]>(Institutions);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState<React.ReactNode | null>(null);

    function onCardPress(item : InstitutionType){
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
  };

    function onSearch(value: string) {
        setSearchValue(value);

        setSearchedInstitutions(
          Institutions.filter((item) =>
              item.title.toLowerCase().includes(value.toLowerCase()) || item.subtitle.toLowerCase().includes(value.toLowerCase())
            
        )
    );
      }

    return (
        <SafeAreaView style={styles.container}>
            <Header onSearch={onSearch} searchValue={searchValue} title={"¡Bienvenido!"}  />
            <ItemsList title="Universidades" items={searchedInstitutions} isSearch={searchValue.length>0} onItemPress={onCardPress}/>
            
           <GenericModal closeModal={closeModal} modalVisible={modalVisible} componentToRender={selectedComponent}/>

        </SafeAreaView>
    )
}

export default React.memo(SearchScreen)

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
});
