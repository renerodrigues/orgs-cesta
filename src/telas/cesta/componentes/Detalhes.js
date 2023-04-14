import React from "react";
import { Image, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import Texto from "../../../componentes/Texto";


export default function Detalhes({ nome, logoFazenda, descricao, nomeFazenda, preco, botao }) {
    return <>
        <Texto style={estilos.nomeCesta} >{nome}</Texto>
        <View style={estilos.fazeda}>
            <Image style={estilos.imagemFazenda} source={logoFazenda} />
            <Texto style={estilos.nomeFazenda} >{nomeFazenda}</Texto>
        </View>
        <Texto style={estilos.descricao} >{descricao}</Texto>
        <Texto style={estilos.preco} >{preco}</Texto>
        <TouchableOpacity style={estilos.botao} onPress={()=>{
            createTwoButtonAlert()
        }} >
            <Texto style={estilos.textoBotao} >{botao}</Texto>
        </TouchableOpacity>
    </>
}

 
    const createTwoButtonAlert = () =>
      Alert.alert('comprar', 'Tem certeza que deseja comprar isso?', [
        {
          text: 'Não',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Sim', onPress: () => console.log('OK Pressed')},
      ]);
  
const estilos = StyleSheet.create({


    nomeCesta: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",

    }, nomeFazenda: {
        fontSize: 16,
        // lineHeight: 40,
        marginLeft: 12,

    }, descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    }, preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }, imagemFazenda: {
        width: 50,
        height: 50,
        borderRadius: 10
    }, fazeda: {
        flexDirection: "row",
        paddingVertical: 12,
        alignItems: "center",
    }, botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6

    }, textoBotao: {
        textAlign: "center",
        color: "#FFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})