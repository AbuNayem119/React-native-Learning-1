import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ScrollCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>ScrollCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card]}>
          <Text>One</Text>
        </View>
        <View style={[styles.card]}>
          <Text>Two</Text>
        </View>
        <View style={[styles.card]}>
          <Text>Three</Text>
        </View>
        <View style={[styles.card]}>
          <Text>Four</Text>
        </View>
        <View style={[styles.card]}>
          <Text>Five</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ScrollCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  container: {

  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: "#888",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },
});
