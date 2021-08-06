import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, Platform } from 'react-native';
import { AutoGrowTextInput } from 'react-native-auto-grow-textinput';
/*
<message>
    time: sender: message 

*/

const CustomTextInput = () => {
    const [text, setText] = useState("")


    return (
        <View style={[styles.keyboardContainer]}>
            <AutoGrowTextInput multiline={true} style={[styles.white, styles.keyboard]} onChangeText={setText} maxHeight={120} placeholder="Type Here..." />
        </View>
    )
} 

const App = () => {



    return (
        <View style={styles.background}>
            <KeyboardAvoidingView style={styles.content} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <ScrollView>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Helldewo</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hewedello</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Heewdllo</Text>
                            <Text style={styles.white} >Hello</Text>
                            <Text style={styles.white} >Hedewllo</Text>
                            <Text style={styles.white} >Hello9</Text>
                            <Text style={styles.white} >Hello8</Text>
                            <Text style={styles.white} >Hello7</Text>
                            <Text style={styles.white} >Hello6</Text>
                            <Text style={styles.white} >Hello5</Text>
                            <Text style={styles.white} >Hello4</Text>
                            <Text style={styles.white} >Hello3</Text>
                            <Text style={styles.white} >Hello2</Text>
                            <Text style={styles.white} >Hello2</Text>
                            <Text style={styles.white} >Hello1</Text>
                            <Text style={styles.white} >Hello Bottom</Text>
                        </ScrollView>
                    </TouchableWithoutFeedback>
                </View>
                <CustomTextInput />
            </KeyboardAvoidingView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    keyboardContainer: {
        // flex: 1,
        // height: 25,
        marginLeft: 10,
        marginBottom: 30,
        marginRight: 10,
    },
    keyboard: {
        borderRadius: 16,
        padding: 8,
        backgroundColor: "purple"
    },
    content: {
        justifyContent: "center",
        alignItems: "stretch",
        flex: 1,
    },
    background: {
        backgroundColor: 'rgb(36, 12, 71)',
        justifyContent: "center",
        height: "100%"
    },
    white: {
        color: "#fff",
        padding: 6,
        flex: 1,
    },
    container: {
        flex: 1,
        //marginTop: 40,
        color: "white",
    },
    hidden: {
        display: "none"
    },
});

export default App;