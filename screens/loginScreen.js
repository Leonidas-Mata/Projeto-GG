import React, { Component } from "react";
import { Text, TextInput, View, TouchableOpacity, StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class LoginScreen extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            senha: "",
            isSigned: false
        }

    }

    Login = (email, senha) => {
        this.props.navigation.replace("Select")
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <TextInput
                    style={styles.textinput}
                    onChangeText={text => this.setState({ email: text })}
                    placeholder="Digite seu Email"
                    value={this.state.email}
                />

                <TextInput
                    style={styles.textinput}
                    onChangeText={text => this.setState({ senha: text })}
                    placeholder="Digite sua Senha"
                    value={this.state.senha}
                />

                <TouchableOpacity style={styles.button} onPress={() => this.Login(this.state.email, this.state.senha)}>
                    <Text style={styles.buttonText}>Log-In</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.replace("Register")}>
                    <Text style={styles.buttonTextNewUser}>Não tem um Log-in? Registre-se!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#15193c",
        alignItems: "center",
        justifyContent: "center"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    textinput: {
        width: RFValue(250),
        height: RFValue(50),
        padding: RFValue(10),
        borderColor: "#FFFFFF",
        borderWidth: RFValue(4),
        borderRadius: RFValue(10),
        marginBottom: RFValue(20),
        fontSize: RFValue(20),
        color: "#FFFFFF",
        backgroundColor: "#000000"
    },
    button: {
        width: RFValue(250),
        height: RFValue(50),
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: RFValue(30),
        backgroundColor: "white",
        marginBottom: RFValue(20)
    },
    buttonText: {
        fontSize: RFValue(24),
        color: "#000000"
    },
    buttonTextNewUser: {
        fontSize: RFValue(12),
        color: "#FFFFFF",
        textDecorationLine: 'underline'
    }
})