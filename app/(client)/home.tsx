import React from 'react';
import {
  View, Text, StyleSheet, Image, ScrollView,
  TouchableOpacity, Dimensions, ImageBackground,
} from 'react-native';
import { useState } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import BottomTabBar from './components/BottomTabbar';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const services = [
  { id: '1', label: 'Plumbing',   icon: 'pipe' },
  { id: '2', label: 'Painting',   icon: 'format-paint' },
  { id: '3', label: 'Carpentry',  icon: 'hammer' },
  { id: '4', label: 'AC Repair',  icon: 'air-conditioner' },
  { id: '5', label: 'Electrical', icon: 'lightning-bolt' },
  { id: '6', label: 'Tailoring',  icon: 'content-cut' },
];

const recentJobs = [
  { id: '1', title: 'Fix Kitchen Sink', category: 'Plumbing · Today', status: 'In Progress' },
  { id: '2', title: 'Fix Kitchen Sink', category: 'Plumbing · Today', status: 'Completed' },
];

export default function ClientHome() {
  const router = useRouter();
   const [activeTab, setActiveTab] = useState<'Home' | 'Jobs' | 'Messages' | 'Profile'>('Home');

  const handleTabPress = (tab: typeof activeTab) => {
    setActiveTab(tab);
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 90 }}
      >

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={require('../../assets/images/home-icon.png')}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.greeting}>Hi Dave</Text>
              <Text style={styles.greetingBold}>Good Morning</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name="search-outline" size={20} color="#111" />
          </TouchableOpacity>
        </View>

        {/* Banner */}
        <ImageBackground
          source={require('../../assets/images/home-image.png')}
          style={styles.banner}
          imageStyle={styles.bannerImage}
        >
          <View style={styles.bannerOverlay}>
            <View style={styles.bannerTextContainer}>
              <Text style={styles.bannerTitle}>Get your work done by{'\n'}the best</Text>
              <View style={styles.bannerPillRow}>
                <Text style={styles.bannerPillPrefix}>Find</Text>
                <View style={styles.bannerPill}>
                  <Text style={styles.bannerPillText}>220 Fill × 42 Hug</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.bannerBtn}>
              <Ionicons name="add" size={26} color="#333" />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* Services */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services</Text>
          <View style={styles.servicesGrid}>
            {services.map((service) => (
              <TouchableOpacity key={service.id} style={styles.serviceCard}>
                <View style={styles.serviceIconWrapper}>
                  <MaterialCommunityIcons name={service.icon as any} size={22} color="#1a3c5e" />
                </View>
                <Text style={styles.serviceLabel}>{service.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Jobs */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Jobs</Text>
          {recentJobs.map((job) => (
            <View key={job.id} style={styles.jobCard}>
              <View style={styles.jobInfo}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.jobCategory}>{job.category}</Text>
              </View>
              <View style={[
                styles.statusBadge,
                job.status === 'In Progress' ? styles.statusInProgress : styles.statusCompleted,
              ]}>
                <Text style={[
                  styles.statusText,
                  job.status === 'In Progress' ? styles.statusTextInProgress : styles.statusTextCompleted,
                ]}>
                  {job.status}
                </Text>
              </View>
            </View>
          ))}
        </View>

      </ScrollView>

        <BottomTabBar
        activeTab={activeTab}
        onTabPress={handleTabPress}
        onFabPress={() => console.log('FAB pressed')}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#ddd',
  },
  greeting: {
    fontSize: 12,
    fontFamily: 'Montserrat_400Regular',
    color: '#888',
  },
  greetingBold: {
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
    color: '#111',
  },
  searchBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },

  // Banner
  banner: {
    height: 150,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
  },
  bannerImage: {
    borderRadius: 16,
  },
  bannerOverlay: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  bannerTextContainer: {
    flex: 1,
    paddingRight: 10,
  },
  bannerTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
    color: '#fff',
    marginBottom: 8,
    lineHeight: 22,
  },
  bannerPillRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  bannerPillPrefix: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Montserrat_400Regular',
  },
  bannerPill: {
    backgroundColor: '#f0c040',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  bannerPillText: {
    fontSize: 11,
    fontFamily: 'Montserrat_700Bold',
    color: '#333',
  },
  bannerBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Services
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 15,
    fontFamily: 'Montserrat_700Bold',
    color: '#111',
    marginBottom: 12,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  serviceCard: {
    width: (width - 32 - 20) / 3,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ececec',
    paddingVertical: 16,
    alignItems: 'center',
    gap: 8,
  },
  serviceIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#E8EDF1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceLabel: {
    fontSize: 11,
    fontFamily: 'Montserrat_500Medium',
    color: '#444',
    textAlign: 'center',
  },

  // Recent Jobs
  jobCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ececec',
    padding: 14,
    marginBottom: 10,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 13,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#111',
    marginBottom: 3,
  },
  jobCategory: {
    fontSize: 11,
    fontFamily: 'Montserrat_400Regular',
    color: '#aaa',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  statusInProgress: {
    backgroundColor: '#fff3e0',
  },
  statusCompleted: {
    backgroundColor: '#e8f5e9',
  },
  statusText: {
    fontSize: 10,
    fontFamily: 'Montserrat_600SemiBold',
  },
  statusTextInProgress: {
    color: '#e67e22',
  },
  statusTextCompleted: {
    color: '#27ae60',
  },
});