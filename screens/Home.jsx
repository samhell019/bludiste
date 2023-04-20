import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export const Home = () => {
    return (
        <ImageBackground 
            source={require('../assets/scan.jpg')} 
            style={styles.container} 
            imageStyle={{ opacity: 0.23 }}>
            <View style={{justifyContent: 'space-between', backgroundColor: "rgba(255,255,255,0.4)", padding: 8, borderRadius: 10}}>
                <Text style={{fontSize: 40, fontWeight: "bold", color: "white", textAlign: 'center'}}>QR SCANNER</Text> 
                <Text style={{fontSize: 20, color: "white", textAlign: 'center'}}> Vítejte v naší aplikaci pro skenování QR kódů!</Text> 
            </View>
        </ImageBackground>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000e14',
        justifyContent: 'space-between',
        padding: 45,
    },
});
