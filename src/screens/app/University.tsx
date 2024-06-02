import React, { useState } from "react"
import { InstitutionType } from "../../data/Institutions"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Carousel from "../../components/Carousel";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../utils/colors";

interface UniversityProps {
   route: {
     params: {
       item: InstitutionType;
     };
   };
 }

function University({ route } : UniversityProps) {
   const navigation = useNavigation();
    const { item } = route.params;
    const [isFavorite, setIsFavorite] = useState(item.isFavorite);

    function goBack(){
      navigation.goBack();
    }
    
    function toggleFavorite(){
      setIsFavorite(!isFavorite)
      item.isFavorite = isFavorite //aca, cuandoconectemos al backend,s e va a tener q ahcer la actualizacion deel estado en back
    }

 return(
    <View>
      <View style={styles.buttonsContainer}>

      <TouchableOpacity onPress={goBack}>
         <Image source={require('../../assets/images/back.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleFavorite}>
         <Image source={isFavorite ? require('../../assets/images/heart_active.png') : require('../../assets/images/heart.png')} />
      </TouchableOpacity>
      </View>
      <Carousel images={item?.image} />
      <View style={styles.infoContainer}>

      <Text style={styles.title}>{item?.title}</Text>
      <Text style={styles.subtitle}>Horario de atencion: {item?.availability}</Text>
      <Text style={styles.subtitle}>Dias de atencion: {item?.days}</Text>
      <Text style={styles.subtitle}>Email: {item?.email}</Text>
      <Text style={styles.subtitle}>Telefono: {item?.tel}</Text>
      <Text style={styles.subtitle}>Direccion: {item?.address}</Text>
      </View>
      
    </View>
 )   
}

export default React.memo(University)

const styles = StyleSheet.create({
   buttonsContainer:{
      position: 'absolute',
      flexDirection:'row',
      zIndex: 1,
      justifyContent: 'space-between',
      width:'100%',
      paddingHorizontal:20,
      marginTop:20
   },
   infoContainer:{
      padding:20
   },
   title:{
      fontWeight:'bold',
      color:colors.black,
      fontSize:32,
   },
   subtitle:{
      fontSize:16,
      marginVertical:8
   }


})