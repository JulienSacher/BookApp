import React, { useState } from 'react'
import { StyleSheet, Button, View, Text, Image } from 'react-native'

export default function HomeScreen({navigation}) {

    const switchToDetails = () => {
       navigation.navigate('Library')
    }

    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../img/logo.jpg')} />
        <View style={styles.buttonStyle}>
            <Button onPress={switchToDetails}
                color='#000000'
                title="Go" />
        </View>
        </View> 
    )
}


const styles = StyleSheet.create({
    icon: {
        height:200,
        width: 200, 
        margin: 100,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    buttonStyle: {
        width: 100,
    }
})