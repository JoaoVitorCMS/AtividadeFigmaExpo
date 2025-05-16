import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';

interface Character {
  id: number;
  name: string;
  race: string;
  gender: string;
  ki: string;
  maxKi: string;
  affiliation: string;
  image: string;
}

export default function DragonBallScreen() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async () => {
    try {
      const response = await fetch('https://dragonball-api.com/api/characters');
      const data = await response.json();
      setCharacters(data.items || []); 
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar personagens:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const renderItem = ({ item }: { item: Character }) => (
    <View style={styles.card}>
      <Image 
        source={{ uri: item.image }} 
        style={styles.characterImage}
        resizeMode="contain"
      />
      <View style={styles.infoBox}>
        <Text style={[styles.info, styles.bold]}>{item.name}</Text>
        <Text style={styles.info}><Text style={styles.bold}>Raça:</Text> {item.race}</Text>
        <Text style={styles.info}><Text style={styles.bold}>Gênero:</Text> {item.gender}</Text>
        <Text style={styles.info}><Text style={styles.bold}>Ki base:</Text> {item.ki}</Text>
        <Text style={styles.info}><Text style={styles.bold}>Ki total:</Text> {item.maxKi}</Text>
        <Text style={styles.info}><Text style={styles.bold}>Afiliação:</Text> {item.affiliation}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
     
      {loading ? (
        <ActivityIndicator size="large" color="#FFD700" />
      ) : (
        <FlatList
          data={characters}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          ListEmptyComponent={<Text style={styles.emptyText}>Nenhum personagem encontrado</Text>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6ec1ff',  
    paddingTop: 50,
    paddingHorizontal: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 15,
    textAlign: 'center',
    color: '#000',
  },
  list: {
    paddingBottom: 30,
  },
  card: {
    display:'flex',
    backgroundColor: '#30343f', 
    borderRadius: 15,
    marginVertical: 10,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'column',
  },
  characterImage: {
    width: 100,
    height: 150,
    marginRight: 15,
  },
  infoBox: {
    flex: 1,
    justifyContent: 'center',
  },
  info: {
    color: '#fff',  
    fontSize: 14,
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
    color: '#FFD700', 
  },
  emptyText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
});