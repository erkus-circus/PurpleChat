import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, Button } from 'react-native';
import { accountSocket, chatSocket } from '../socketio';
import "../socketio"
import { purpleBackground } from '../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: purpleBackground,
        justifyContent: "flex-start",
        alignContent: "space-around"
    },
    input: {
        // flex: 1,
        margin: 20,
        padding: 5,
        borderRadius: 6,
        backgroundColor: "white"
    },
    label: {
        // flex: 1.
        color: "white"
    },
    buttons: {
        flex: 1,
        flexDirection: "row",
        marginTop: 60,
        justifyContent: "center"
    },
    button: {

    }
})

export class RegisterScreen extends React.Component {

    constructor(props) {
        super(props)
        this.props = props;

        this.state = {
            username: "",
            password: "",
            password2: "",
            email: "",
            fullname: "",
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={styles.label} >Username: </Text>
                    <TextInput style={styles.input} onChangeText={(text)=>this.setState({username: text})} value={this.state.username} autoCorrect={false} autoCapitalize={"none"} />
                    <Text style={styles.label} >Email: </Text>
                    <TextInput style={styles.input} onChangeText={(text)=>this.setState({email: text})} value={this.state.email} autoCorrect={false} autoCapitalize={"none"} />

                    <Text style={styles.label} >Full Name: </Text>
                    <TextInput style={styles.input} onChangeText={(text)=>this.setState({fullname: text})} value={this.state.fullname} autoCorrect={false} autoCapitalize={"none"} />

                    <Text style={styles.label} >Password: </Text>
                    <TextInput style={styles.input} onChangeText={(text)=>this.setState({password: text})} value={this.state.password} blurOnSubmit secureTextEntry />
                    <Text style={styles.label} >Confirm Password: </Text>
                    <TextInput style={styles.input} onChangeText={(text)=>this.setState({password2: text})} value={this.state.password2} blurOnSubmit secureTextEntry />

                    <View style={styles.buttons}>
                        <Button title="Register" onPress={null}></Button>

                    </View>
                </View>   
            </TouchableWithoutFeedback>
        )
    }
}