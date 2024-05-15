// HomeScreen.js
import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button
      title="Go to Details"
      onPress={() => {
        navigation.navigate('Detail', {
          itemId: 86,
          otherParam: '',
        });
      }}
    />
  </View>
);

export default HomeScreen;
