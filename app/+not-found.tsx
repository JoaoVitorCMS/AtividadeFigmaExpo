import { router } from "expo-router";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function NotFoundScreen() {
  
  const onPress = () => {
    router.replace("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Error 404!!</Text>

      <Image source={require("@/assets/images/vegetaPuto.jpg")} style={styles.image} />

      <Text style={styles.subtext}>O erro é mais de 404 mil</Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D6C6C6",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  image: {
    width: 250,
    height: 150,
    resizeMode: "cover",
    marginBottom: 20,
  },
  subtext: {
    fontStyle: "italic",
    fontSize: 16,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#FF9900", // Laranja
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000",
  },
});

   
export const options = {
  title: '',
  headerStyle: {
    backgroundColor: '#D6C6C6',
  },
  headerShadowVisible: false, 
};


