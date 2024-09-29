import React from "react";
import { Appearance, View, Button, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import styled from 'styled-components';
import { Card } from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/Ionicons';
import { Searchbar } from "react-native-paper";
import Dune from "./Dune";


const Home = ({ navigation }) => {
    return (

        <View style={styles.main}>

            <ScrollView>
                <Text style={styles.top}>
                    <Icon name="md-megaphone" color={"#3399ff"} size={30} /> Aone
                </Text>
                <Text style={styles.subtop}>Discover the latest News</Text>
                <Searchbar
                    placeholder="Search" style={styles.search}
                />

                {/* <Card style={{ marginLeft: 20, marginTop: 15 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Details')} title='Next Screen'>
                        <Image style={{ height: 200, marginLeft: 10, marginTop: 10 }} source={require('../assets/Rook.png')} ></Image>

                    </TouchableOpacity>
                    <Text style={styles.head}>Main</Text>
                    <Text style={styles.sub}>On that day he was traveling in the ship. All those in the ship were missing, he was traveled alone. Suddenly shouting ships. He was scared, then the unexpected trip to the ship to the Caribbean island.
                    </Text>
                </Card> */}

                <View style={[styles.card, styles.elevation]}>
                    <View>

                        <Image style={styles.img} source={require('../assets/dune.jpg')} ></Image>
                        <TouchableOpacity onPress={() => navigation.navigate('Dune')} title='Next Screen'>
                            <Text style={styles.heading}>
                                Dune 2 Will Reportedly Begin Filming In July 2022
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.sub}>
                        Dune: Part 2 is expected to begin filming in July 2022, well ahead of its 2023 premiere date.
                    </Text>
                </View>

                <View style={[styles.card, styles.elevation]}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Details')} title='Next Screen'>
                            <Image style={styles.img} source={require('../assets/atlan.jpg')} ></Image>

                        </TouchableOpacity>
                        <Text style={styles.heading}>
                            Where Is the Lost City of Atlantis and Does It Even Exist?
                        </Text>

                    </View>
                    <Text style={styles.sub}>
                        Atlantis: the legendary island that sank beneath the waves in the distant past, taking down with it an advanced civilization.
                    </Text>
                </View>



                <View style={[styles.card, styles.elevation]}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Details')} title='Next Screen'>
                            <Image style={styles.img} source={require('../assets/china.jpg')} ></Image>

                        </TouchableOpacity>
                        <Text style={styles.heading}>
                            Astronaut becomes China’s first woman to walk in space
                        </Text>

                    </View>
                    <Text style={styles.sub}>
                        Astronaut Wang Yaping became the first woman to walk in space after she took part in Shenzhou-13 mission's first extravehicular activity with mission commander Zhai Zhigang.
                    </Text>
                </View>
            </ScrollView>
        </View>



    )
}

export default Home;

const Ban = styled.Image`
  width:344px;
  height: 204px;
  margin-left:10px;
  margin-top: 10px;
  border-radius: 25px;
`;

const Main = styled.View`
width: 100%;
height: 100%;
background-color: #f2f2f2;  
`;

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        justifyContent: "center",
    },

    top: {
        textAlign: "center",
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 15,
        padding: 3,
        color: "#3399ff",
        fontVariant: ["small-caps"],

    },
    subtop: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: -3,
        padding: 5,
        color: "#808080",
    },
    search: {
        width: "85%",
        marginLeft: 25,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 30,
    },
    img: {
        width: 300,
        justifyContent: "center",
        height: 200,
        marginLeft: 1,

    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 8,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 25,
        width: '90%',
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        marginLeft: 15,
        marginTop: 10,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    },
    sub: {
        marginTop: 10,
        marginLeft: -2,
    },

    // sub: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginLeft: 10,
    //     fontSize: 18,
    //     padding: 10,
    //     marginTop: -10,

    // },
    // head: {
    //     flex: 1,
    //     color: "blue",
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginLeft: 10,
    //     fontSize: 24,
    //     fontWeight: "bold",
    //     marginTop: 5,
    //     padding: 5,

    // },
})