import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawerContent from "./app/screens/CustomDrawerContent";
import CoffeeDetailsScreen from "./app/screens/CoffeeDetailsScreen";
import coffees from "./app/config/coffees";
import SplashScreen from "./app/screens/SplashScreen";
import LoginScreen from './app/screens/LoginScreen';
const Drawer = createDrawerNavigator();

function MyDrawer({coffeess}) {
 
  return (
    <Drawer.Navigator
    drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.dark,
        }
      }}
    >
      <Drawer.Screen name="Main" component={HomeScreen} />
      <Drawer.Screen name="DetailScreen" component={CoffeeDetailsScreen} cof={coffeess[4]}/>
      <Drawer.Screen name="SplashScreen" component={SplashScreen} />
      <Drawer.Screen name="login" component={LoginScreen} />

    </Drawer.Navigator>
  );
}

const App = () => {
  return (
   
     
      <NavigationContainer>
      <MyDrawer coffeess={coffees} />
      </NavigationContainer>
   
  );
};

export default App;

const styles = StyleSheet.create({});
