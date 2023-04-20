import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [lastScannedData, setLastScannedData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    setLastScannedData(data);
    await AsyncStorage.setItem('lastScannedData', data);
    alert(`Čárový kód byl úspěšně naskenován a uložen!`);
  };

  useEffect(() => {
    const getLastScannedData = async () => {
      const data = await AsyncStorage.getItem('lastScannedData');
      setLastScannedData(data);
    };
    getLastScannedData();
  }, []);

  if (hasPermission === null) {
    return <Text>Žádost o povolení fotoaparátu</Text>;
  }
  if (hasPermission === false) {
    return <Text>Žádný přístup ke kameře</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Začít scanovat'} onPress={() => setScanned(false)} />}
      <View style={{justifyContent: 'space-between', backgroundColor: "rgba(255,255,255,0.4)", padding: 8}}>
      {lastScannedData && <Text>Poslední načtený kód: {lastScannedData} <Text style={{color:'blue', textDecorationLine: "underline"}} onPress={() => Linking.openURL(lastScannedData)}>otevřít</Text></Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});

export default ScannerScreen;