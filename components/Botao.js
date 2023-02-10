import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function Botao(props) {
    return ( 
        <>
        <TouchableOpacity>
            <View style={[styles.button, {backgroundColor: colors.bg[props.bg]}]}>
                <Text style={[styles.text, {color: colors.text[props.bg]}]}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
        </>
     );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'blue',
        borderRadius: 10,
        // width: 100,
        // height: 40,
        padding: 10,
        margin: 10,
        alignItems: 'center',
    },
    text:{
        color: 'white',
    },
})

export default Botao;