import React, { useState } from 'react';
import {  View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


function Search({ onSubmit }) {

    const [ input, setInput ] = useState('')

    return(
        <View style={Styles.container}>
            <View style={Styles.search}>
                <TextInput
                    style={Styles.input}
                    placeholder='Enter the Pokémon ID or name here!'
                    value={input}
                    onChangeText={setInput}
                    onBlur={() => onSubmit(input)}/>
                <TouchableOpacity
                    style={Styles.button}
                    onPress={() => onSubmit(input)}>
                    <Icon name="search" size={18} color="#FFFFFF"></Icon>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        height: 70,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#7986CB'
    },
    search: {
        padding: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
    },
    input: {
        paddingLeft: 10,
        backgroundColor: '#fff',
        borderRadius: 2.5,
        fontSize: 14,
        flex: 6,
    },
    button: { 
        backgroundColor: '#7986CB',
        borderRadius: 2.5,
        color: '#FFFFFF', 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Search