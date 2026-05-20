import { Stack } from 'expo-router';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Montserrat_400Regular': require('../assets/fonts/Montserrat_400Regular.ttf'),
        'Montserrat_600SemiBold': require('../assets/fonts/Montserrat_600SemiBold.ttf'),
        'Montserrat_700Bold': require('../assets/fonts/Montserrat_700Bold.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0d1f2d' }}>
        <ActivityIndicator color="#fff" />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}