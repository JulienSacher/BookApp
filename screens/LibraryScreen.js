import React, { useState } from 'react'
import { StyleSheet, TextInput, FlatList, View, Text, Image, Button, ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Switch } from 'react-native-gesture-handler';

export default function LibraryScreen({navigation}) {

    const [book, setBook] = useState([
        {id:1, title: "Supreme", author: "Phaidon", description: "To say Supreme has evolved in the past twenty-five years would be an understatement. From its humble beginnings as a small downtown New York skate shop to the hugely influential brand it is today, it's undeniable that the label now reaches every corner of the globe. Known just as much for its defiance and irreverence as it is for its clothing and collaborations —Nan Goldin, Damien Hirst, Takashi Murakami, Comme des Garçons, Nike, Louis Vuitton, to name a few— the brand has carved itself into the canon of the greats. Here we look back on the story, the creations, and the convention-defying spirit that are uniquely Supreme. James Jebbia founded Supreme In 1994. He lives and works in New York City.", image: require("../img/book1.jpg") },
        {id:2, title: "Nike SB: The Dunk Book ", author: "Rizzoli", description: "Released earlier this year, Rizzoli’s comprehensive history of the Nike SB Dunk tells the story of how a basketball silhouette became one of the most important skate shoes of all time. The 350-page book features a number of iconic SB Dunk releases — including the Staple Pigeon Dunks, Paris Dunks and Supreme Dunk SBs — as well as archive photography of Nike SB skaters including Eric Koston, Richard Mulder and more wearing the sneakers. Another stand-out feature of Nike SB: The Dunk Book is personal anecdotes from the likes of Futura and Paul Rodriguez about the silhouette.", image: require("../img/book2.jpg")},
        {id:3, title: "Sneaker Freaker. The Ultimate Sneaker Book!", author: "Taschen", description: "As the name suggests, Sneaker Freaker: The Ultimate Sneaker Book tells the story of the blog of the same name. Since it was set up in 2002 — as a way for founder Simon “Woody” Wood to get free sneakers — Sneaker Freaker has become an established footwear voice. The book mixes commentary on current sneaker culture, historical insight and a focus on minute detail of a number of sneakers. Sneaker Freaker shines a spotlight on more than 100 years of sneaker history and mixes established names and brands — including Air Max, Converse and YEEZY — with more obscure labels including Troop, Airwalk and Vision Street Wear. Sneaker Freaker will drop via the Taschen web store in December.", image: require("../img/book3.jpg")},
        {id:4, title: "Where’d You Get Those?: New York City’s Sneaker Culture: 1960-1987", author: "Testify Books", description: "Written by Bobbito Garcia, Where’d You Get Those showcases sneaker culture’s history by focusing on the earliest days of the scene in New York. The book documents the lean years of sneaker releases in the 1960s, before turning its focus onto the golden era of 1970-1987. In this section, each sneaker is listed with key facts as well as commentary regarding the cultural significance of each silhouette. Elsewhere, the book features a section on New York City playground basketball legends, and a look at sneakers released after 1987 described as “future underground classics.” You can buy Where’d You Get", image: require("../img/book4.jpg")}
    ])

    return (
        <View style={styles.container}>
            <View style={styles.searchStyle}>
                <TextInput style={styles.textInputStyle} placeholder="Search"/>
                <MaterialCommunityIcons style={styles.iconStyle} name="layers-search" size={24} color="black" />
            </View>
            <ScrollView>
            <View>
            <FlatList
                data={book}
                renderItem={({ item }) => {
                    return <View style={styles.main}>
                        
                        <Image style={styles.imageStyle} source={item.image} />
                        <Text style={styles.textStyle}>{item.title}</Text>
                        <View style={styles.buttonStyle}>
                        <Button onPress={() => navigation.navigate("Book", {title: `${item.title}`, description: `${item.description}`, author: `${item.author}`, image: `${item.image}`})} 
                            color='#000000'
                            title="About" />
                        </View>
                        </View>
                }}
                keyExtractor={item => item.id.toString()}
            />
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    textInputStyle: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 7,
        marginTop: 15,
        backgroundColor: '#FFFFFF',
        paddingLeft: 10,
    },
    searchStyle: {
        flexDirection: 'row',
        borderColor: '#000',
        paddingBottom: 10,
    },
    iconStyle: {
        marginTop: 20,
        marginLeft: 15,
    },
    imageStyle: {
        width: 50,
        height: 50
    },
    textStyle: {
        color: 'black',
        paddingTop: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    main: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor: '#FFFFFF',
        height: 420,
        width: 300,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        
    },
    imageStyle: {
        height: 300,
        width: 250,
    },
    buttonStyle: {
        paddingTop: 10,
    }
});