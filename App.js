import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';


const getNamesFromServer = () => {
    return 
}

const Names = () => {
    const [data, setData] = useState([])

    if (data) {
        fetch("https://lucid-detroit.com/friends.json").then((res) => res.json()).then((json) => { setData(json.names) }).catch((err)=>{alert(err)})
    }
    
    return (
        <FlatList 
        data={data}
        renderItem={(item) => (
            <Text>Friends Name: {item.item}</Text>
        )}></FlatList>
    )
}

const App = () => {
    

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Names />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "green",
        marginTop: 20,
    },
    input: {
        backgroundColor: "black",
        color: "red",
        borderRadius: 15,
        textAlign: "center"
    }
});

export default App;