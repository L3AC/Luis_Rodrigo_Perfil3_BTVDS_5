import React from 'react';
import { View, Text } from 'react-native';

const DetailScreen = ({ route }) => {
  //const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla de prueba</Text>
    </View>
  );
  /*return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Item ID: {itemId}</Text>
      <Text>Other Param: {otherParam}</Text>
    </View>
  );*/
};

export default DetailScreen;
