import React from "react";

import { Dimensions, Image, StyleSheet } from "react-native";
import Texto from "../../../componentes/Texto";
const width = Dimensions.get('screen').width;

export default function Topo({ titulo, imagemTopo }) {
    return <>
        <Image style={estilos.topo} source={imagemTopo} />
        <Texto style={estilos.titulo} >{titulo}</Texto>
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        position: "absolute", //as coisas ficam uma por cima da outra, relativa fica uma embaixo da outra
        width: "100%",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,


    },
    topo: {
        width: "100%",
        height: 578 / 768 * width
    },
})