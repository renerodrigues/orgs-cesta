// import {  } from 'expo-status-bar';
import { StyleSheet, StatusBar, SafeAreaView, Text, View } from 'react-native';
import Cesta from './src/telas/cesta';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import mock from './src/mocks/Cesta';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <AppLoading />
  } else {
    return (
      <SafeAreaView style={{flex:1}}>
        <StatusBar />
        <Cesta {...mock} />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}