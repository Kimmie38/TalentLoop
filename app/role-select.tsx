import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

type Role = 'client' | 'provider' | null;

export default function RoleSelect() {
  const [selected, setSelected] = useState<Role>(null);
  const router = useRouter();

  const handleNext = () => {
    if (!selected) return;
    // navigate based on role later
    router.push('/auth' as any);
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>How will you use Skillconnect?</Text>
        <Text style={styles.subtitle}>
          Select how you intend to use the platform to personalize your experience.
        </Text>
      </View>

      {/* Cards */}
      <View style={styles.cards}>

        <TouchableOpacity
          style={[styles.card, selected === 'client' && styles.cardSelected]}
          onPress={() => setSelected('client')}
          activeOpacity={0.8}
        >
          <Ionicons
            name="person-outline"
            size={22}
            color={selected === 'client' ? '#fff' : '#1a3c5e'}
            style={styles.icon}
          />
          <View>
            <Text style={[styles.cardTitle, selected === 'client' && styles.cardTitleSelected]}>
              Client
            </Text>
            <Text style={[styles.cardSubtitle, selected === 'client' && styles.cardSubtitleSelected]}>
              I need to hire a skilled worker
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, selected === 'provider' && styles.cardSelected]}
          onPress={() => setSelected('provider')}
          activeOpacity={0.8}
        >
          <Ionicons
            name="construct-outline"
            size={22}
            color={selected === 'provider' ? '#fff' : '#1a3c5e'}
            style={styles.icon}
          />
          <View>
            <Text style={[styles.cardTitle, selected === 'provider' && styles.cardTitleSelected]}>
              Service Provider
            </Text>
            <Text style={[styles.cardSubtitle, selected === 'provider' && styles.cardSubtitleSelected]}>
              I want to find jobs and earn
            </Text>
          </View>
        </TouchableOpacity>

      </View>

      {/* Next Button — only shows when selection made */}
      {selected && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 40,
    justifyContent:'center',
  },
  header: {
    marginBottom: 40,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Montserrat_700Bold',
    color: '#111',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular',
    color: '#666',
    lineHeight: 22,
    textAlign: 'center',
  },
  cards: {
    gap: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 18,
    backgroundColor: '#fff',
  },
  cardSelected: {
    backgroundColor: '#1a3c5e',
    borderColor: '#1a3c5e',
  },
  icon: {
    marginRight: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#111',
    marginBottom: 4,
  },
  cardTitleSelected: {
    color: '#fff',
  },
  cardSubtitle: {
    fontSize: 13,
    fontFamily: 'Montserrat_400Regular',
    color: '#888',
  },
  cardSubtitleSelected: {
    color: '#cdd8e3',
  },
  nextButton: {
    position: 'absolute',
    bottom: 40,
    left: 24,
    right: 24,
    backgroundColor: '#1a3c5e',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  nextText: {
    color: '#fff',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
});