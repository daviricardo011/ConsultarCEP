import React, {Component} from "react"; //pra que serve??
import {Text, TextInput, View, Button} from "react-native";
import estilo from './estilos';
import Endereco from '../endereco';

const ConsultarCEP = () => {
    return (
        <View>
          <Text style={estilo.titulo}>BUSCADOR DE ENDEREÇO</Text>
          <TextInput
            style={estilo.input}
            keyboardType="numeric"
            placeholder="Digite o CEP"
          />
          <View style={estilo.containerBotao}>  
            <Button
              title="Consultar"
            />
          </View>
      </View>
    );
};

export default ConsultarCEP;