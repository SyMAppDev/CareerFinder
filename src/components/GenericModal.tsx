import React, { useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { InstitutionType } from "../data/Institutions";
import { colors } from "../utils/colors";

interface ModalProductProps {
    modalVisible: boolean,
    closeModal: () => void,
    componentToRender: React.ReactNode | null // Allow any React Node
}

function GenericModal({ modalVisible, closeModal, componentToRender }: ModalProductProps){

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
                    {componentToRender}
                </View>
            </View>
        </Modal>
    )
}

export default React.memo(GenericModal)

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
        backgroundColor: colors.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
})
