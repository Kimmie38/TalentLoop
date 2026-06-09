// app/post-job.tsx

import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  TextInput, Dimensions,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTabBar from './components/BottomTabbar';

const { width } = Dimensions.get('window');

export default function PostJob() {
  const router = useRouter();
  const [category, setCategory] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="chevron-back" size={22} color="#111" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Post a Job</Text>
        </View>

        {/* Category */}
        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Category</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={[styles.dropdownText, !category && styles.placeholderText]}>
              {category || 'Select Category'}
            </Text>
            <Ionicons name="chevron-down" size={18} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Job Title */}
        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Job Title</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Fix leaking kitchen pipe"
            placeholderTextColor="#bbb"
            value={jobTitle}
            onChangeText={setJobTitle}
          />
        </View>

        {/* Description */}
        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Description</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Describe the job details in depth..."
            placeholderTextColor="#bbb"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={5}
            textAlignVertical="top"
          />
        </View>

        {/* Photos */}
        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Photos</Text>
          <View style={styles.photosRow}>
            {[0, 1, 2].map((i) => (
              <TouchableOpacity key={i} style={styles.photoBox}>
                <MaterialCommunityIcons name="camera-outline" size={26} color="#bbb" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Location */}
        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Location</Text>
          <View style={styles.locationInputWrapper}>
            <Ionicons name="location-outline" size={18} color="#bbb" style={styles.locationIcon} />
            <TextInput
              style={styles.locationInput}
              placeholder="Enter service location"
              placeholderTextColor="#bbb"
              value={location}
              onChangeText={setLocation}
            />
          </View>
        <TouchableOpacity style={styles.currentLocationBtn}>
        <Ionicons name="locate-outline" size={16} color="#1a3c5e" />
        <Text style={styles.currentLocationText}>Use current location</Text>
        </TouchableOpacity>
        </View>

        {/* Post Job Button */}
        <TouchableOpacity style={styles.postBtn}>
          <Text style={styles.postBtnText}>Post Job</Text>
        </TouchableOpacity>

      </ScrollView>

    <BottomTabBar
    activeTab={null}
    onTabPress={(tab) => {
        if (tab === 'Home') router.push('/home');
    }}
    onFabPress={() => {}}
    />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f7f5',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 24,
    gap: 8,
  },
  backBtn: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    color: '#111',
  },

  // Field groups
  fieldGroup: {
    marginBottom: 20,
  },
  fieldLabel: {
    fontSize: 13,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    color: '#64748B',
    marginBottom: 8,
  },

  // Dropdown
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  dropdownText: {
    fontSize: 13,
    fontFamily: 'Montserrat_500Medium',
    color: '#111',
  },
  placeholderText: {
    color: '#bbb',
  },

  // Text inputs
  input: {
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 13,
    fontFamily: 'Montserrat_400Regular',
    color: '#111',
  },
  textArea: {
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 14,
    fontSize: 13,
    fontFamily: 'Montserrat_400Regular',
    color: '#111',
    minHeight: 120,
  },

  // Photos
  photosRow: {
    flexDirection: 'row',
    gap: 12,
  },
  photoBox: {
    width: (width - 32 - 24) / 3,
    height: (width - 32 - 24) / 3,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#d0d0d0',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
  },

  // Location
  locationInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  locationIcon: {
    marginRight: 6,
  },
  locationInput: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 13,
    fontFamily: 'Montserrat_400Regular',
    color: '#111',
  },
currentLocationBtn: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 6,
  paddingVertical: 13,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: '#e8e8e8',
  backgroundColor: '#F1F5F9',
  marginTop: 10,
},
currentLocationText: {
  fontSize: 13,
  fontFamily: 'Montserrat',
  fontWeight: '700',
  color: '#1a3c5e',
},

  // Post Job button
  postBtn: {
    backgroundColor: '#1a3c5e',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  postBtnText: {
    fontSize: 15,
    fontFamily: 'Montserrat_700Bold',
    color: '#fff',
  },
});