import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import icons from '../config/icons';
import { AntDesign } from '@expo/vector-icons';


function Botao({type, icon, size, color, children, onPress}) {
    return ( 
        <>
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, 
            {backgroundColor: colors.bg[type], flexDirection: icons.direction[icon]}]}>
                <AntDesign style={{marginHorizontal: 20}} name={icons.icons[icon]} size={size} color={color} />
                <Text style={[styles.text, {color: colors.text[type]}]}>
                    {children}
                </Text>
            </View>
        </TouchableOpacity>
        </>
     );
}


const styles = StyleSheet.create({
    button:{
        borderRadius: 10,
        // width: 100,
        // height: 40,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{

    },

})

Botao.defaultProps = {
    type: 'primary',
    color: 'black',
    size: 24,
}

export default Botao;