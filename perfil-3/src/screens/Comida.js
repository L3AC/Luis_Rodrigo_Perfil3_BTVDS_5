import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data/data';
import Boton from '../components/Boton';

const Comida = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Comida Favorita</Text>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <Image source={item.src} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>
          )}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: StatusBar.currentHeight || 20,
    },
    flatListContainer: {
      paddingBottom: 20,
      paddingHorizontal: 10,
    },
    cardContainer: {
      backgroundColor: '#fff',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 10,
      marginHorizontal: 5,
      alignItems: 'center',
      flex: 1,
      margin: 5,
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      borderRadius: 8,
      marginBottom: 10,
    },
    title: {
      marginBottom: 10,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center', 
    },
    desc: {
        marginBottom:5,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center', 
      },
  });
  
  export default Comida;

