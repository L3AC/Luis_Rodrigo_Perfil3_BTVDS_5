import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import CardEstud from '../components/CardEstud'; // Asegúrate de importar correctamente el componente de tarjeta

const Estudiantes = () => {
    const students = [
        { name: 'Luis Eduardo Alvarenga Claros', id: '20220298', image: require('../img/q.jpg') },
        { name: 'Rodrigo Alejandro Alvarado Rodríguez', id: '20220495', image: require('../img/alva.png') },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Lista de Estudiantes</Text>
            {students.map((student, index) => (
                <CardEstud key={index} name={student.name} id={student.id} image={student.image} />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 16,
        textAlign: 'center', 
        marginVertical: 16, 
      },
    container: {
        padding: 16,
    },
});

export default Estudiantes;

