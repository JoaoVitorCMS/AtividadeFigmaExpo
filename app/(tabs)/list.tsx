import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { characters } from '@/constants/data';

export default function ListScreen() {
  return (
    <View style={styles.container}>
  
      <FlatList
        data={characters}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.race}>{item.race}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6ec1ff',
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 15,
    color: '#000',
  },
  item: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 7,
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  race: {
    fontStyle: 'italic',
    fontSize: 14,
    color: '#333',
  },
});