import React, { useState } from "react";
import { Image, LayoutAnimation, Pressable, StyleSheet, Text, UIManager, View } from "react-native";
import Button from "../../components/Button";
import { colors } from '../../utils/colors';
import Input from "../../components/Input";
import Divider from "../../components/Divider";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../../components/navigators/StackNavigator";

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);


interface SignInScreenNavigationProp
  extends StackScreenProps<StackParamList, "SignInScreen"> {}

  
  function SignInScreen({ navigation }: SignInScreenNavigationProp) {
    
    function onSignIn(){
      navigation.navigate("TabNavigator");
    }
  const [isSignUp, setIsSignUp] = useState(false);

  function togleView() {
    LayoutAnimation.configureNext({
      duration: 150,
      create: 
      {
         type: LayoutAnimation.Types.easeInEaseOut,
         property: LayoutAnimation.Properties.opacity,
      },
      update: 
      {
         type: LayoutAnimation.Types.easeInEaseOut,
      }
     }); // Add animation configuration
    setIsSignUp(!isSignUp);
  }

  return(
    <View style={styles.Container}>
      {!isSignUp && <Image style={styles.Logo}  source={require("../../assets/images/LazyBull.png")}/>}

  
      <View style={[styles.FormContainer, isSignUp && {marginTop:128}]}>

        {isSignUp ? <Text style={styles.Title}>Crea tu cuenta</Text> : <Text style={styles.Title}>Iniciar Sesion</Text>}

        {isSignUp ? <Text style={styles.Subtitle}>Ingresa los datos necesarios para tu cuenta</Text> : <Text style={styles.Subtitle}>Ingresa los datos para el inicio de sesion</Text>}
   
        <View>

        <Input isError={false} placeholder="email@domain.com"/>
        <Input isError={false} placeholder="contraseña" isPassword={true}/>
        {isSignUp && <>
          <Input isError={false} placeholder="contraseña" isPassword={true}/>
          <Input isError={false} placeholder="nombre"/>
          <Input isError={false} placeholder="apellido"/>
        </>                
        }
        </View>
        {isSignUp ? <Button  title="Crear Cuenta" onPress={()=>{}}/> : <Button  title="Entrar" onPress={onSignIn}/>}
        
        {isSignUp ? 
        <Pressable style={styles.back} onPress={togleView}>
        <Divider title="Volver"/>
      </Pressable>
       : <Button style={styles.CreateAccountButton} title="Crear Cuenta" onPress={togleView}/>
      }

        {!isSignUp && <>
        <Divider title="O continuar con"/>
        <Button style={styles.CreateAccountButton} title="oogle" isGoogle onPress={()=>{}}/>
        </>}
      </View>
    </View>
  )
}

export default React.memo(SignInScreen);

const styles = StyleSheet.create({
  Container:{
    
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
    fontSize: 24
  },
  Subtitle:{
    fontSize: 18,
    color: colors.black,
    marginBottom:16
  },
  CreateAccountButton:{
    backgroundColor: colors.white,
    borderWidth:2,
    borderColor: colors.black,
    color: colors.black
  },
  back:{
    width:'100%'
  }
  

})
