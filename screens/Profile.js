import React from 'react';
import { View, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Avatar, Text, Title, Caption, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const Profile = () => {
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Avatar.Image
                            source={require('../assets/Rook.png')}
                            sizi={80}
                        />
                        <View style={{ marginLeft: 20 }}>
                            <Title style={styles.title, {
                                marginTop: 5,
                                marginBottom: 5,
                            }}>Shankar Ravi</Title>
                            <Caption style={styles.caption, { color: '#3399ff', fontSize: 14, lineHeight: 14 }}>@shankaravi6</Caption>
                        </View>
                    </View>
                </View>

                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                        <Icons name="map-marker-radius" color={"#777777"} size={16} />
                        <Text style={{ marginLeft: 15 }}>Chennai, India</Text>
                    </View>
                    <View style={styles.row}>
                        <Icons name="phone" color={"#777777"} size={16} />
                        <Text style={{ marginLeft: 15 }}>7871676150</Text>
                    </View>
                    <View style={styles.row}>
                        <Icons name="email" color={"#777777"} size={16} />
                        <Text style={{ marginLeft: 15 }}>shankaravi6.india@gmail.com</Text>
                    </View>
                </View>

                <View style={styles.infoBoxWrapper}>
                    <View style={styles.infoBox}>
                        <Title>80</Title>
                        <Caption>Following</Caption>
                    </View>
                    <View style={styles.infoBox}>
                        <Title>40</Title>
                        <Caption>Followers</Caption>
                    </View>
                </View>

                <View style={styles.menuWrapper}>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="heart-outline" size={25} color={'#3399ff'} />
                            <Text style={styles.menuItemText}>Your Favorites</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="share-outline" size={25} color={'#3399ff'} />
                            <Text style={styles.menuItemText}>Tell your friends</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="language-outline" size={25} color={'#3399ff'} />
                            <Text style={styles.menuItemText}>Language</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="ios-help-circle-outline" size={25} color={'#3399ff'} />
                            <Text style={styles.menuItemText}>Help</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="settings-outline" size={25} color={'#3399ff'} />
                            <Text style={styles.menuItemText}>Settings</Text>
                        </View>
                    </TouchableRipple>

                </View>

            </SafeAreaView>
        </ScrollView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});