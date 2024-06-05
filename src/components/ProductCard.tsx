import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, Linking, Pressable, Platform } from "react-native";
import { InstitutionType } from "../data/Institutions";
import Carousel from "./Carousel";
import { colors } from "../utils/colors";

interface CardProps {
  item: InstitutionType;
  onClose: () => void;
}

function ProductCard({ item, onClose }: CardProps) {
  const [isFavorite, setIsFavorite] = useState(item.isFavorite);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    item.isFavorite = isFavorite; // Consider updating state on backend
  };

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${item.email}`);
  };
  const handleTelPress = () => {
    Linking.openURL(`tel:${item.tel}`);
  };

  const handleAddressPress = () => {
    const address = `${item.address}`;
    const encodedAddress = encodeURIComponent(address);
    Platform.OS === 'ios' ? Linking.openURL(`http://maps.apple.com/?q=${encodedAddress}`) : Linking.openURL(`http://maps.google.com/maps?q=${encodedAddress}`)
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={onClose}>
        <Image style={styles.iconImage} source={require('../assets/images/close.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleFavorite}>
          <Image style={styles.iconImage}
            source={isFavorite ? require('../assets/images/heart_active.png') : require('../assets/images/heart.png')}
          />
        </TouchableOpacity>
      </View>
      <Carousel images={item?.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>Horario de atencion: {item?.availability}</Text>
        <Text style={styles.subtitle}>Dias de atencion: {item?.days}</Text>

        <View style={styles.contactContainer}>
        <Text style={styles.subtitle}>Email:</Text>
          <Pressable onPress={handleEmailPress}>
            <Text style={styles.linkText}>{item?.email}</Text>
          </Pressable>
        </View>

        <View style={styles.contactContainer}>
        <Text style={styles.subtitle}>Telefono:</Text>
          <Pressable onPress={handleTelPress}>
            <Text style={styles.linkText}>{item?.tel}</Text>
          </Pressable>
        </View>     

        <View style={styles.contactContainer}>
        <Text style={styles.subtitle}>Direccion:</Text>
          <Pressable onPress={handleAddressPress}>
            <Text style={styles.linkText}>{item?.address}</Text>
          </Pressable>
        </View>     
      </View>
    </View>
  );
}

export default React.memo(ProductCard);

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  buttonsContainer: {
    position: "absolute",
    flexDirection: "row",
    zIndex: 1,
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  iconImage:{
    width:24,
    height:24
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    color: colors.black,
    fontSize: 32,
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 8,
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  linkText: {
    textDecorationLine: "underline",
    fontSize: 16,
    marginLeft: 8, // Add spacing between label and email address
  },
});
