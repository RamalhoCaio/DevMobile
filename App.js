import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import CardFilme from './src/components/Card';

export default function App() {


  let [filmes,  setFilmes] = useState([]);

        
  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';

  useEffect(function(){
    fetch(baseURL)
      .then(data => data.json())
      .then(objeto => {
        console.log(objeto);
        setFilmes(objeto.data);
      })    
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.pag}>Filmes Disponíveis</Text>
      {filmes.length > 0 ? filmes.map(filme => <CardFilme filme={filme.attributes}/>) : 
      <Text>Carregando...</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',

  },

  card: {
    backgroundColor: '#615a59',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pag: {
    color: 'white',
    fontSize : 25,
  }
});
