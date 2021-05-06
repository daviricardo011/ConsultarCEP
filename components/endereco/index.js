import axios from "axios";
import React, {Component} from "react";
import {Text, View, FlatList} from "react-native";
import estilos from "./estilos";
import consulta from "../consultaAPI";



class Endereco extends Component {

    render(){
        return (
            <View style={estilos.container}>
                <Text style={estilos.titulo}>CEP: {consulta.cep}</Text>
                <Text style={estilos.titulo}>RUA: {consulta.logradouro}</Text>
                <Text style={estilos.titulo}>BAIRRO: {consulta.bairro}</Text>
                <Text style={estilos.titulo}>CIDADE: {consulta.localidade}</Text>
                <Text style={estilos.titulo}>UF: {consulta.uf}</Text>
                <Text style={estilos.titulo}>IBGE: {consulta.dados.ibge}</Text>
                <Text style={estilos.titulo}>DDD: {consulta.ddd}</Text>
            </View>
        );
    }
};

export default Endereco;