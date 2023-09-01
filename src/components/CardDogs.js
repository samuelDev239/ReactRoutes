import { Text, TextInput, View } from "react-native";
import React, { Component } from "react";
import { DivInput, Input, ImagemFiltro, DivCard, ImagemCard, CaixaTitulo, TextoCard, TextoCardMin } from "../Styles";

export default function CardDogs({titulo,imagem,idade, localidade, tipoIdade}){
  return (
    
    <DivCard>
        <ImagemCard  source ={require (`../img/${imagem}` )}></ImagemCard>
        <CaixaTitulo>
        <TextoCard>{titulo}</TextoCard>
        <TextoCardMin>{localidade}</TextoCardMin>
        <TextoCardMin>{idade} {tipoIdade}</TextoCardMin>
        </CaixaTitulo>


    </DivCard>
  );
};


