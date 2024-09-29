import React from "react";
import { View, Button, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const Dune = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.con}>
                <Image style={styles.img} source={require('../assets/dune.jpg')} ></Image>
            </View>
            <Text style={styles.head}>Dune 2 Will Reportedly Begin Filming In July 2022</Text>
            <Text style={styles.date}>Oct 28, 2021</Text>
            <Text style={styles.content}>
                Warner Bros. and Denis Villeneuve are charging full speed ahead with Dune: Part 2, as the sequel is now set to begin filming in the summer of 2022.{"\n"}{"\n"}

                Dune: Part 2 is expected to begin filming in July 2022, well ahead of its 2023 premiere date. Denis Villeneuve's version of Frank Herbert's iconic sci-fi novel Dune finally debuted in theaters and on HBO Max mere weeks ago, and it has swiftly proven itself to be the adaptation fans have long been waiting for. As chosen one Paul Atreides, Timothée Chalamet leads a star-studded cast that also includes Oscar Isaac, Rebecca Ferguson, Jason Momoa, Josh Brolin, Javier Bardem, and Zendaya. Dune opened to a solid $41 million and has already grossed $330.4 million worldwide at the time of this writing.{"\n"}{"\n"}

                Even before it premiered, Villeneuve's Dune was notable because of his decision to split the hefty novel into two parts. Villeneuve explained this was so he could properly explore the expansive world Herbert created, which has often been a difficult thing for previous adaptations to master. Dune: Part 2 wasn't a guarantee when the first movie arrived, but the positive reviews, solid box office numbers, and impressive streaming performance paved the way for a greenlight mere days after Dune's release. Warner Bros. confirmed Dune: Part 2 will arrive in theaters in October 2023, much to the delight of fans.
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} title='Back'>
                <View style={styles.button}>
                    <Text style={{ fontSize: 20, color: '#595959', fontWeight: '900', }}>Back</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Dune;

const styles = StyleSheet.create({

    con: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        flex: 1,
        width: 335,
        height: 230,
        borderRadius: 20,
        marginTop: 20,
    },
    head: {
        textAlign: "left",
        marginLeft: 15,
        marginTop: 10,
        fontSize: 25,
        lineHeight: 33.5,
        fontWeight: 'bold',
        color: "black",

    },
    date: {
        textAlign: "left",
        marginLeft: 15,
        fontSize: 19,
        color: "#808080",
        fontWeight: '900',
        marginTop: 13,
        fontFamily: "sans-serif-medium"
    },
    content: {
        textAlign: "justify",
        marginLeft: 0,
        padding: 18,
        fontSize: 17,
        lineHeight: 30,
        color: "#4d4d4d",
        marginTop: 0,
        fontFamily: "sans-serif-medium"
    },
    button: {
        backgroundColor: "#d9d9d9",
        alignItems: "center",
        width: 180,
        height: 45,
        justifyContent: "center",
        textAlign: "center",
        marginLeft: 85,
        borderRadius: 20,
        marginBottom: 40,
        marginTop: -20,
    },


})