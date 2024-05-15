import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Image,StyleSheet,View} from 'react-native';

const CardEstud = ({ name, id, image }) => (
  <Card style={styles.card}>
    <Card.Content style={styles.content}>
      <View style={styles.info}>
        <Title>{name}</Title>
        <Paragraph>Carné: {id}</Paragraph>
      </View>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
  },
  content: {
    flexDirection: 'row',
  },
  info: {
    flex: 1,
  },
  imageContainer: {
    marginLeft: 16,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10, // Para que la imagen sea circular
  },
});

export default CardEstud;
