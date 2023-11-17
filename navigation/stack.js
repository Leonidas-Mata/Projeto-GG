import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/loginScreen";
import SelectScreen from "../screens/selectScreen";
import CreateFamily from "../screens/CreateFamily";
import CreatePeople from "../screens/createPeople";
import RegisterScreen from "../screens/register";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Select" component={SelectScreen} />
            <Stack.Screen name="Create" component={CreateFamily} />
            <Stack.Screen name="CreateP" component={CreatePeople} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
