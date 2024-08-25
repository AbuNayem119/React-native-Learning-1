import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCard from './Components/FlatCard';
import ScrollCard from './Components/ScrollCard';
import FancyCard from './Components/FancyCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.main}>
          <FlatCard />
          <ScrollCard />
          <FancyCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    width: 350,
    margin: "auto"
    // paddingLeft: 8,
  },
});
