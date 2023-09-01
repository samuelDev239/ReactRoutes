import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ConteudoBusca, DivHeader, DivNav, Input } from './src/Styles';
import Header from './src/components/Header';
import InputTexto from './src/components/InputTexto';
import BtnFiltro from './src/components/BtnFiltro';
import CarrouselDogs from './src/components/CarrouselDogs';
import Routes from './src/routes';

export default function App() {

  return (
  <Routes></Routes>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
