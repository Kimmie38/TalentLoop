// app/index.tsx
import { Redirect } from 'expo-router';
import { useEffect, useState } from 'react';
import SplashScreen from '../screens/SplashScreen';

export default function Index() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) return <SplashScreen />;

  return <Redirect href="/onboarding" />;
}