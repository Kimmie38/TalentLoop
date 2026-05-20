import React, { useState, useRef } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  Dimensions, Image, FlatList, NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Turn Your Skills Into Income',
    subtitle: 'Find jobs, grow your reputation, and get paid for what you do best.',
    image: require('../assets/images/onboarding1.png'),
  },
  {
    id: '2',
    title: 'Find Trusted Skilled Workers',
    subtitle: 'Connect with verified plumbers, electricians, mechanics, and more in your area.',
    image: require('../assets/images/onboarding2.png'),
  },
  {
    id: '3',
    title: 'Post a Job & Get Multiple Bids',
    subtitle: 'Describe what you need and receive competitive offers from skilled professionals.',
    image: require('../assets/images/onboarding3.png'),
  },
  {
    id: '4',
    title: 'Choose the Best Offer',
    subtitle: 'Compare prices, ratings and reviews to pick the perfect worker for your job.',
    image: require('../assets/images/onboarding4.png'),
  },
];

export default function Onboarding() {
  const [current, setCurrent] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const router = useRouter();

  const handleNext = () => {
    if (current < slides.length - 1) {
      const nextIndex = current + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrent(nextIndex);
    } else {
      router.replace('/role-select' as any);
    }
  };

  const handleSkip = () => {
    router.replace('/role-select' as any);
  };

  // Sync dot indicator when user swipes manually
  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setCurrent(index);
  };

  const isLast = current === slides.length - 1;

  return (
    <View style={styles.container}>

      {/* Swipeable slides */}
      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        style={{ flex: 1 }}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} resizeMode="contain" />
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        )}
      />

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {slides.map((_, i) => (
          <View key={i} style={[styles.dot, i === current && styles.activeDot]} />
        ))}
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        {!isLast ? (
          <>
            <TouchableOpacity onPress={handleSkip}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity style={styles.getStartedButton} onPress={handleNext}>
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>
        )}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 40,
  },
// Replace your current slide, imageContainer, and add textContainer styles:

slide: {
  width,
  flex: 1,
  alignItems: 'center',
  paddingHorizontal: 24,
  justifyContent: 'center',  // centers everything vertically
},
imageContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 40,
},
image: {
  width: width * 0.75,
  height: width * 0.75,
},
title: {
  fontSize: 22,
  fontFamily: 'Montserrat_700Bold',
  color: '#111',
  textAlign: 'center',
  marginBottom: 12,
},
subtitle: {
  fontSize: 14,
  fontFamily: 'Montserrat_400Regular',
  color: '#666',
  textAlign: 'center',
  lineHeight: 22,
  paddingHorizontal: 10,
},
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 32,
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
  },
  activeDot: {
    width: 24,
    backgroundColor: '#1a3c5e',
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipText: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#333',
  },
  nextButton: {
    backgroundColor: '#1a3c5e',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  nextText: {
    color: '#fff',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  getStartedButton: {
    backgroundColor: '#1a3c5e',
    paddingVertical: 16,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  getStartedText: {
    color: '#fff',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
});