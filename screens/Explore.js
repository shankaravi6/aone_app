import React from 'react';
import { TouchableOpacity, View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';


const Explore = ({ navigation }) => {
    return (
        <ScrollView>
            <Text style={{
                padding: 20, marginLeft: 70, alignContent: 'center', fontSize: 26, justifyContent: 'center',
                fontWeight: 'bold', color: '#3399ff',
            }}>Trending Videos</Text>
            <View style={{}}>
                <YoutubePlayer
                    height={250}
                    play={false}
                    videoId={'8FAUEv_E_xQ'}
                />
                <Text style={{ color: 'grey', fontSize: 18, marginLeft: 10, marginTop: -45 }}>#1 Trending</Text>
                <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold', marginLeft: 10, marginTop: 0 }}>Arabic Kuthu - from Beast</Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <YoutubePlayer
                    height={250}
                    play={false}
                    videoId={'DV7nV9W7y-0'}
                />
                <Text style={{ color: 'grey', fontSize: 18, marginLeft: 10, marginTop: -45 }}>#2 Trending</Text><Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold', marginLeft: 10, marginTop: 0 }}>Chellama - from Doctor</Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <YoutubePlayer
                    height={250}
                    play={false}
                    videoId={'Lyr6c84d5AI'}
                />
                <Text style={{ color: 'grey', fontSize: 18, marginLeft: 10, marginTop: -45 }}>#3 Trending</Text>
                <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold', marginLeft: 10, marginTop: 0 }}>Two Two Two - from Kathuvakkula Rendu Kadhal</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} title='Back'>
                <View style={styles.button}>
                    <Text style={{ fontSize: 20, color: '#595959', fontWeight: '900', }}>Back</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>


    );
};

export default Explore;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#d9d9d9",
        alignItems: "center",
        width: 180,
        height: 45,
        justifyContent: "center",
        textAlign: "center",
        marginLeft: 85,
        borderRadius: 20,
        marginBottom: 30,
        marginTop: 30,
    },
})