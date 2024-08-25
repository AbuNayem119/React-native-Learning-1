import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCard = () => {
  return (
      <View>
        <Text style={styles.headingText}>FlatCard</Text>
        <View style={styles.container}>
          <View style={[styles.card, styles.red]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.card, styles.purple]}>
            <Text>Purple</Text>
          </View>
          <View style={[styles.card, styles.cyan]}>
            <Text>Cyan</Text>
          </View>
        </View>
      </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  main: {
    width: 350,
    paddingLeft: 8,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  red: {
    backgroundColor: 'red',
  },
  purple: {
    backgroundColor: 'purple',
  },
  cyan: {
    backgroundColor: 'cyan',
  },
});
