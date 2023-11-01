import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import Estrelas from "../../../componentes/Estrelas";

export default function Produtor({nome, imagem, distancia, estrela}) {
  const [selecionado, setSelecionado] = useState(false);
  
  return <TouchableOpacity 
    style={estilos.cartao}
    onPress={() => setSelecionado(!selecionado)}
  >
    <Image source={imagem} accessibilityLabel="nome" style={estilos.imagem}/>
      <View style={estilos.info}>
        <View>
          <Text style={estilos.nome}>{ nome }</Text>
          <Estrelas 
              quantidade={estrela} 
              editavel={selecionado}
              grande={selecionado}
          />
        </View>
      <Text style={estilos.distancia}>{ distancia }</Text>
    </View>
   
   </TouchableOpacity> 

}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#f6f6f6',
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: "center",
    borderRadius: 6,
    //Android
    elevation: 4,
    //iOs
    shadowColor: "black",
    textShadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16
  },
  nome: {
      fontSize: 17,
      lineHeight: 29,
      fontWeight: "bold"
  },
  distancia: {
    fontSize: 14,
    lineHeight: 22
  }
})