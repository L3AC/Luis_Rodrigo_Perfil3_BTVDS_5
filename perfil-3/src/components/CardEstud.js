import React from 'react';
import { Card, Title, Paragraph, StyleSheet } from 'react-native-paper';
import { Image } from 'react-native';

const CardEstud = ({ name, id, image }) => (
  <Card style={styles.card}>
    <Card.Content>
      <Title>{name}</Title>
      <Paragraph>Carné: {id}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: image }} />
  </Card>
);

const styles = StyleSheet.create({
  card: {
    marginBottom: 16, // Espacio entre tarjetas
  },
});

export default CardEstud;
