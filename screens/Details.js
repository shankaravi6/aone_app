import React from "react";
import { View, Button, Text, ScrollView, Image, StyleSheet, TouchableOpacity, TouchableOpacityBase } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const Details = ({ navigation }) => {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={true} vertical={true}>
                <View>
                    <ScrollView
                        horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('Dune')}>
                                <Image source={require('../assets/dune.jpg')} style={styles.slideimg} ></Image>
                                <LinearGradient
                                    colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]}
                                    style={styles.lin}

                                ></LinearGradient>
                                <Text style={styles.txt}>
                                    Dune - Part 2 Confimed at 2022
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image source={require('../assets/atlan.jpg')} style={styles.slideimg} ></Image>
                            <LinearGradient
                                colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]}
                                style={styles.lin}

                            ></LinearGradient>
                            <Text style={styles.txt}>
                                The Lost City of Atlantis
                            </Text>
                        </View>
                        <View>
                            <Image source={require('../assets/china.jpg')} style={styles.slideimg} ></Image>
                            <LinearGradient
                                colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]}
                                style={styles.lin}

                            ></LinearGradient>
                            <Text style={styles.txt}>
                                First Women Walk in Space
                            </Text>
                        </View>
                    </ScrollView>

                </View>

                <Text style={{ marginTop: 20, marginLeft: 15, color: "#3399ff", fontSize: 22, fontWeight: 'bold' }}>Top Stories</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Dune')}>
                    <View elevation={3} style={styles.card}>
                        <View style={styles.align}>
                            <Image source={require('../assets/dune.jpg')} style={styles.img}></Image>
                            <Text style={styles.title}>Dune part 2 is Confimed at 2022
                                {'\n'}
                                <Text style={styles.date}>New | Dec 10</Text>
                                {'\n'}{'\n'}
                                <Text style={styles.cat}>Entertainment</Text>
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Dune')}>
                    <View elevation={3} style={styles.card}>
                        <View style={styles.align}>
                            <Image source={require('../assets/china.jpg')} style={styles.img}></Image>
                            <Text style={styles.title}>First China Women Walk in Space
                                {'\n'}
                                <Text style={styles.date}>New | Dec 10</Text>
                                {'\n'}{'\n'}
                                <Text style={styles.cat}>Space</Text>
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Dune')}>
                    <View elevation={3} style={styles.card}>
                        <View style={styles.align}>
                            <Image source={require('../assets/atlan.jpg')} style={styles.img}></Image>
                            <Text style={styles.title}>The Lost city of Atlantis Mystery Found
                                {'\n'}
                                <Text style={styles.date}>New | Dec 10</Text>
                                {'\n'}{'\n'}
                                <Text style={styles.cat}>Mystery</Text>
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Dune')}>
                    <View elevation={3} style={styles.card}>
                        <View style={styles.align}>
                            <Image source={require('../assets/ms.jpg')} style={styles.img}></Image>
                            <Text style={styles.title}>New Indian Cricket Team Mentor
                                {'\n'}
                                <Text style={styles.date}>New | Dec 10</Text>
                                {'\n'}{'\n'}
                                <Text style={styles.cat}>Sports</Text>
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>


            </ScrollView>

        </View>



    )

}

export default Details;

const styles = StyleSheet.create({
    slideimg: {
        width: 315,
        height: 220,
        marginTop: 15,
        marginLeft: 10,
    },
    lin: {
        position: "absolute",
        width: 315,
        marginLeft: 10,
        height: "50%",
        marginTop: 120
    },
    card: {
        backgroundColor: 'white',
        width: 340,
        height: 125,
        marginTop: 10,
        borderRadius: 20,
        marginLeft: 10,
    },
    align: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        width: 250
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 10,
    },
    title: {
        fontSize: 18.5,
        padding: 10,
        fontWeight: 'bold'
    },
    date: {
        color: 'grey',
        fontSize: 16,
        fontWeight: 'normal'
    },
    cat: {
        color: '#3399ff',
        fontSize: 14,
        fontWeight: 'normal',
    },
    txt: {
        position: "absolute",
        marginTop: 208,
        marginLeft: 20,
        fontSize: 18,
        color: 'white'
    },
    elevation: {
        elevation: 90,
        shadowColor: 'pink',
    },
})