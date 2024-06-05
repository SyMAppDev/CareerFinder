import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Modal, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import { colors } from "../../utils/colors";
import { InstitutionType, Institutions } from "../../data/Institutions";
import ItemsList from "../../components/ItemsList";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../../components/navigators/StackNavigator";
import ProductCard from "../../components/ProductCard"; // Ensure this path is correct
import ModalProduct from "../../components/ModalProduct";

interface TabNavigatorNavigationProp
  extends StackScreenProps<StackParamList, "TabNavigator"> {}

function SearchScreen({ navigation }: TabNavigatorNavigationProp){

    const [searchValue, setSearchValue] = useState("");
    const [searchedInstitutions, setSearchedInstitutions] = useState<InstitutionType[]>(Institutions);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<InstitutionType | null>(null);

    function onCardPress(item : InstitutionType){
        setSelectedItem(item);
        setModalVisible(true);
    }

    function onSearch(value: string) {
        setSearchValue(value);

        setSearchedInstitutions(
          Institutions.filter((item) =>
              item.title.toLowerCase().includes(value.toLowerCase()) || item.subtitle.toLowerCase().includes(value.toLowerCase())
            
        )
    );
      }

    function closeModal() {
      setModalVisible(false);
      setSelectedItem(null);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header onSearch={onSearch} searchValue={searchValue} title={"¡Bienvenido!"}  />
            <ItemsList title="Universidades" items={searchedInstitutions} isSearch={searchValue.length>0} onItemPress={onCardPress}/>
            
           <ModalProduct closeModal={closeModal} modalVisible={modalVisible} selectedItem={selectedItem}/>

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
