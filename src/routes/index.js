import React from "react";
import Home from "../screen/Home/index";
import Details from "../screen/Details/index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Routes() {

  const stack = createStackNavigator();

    return (
        <NavigationContainer>
            <stack.Navigator>
                
            <stack.Screen name = 'details' component = {Details}/>
            <stack.Screen name = 'home' component = {Home}/>
            
            </stack.Navigator>
        </NavigationContainer>
    
      
      
     
    );
  }
