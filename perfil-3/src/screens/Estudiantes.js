import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CardEstud from '../components/CardEstud'; // Asegúrate de importar correctamente el componente de tarjeta

const Estudiantes = () => {
  // Datos de ejemplo de los estudiantes
  const students = [
    { name: 'Juan Perez', id: '20210001', image: 'https://example.com/image1.jpg' },
    { name: 'Maria Lopez', id: '20210002', image: 'https://example.com/image2.jpg' },
    // Agrega más estudiantes según sea necesario
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {students.map((student, index) => (
        <CardEstud key={index} name={student.name} id={student.id} image={student.image} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default Estudiantes;

