import React, {Component} from "react";
import {SafeAreaView,Text, TextInput, View, Button} from "react-native";
import ConsultaCEP from "./components/formConsultaCEP"; //Lembrar que nessa importação, ele ja vem como um componente chamado ConsultaCEP
import axios from "axios";
import estilo from './components/formConsultaCEP/estilos';
import estilosR from './components/endereco/estilos';


class App extends Component {

  state = {
    cep: '',
    dados: {
        cep: '',
        logradouro: '',
        bairro: '',
        localidade: '',
        uf: '',
        ibge: '',
        ddd: ''
    },
};

  buscarEndereco = () => {
    if ((this.state.cep).length == 8){
          axios.get(`https://viacep.com.br/ws/${this.state.cep}/json/`)
            .then(res => {
              const dados = res.data;
              this.setState({ dados });
            })
        } else {
      alert('Insira um CEP valido');
      }
}


  render(){
    return (
      <SafeAreaView>
        <Text style={estilo.titulo}>BUSCADOR DE ENDEREÇO</Text>
            <TextInput
              value={this.state.cep}
              onChangeText={cep => {this.setState({cep})}}
              style={estilo.input}
              keyboardType="numeric"
              placeholder="Digite o CEP"
            />
            <View style={estilo.containerBotao}>  
              <Button
                onPress={this.buscarEndereco}
                title="Consultar"
              />
            </View>
            <Text  style={estilosR.titulo}>{this.state.erro}</Text>
            <View style={estilosR.container}>
                <Text style={estilosR.titulo}>CEP: {this.state.dados.cep}</Text>
                <Text style={estilosR.titulo}>RUA: {this.state.dados.logradouro}</Text>
                <Text style={estilosR.titulo}>BAIRRO: {this.state.dados.bairro}</Text>
                <Text style={estilosR.titulo}>CIDADE: {this.state.dados.localidade}</Text>
                <Text style={estilosR.titulo}>UF: {this.state.dados.uf}</Text>
                <Text style={estilosR.titulo}>IBGE: {this.state.dados.ibge}</Text>
                <Text style={estilosR.titulo}>DDD: {this.state.dados.ddd}</Text>
            </View>
      </SafeAreaView>
    );
};
}

export default App;