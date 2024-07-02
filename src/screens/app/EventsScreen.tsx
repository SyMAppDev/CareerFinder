import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Modal, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import { colors } from "../../utils/colors";
import ItemsList from "../../components/ItemsList";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../../components/navigators/StackNavigator";
import GenericModal from "../../components/GenericModal";
import { EventType, Events } from "../../data/Events";
import EventCard from "../../components/EventCard";

interface TabNavigatorNavigationProp
  extends StackScreenProps<StackParamList, "TabNavigator"> {}

function EventsScreen({ navigation }: TabNavigatorNavigationProp){

    const [searchValue, setSearchValue] = useState("");
    const [searchedEvents, setSearchedEvents] = useState<EventType[]>(Events);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState<React.ReactNode | null>(null);

    function onCardPress(item : EventType){
      openModal(item)
        setModalVisible(true);
    }
    function closeModal() {
      setModalVisible(false);
      setSelectedComponent(null);
    }
    function openModal (item: EventType) {
      setSelectedComponent(
          <EventCard item={item} onClose={closeModal}/>
      );
  };

    function onSearch(value: string) {
        setSearchValue(value);

        setSearchedEvents(
          Events.filter((item) =>
              item.title.toLowerCase().includes(value.toLowerCase())
          //TODO ver si aca tambien se puede agregar para buscar por algun otro valor
        )
    );
      }

    return (
        <SafeAreaView style={styles.container}>
            <Header onSearch={onSearch} searchValue={searchValue} title={"¡Bienvenido!"}  />
            <ItemsList title="Eventos" items={searchedEvents} isSearch={searchValue.length>0} onItemPress={onCardPress}/>
            
           <GenericModal closeModal={closeModal} modalVisible={modalVisible} componentToRender={selectedComponent}/>

        </SafeAreaView>
    )
}

export default React.memo(EventsScreen)

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
});
