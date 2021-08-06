import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';


const getNamesFromServer = () => {
    return 
}

const Names = () => {
    const [data, setData] = useState([])

    if (data.toString() == "") {
        fetch("https://lucid-detroit.com/friends.json").then((res) => res.json()).then((json) => { setData(json.names) }).catch((err)=>{alert(err)})
    }
    
    return (
        <FlatList
        data={data}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={(item) => (
            <Text>Friends Name: {item.item}</Text>
        )}></FlatList>
    )
}

/*
<message>
    time: sender: message 

*/

const App = () => {
    return (
        <View style={styles.everything}>
            <View style={styles.container}>
                <Names />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    everything: {
        backgroundColor: 'rgb(36, 12, 71)',
        flex: 1,
    },
    container: {
        flex: 1,
        marginTop: 40,
        color: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;