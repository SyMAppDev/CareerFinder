import React, { useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import ProductCard from "./ProductCard";
import { InstitutionType } from "../data/Institutions";



interface ModalProductProps {
    modalVisible: boolean,
    closeModal: ()=>void,
    selectedItem: InstitutionType | null
  }

function ModalProduct({modalVisible, closeModal, selectedItem} : ModalProductProps){

    return (
        <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <TouchableOpacity style={styles.modalOverlay} onPress={closeModal} />
          <View style={styles.modalContent}>
            {selectedItem && <ProductCard item={selectedItem} onClose={closeModal} />}
          </View>
        </View>
      </Modal>
    )
}

export default React.memo(ModalProduct)

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      modalContent: {
        width: '90%',
        borderRadius: 16,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },

})