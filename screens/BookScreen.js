import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'


export default function BookScreen({route}) {

    const params = route.params;
  
    return (
        <ScrollView>
        <View style={styles.container}>
            
        <View style={styles.main}>
            <Image source={params.image} style={styles.imageStyle}/>
         
            <Text style={styles.titleStyle}>{params.title}</Text>
            <Text style={styles.authorStyle}>{params.author}</Text>
            <Text style={styles.descStyle}>{params.description}</Text>
         
      </View>
            
      </View>
      </ScrollView>
    );
  }
  
const styles = StyleSheet.create({
    imageStyle: {
        height: 400,
        width: 300
    },
    container: {
        flex: 1,
        alignItems: 'center',
      },
    main : {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor: '#FFFFFF',
        height: 850,
        width: 350,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleStyle: {
        color: 'black',
        paddingTop: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    authorStyle: {
        color: 'black',
        paddingTop: 10,
        textAlign: 'center',  
    },
    descStyle: {
        color: 'black',
        paddingTop: 10,
        textAlign: 'center',
        fontStyle: 'italic' 
    }
    }
);