import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Platform, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class SelectScreen extends Component {
    constructor() {
        super();
        this.state = {
            Familia_1: "Família Pai",
            Familia_2: "Família Mãe"
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate("Create")}>
                    <Text style={styles.buttonText}>{this.state.Familia_1} </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate("CreateP")}>\
                    <Text style={styles.buttonText}>{this.state.Familia_2}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#A3B18A",
        alignItems: "center",
        justifyContent: "center"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    button: {
        width: RFValue(250),
        height: RFValue(50),
        flexDirection: "row",
        marginBottom: RFValue(60),
        alignItems: "center",
        borderRadius: RFValue(30),
        backgroundColor: "white",
        marginBottom: RFValue(20),
        justifyContent: "center",
    },
    buttonText: {
        fontSize: RFValue(24),
        color: "#000000",
        alignSelf: "center"
    },
})