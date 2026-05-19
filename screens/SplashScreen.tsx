import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TALENTLOOP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1f2d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 3,
  },
});