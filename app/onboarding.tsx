import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Dimensions, Image,
} from 'react-native';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: 1,
    title: 'Turn Your Skills Into Income',
    subtitle: 'Find jobs, grow your reputation, and get paid for what you do best.',
    image: require('../assets/images/onboarding1.png'),
  },
  {
    id: 2,
    title: 'Find Trusted Skilled Workers',
    subtitle: 'Connect with verified plumbers, electricians, mechanics, and more in your area.',
    image: require('../assets/images/onboarding2.png'),
  },
  {
    id: 3,
    title: 'Post a Job & Get Multiple Bids',
    subtitle: 'Describe what you need and receive competitive offers from skilled professionals.',
    image: require('../assets/images/onboarding3.png'),
  },
  {
    id: 4,
    title: 'Choose the Best Offer',
    subtitle: 'Compare prices, ratings and reviews to pick the perfect worker for your job.',
    image: require('../assets/images/onboarding4.png'),
  },
];

export default function onboarding({ navigation }: any) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      navigation.replace('Home');
    }
  };

  const handleSkip = () => {
    navigation.replace('Home');
  };

  const slide = slides[current];
  const isLast = current === slides.length - 1;

  return (
    <View style={styles.container}>

      {/* Illustration */}
      <View style={styles.imageContainer}>
        <Image source={slide.image} style={styles.image} resizeMode="contain" />
      </View>

      {/* Text */}
      <Text style={styles.title}>{slide.title}</Text>
      <Text style={styles.subtitle}>{slide.subtitle}</Text>

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
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: width * 0.75,
    height: width * 0.75,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 24,
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  nextButton: {
    backgroundColor: '#1a3c5e',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  nextText: {
    color: '#fff',
    fontWeight: '600',
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
    fontWeight: '600',
    fontSize: 16,
  },
});