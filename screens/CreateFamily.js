import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Switch, SafeAreaView, Platform, StatusBar } from "react-native-web";

import Calendar from "../component/calendar";

import { RFValue } from "react-native-responsive-fontsize";

import DropDownPicker from "react-native-dropdown-picker";


import firebase from "firebase";
import { firebaseConfig } from "../config";

export default class CreateFamily extends Component {
    constructor() {
        super();
        this.state = {
            date: "",
            familySide: "",
            familyName: "",
            name: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            dropdownHeight: 40,
            alreadyCreated: false
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View>
                    <Text>Criar Família </Text>
                </View>

                <View>
                    <TextInput
                        style={styles.textinput}
                        onChangeText={text => this.setState({ familyName: text })}
                        placeholder="Nome da Família"
                        value={this.state.familyName} />
                    <DropDownPicker
                        items={[
                            { label: 'Pai', value: 'father' },
                            { label: 'Mãe', value: 'mother' },
                        ]}
                        placeholder="Lado da Família"
                        containerStyle={{
                            height: 40,
                            borderRadius: RFValue(20),
                            marginBottom: RFValue(20),
                            marginHorizontal: RFValue(10),
                        }}
                        onOpen={() => {
                            this.setState({ dropdownHeight: 170 });
                        }}
                        onClose={() => {
                            this.setState({ dropdownHeight: 40 });
                        }}
                        onChangeItem={(item) =>
                            this.setState({
                                familyName: item.value
                            })
                        }
                    />

                    <View>
                        <Text>Criar Primeiro Parente </Text>
                    </View>

                    <View>
                        <Text>
                            (insira o nome do parente mais antigo da sua arvore genealogica, ela é montada do mais velho pros mais novos)
                        </Text>
                    </View>

                    <View>
                        <TextInput
                            style={styles.textinput}
                            onChangeText={text => this.setState({ name: text })}
                            placeholder="Nome"
                            value={this.state.name} />

                        <TextInput
                            style={styles.textinput}
                            onChangeText={text => this.setState({ lastName: text })}
                            placeholder="Sobrenome"
                            value={this.state.lastName} />

                        <Calendar />

                        <TextInput
                            style={styles.textinput}
                            onChangeText={text => this.setState({ email: text })}
                            placeholder="Email"
                            value={this.state.email} />

                        <TextInput style={styles.textinput}
                            onChangeText={text => this.setState({ Number: text })}
                            placeholder="Telefone"
                            value={this.state.Number} />

                        <TouchableOpacity style={styles.button} onPress={{}}>
                            <Text>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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