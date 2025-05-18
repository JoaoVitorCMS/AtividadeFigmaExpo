import { router } from "expo-router";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function HomeScreen() {
  const onPress = () => {
    router.push("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("@/assets/images/logo.png")} style={styles.image} />

      <Text style={styles.title}><Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Dragon ball API</Text></Text>

      <Text style={styles.descricao}>
        Dragon Ball Z é um anime de ação criado
        por Akira Toriyama,
        que acompanha Goku em batalhas
        para proteger a Terra de
        inimigos poderosos.
        A série é famosa por lutas épicas,
        transformações
        como o Super Saiyajin
        e temas de coragem e amizade.
      </Text>

      <TouchableOpacity style={styles.botao} onPress={onPress}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6DC5F3', 
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    image: {
      width: 120,
      height: 120,
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontStyle: 'italic',
      fontWeight: 'bold',
      marginBottom: 20,
    },
    descricao: {
      textAlign: 'center',
      fontSize: 14,
      color: '#000',
      marginBottom: 30,
      lineHeight: 20,
    },
    botao: {
      backgroundColor: '#fff',
      paddingVertical: 15,
      paddingHorizontal: 50,
      borderRadius: 30,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,
    },
    buttonText: {
      fontSize: 18,
      color: '#000',
      fontWeight: 'bold',
    },
    footer: {
      fontSize: 12,
      color: '#fff',
      fontStyle: 'italic',
    },
  });