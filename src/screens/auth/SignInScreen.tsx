import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../../components/Button";
import { colors } from '../../utils/colors';
import Input from "../../components/Input";
import Divider from "../../components/Divider";


function SignInScreen() {

  return(
    <View style={styles.Container}>
      <Image style={styles.Logo}  source={require("../../assets/images/LazyBull.png")}/>
      <View style={styles.FormContainer}>
  

        <Text style={styles.Title}>Iniciar Sesion</Text>
        <Text style={styles.Subtitle}>Ingresa los datos para el inicio de sesion</Text>
   
        <View>

        <Input isError={false} placeholder="email@domain.com"/>
        <Input isError={false} placeholder="contraseña" isPassword={true}/>
        </View>
        <Button  title="Entrar" onPress={()=>{}}/>
        <Button style={styles.CreateAccountButton} title="Crear Cuenta" onPress={()=>{}}/>
        <Divider title="O continuar con"/>
        <Button style={styles.CreateAccountButton} title="Google" isGoogle onPress={()=>{}}/>
      </View>
    </View>
  )
}

export default React.memo(SignInScreen);

const styles = StyleSheet.create({
  Container:{
    borderColor:colors.black,
    borderWidth:1,
    height:'100%'
  },
  Logo:{
    alignSelf:'center',
    marginTop:24,
    width:192,
    height:192
  },
  FormContainer:{   
    marginTop: 24,     
    alignItems:'center',
    paddingHorizontal:16,
    paddingVertical: 16

  },
  Title:{
    fontWeight:'600',
    color: colors.black,
    fontSize: 18
  },
  Subtitle:{
    fontSize: 18,
    color: colors.black,
  },
  CreateAccountButton:{
    backgroundColor: colors.white,
    borderWidth:2,
    borderColor: colors.black,
    color: colors.black
  },
  

})
