import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://img.lovepik.com/photo/48013/0627.jpg_wh860.jpg',
          }}
        />
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  cardImage: {
    height: 180,
    borderRadius: 12,
  },
});
