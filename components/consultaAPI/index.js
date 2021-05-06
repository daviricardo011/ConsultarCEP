import axios from 'axios';
import React from "react";

const consultar = (cep) => {
    
    state = {
        cep: cep,
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

    return (
        buscarCep = () => {
            if ((this.state.cep).length == 8){
                this.setState({
                        dados: {
                            cep: '',
                            logradouro: '',
                            bairro: '',
                            localidade: '',
                            uf: '',
                            ibge: '',
                            ddd: ''
                        },
                    })
                    fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`).then(res => res.json()).then(data => {
                    this.setState({
                        dados: data
                    })
                    }).catch(err => {
                        console.log(err);
                    });
                
            } else {
                return (alert('Insira um CEP valido'));
            }
        }
    );

}


export default consultar();