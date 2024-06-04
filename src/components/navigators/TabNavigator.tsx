import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import SearchScreen from "../../screens/app/SearchScreen";
import Favorites from "../../screens/app/Favorites";


const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
      <Tab.Navigator initialRouteName="Tab2" backBehavior="none" screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Tab1"
            component={Favorites}
            options={{
              tabBarLabel: "Favoritos",
              tabBarLabelStyle: styles.tabFont,
              tabBarStyle:styles.tabBar,
              tabBarIcon: ({ focused, color, size }) => {
                let icon: any;
                icon = focused
                  ? require("../../assets/images/heart_active.png")
                  : require("../../assets/images/heart.png"); 
                return <Image style={{ width: 26, height: 26 }} source={icon} />;
              },
            }}
          />
        <Tab.Screen
          name="Tab2"
          component={SearchScreen}          
          options={{                    
            tabBarLabel: "Buscar",
            tabBarLabelStyle: styles.tabFont,
            tabBarStyle:styles.tabBar,
            tabBarIcon: ({ focused, color, size }) => {
              let icon: any;
              icon = focused
                ? require("../../assets/images/home_active.png")
                : require("../../assets/images/home.png");
              return <Image style={{ width: 26, height: 26 }} source={icon} />;
            },
          }}
        />
        <Tab.Screen
          name="Tab3"
          component={Tab3Screen}
          options={{
            
            tabBarLabel: "Eventos",
            tabBarLabelStyle: styles.tabFont,
            tabBarStyle:styles.tabBar,
            tabBarIcon: ({ focused, color, size }) => {
              let icon: any;
              icon = focused
                ? require("../../assets/images/calendar_active.png")
                : require("../../assets/images/calendar.png"); 
              return <Image style={{ width: 26, height: 26 }} source={icon} />;
            },
          }}
        />
      </Tab.Navigator>
    );
  }
  
  function Tab3Screen() {
  
    return null;
  }

export default React.memo(TabNavigator)

const styles = StyleSheet.create({
    tabBar:{
        borderTopEndRadius:14,
        borderTopStartRadius:14,
        // backgroundColor:colors.white,
        padding:10,
        height:70
    },
    tabFont:{
        fontSize:14,
        fontWeight:'500',
        color: colors.black
    }
  });