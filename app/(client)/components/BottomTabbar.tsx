// components/BottomTabBar.tsx

import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

type TabName = 'Home' | 'Jobs' | 'Messages' | 'Profile';

interface TabItem {
  name: TabName;
  icon: keyof typeof Ionicons.glyphMap;
  iconActive: keyof typeof Ionicons.glyphMap;
}

const tabs: TabItem[] = [
  { name: 'Home',     icon: 'home-outline',         iconActive: 'home' },
  { name: 'Jobs',     icon: 'briefcase-outline',     iconActive: 'briefcase' },
  { name: 'Messages', icon: 'chatbubble-outline',    iconActive: 'chatbubble' },
  { name: 'Profile',  icon: 'person-outline',        iconActive: 'person' },
];

interface BottomTabBarProps {
  activeTab: TabName;
  onTabPress: (tab: TabName) => void;
  onFabPress?: () => void;
}

export default function BottomTabBar({
  activeTab,
  onTabPress,
  onFabPress,
}: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>

        {/* Left side: Home + Jobs */}
        {tabs.slice(0, 2).map((tab) => {
          const isActive = activeTab === tab.name;
          return (
            <TouchableOpacity
              key={tab.name}
              style={styles.tabItem}
              onPress={() => onTabPress(tab.name)}
              activeOpacity={0.7}
            >
              <Ionicons
                name={isActive ? tab.iconActive : tab.icon}
                size={22}
                color={isActive ? '#164D6F' : '#999'}
              />
              <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
                {tab.name}
              </Text>
            </TouchableOpacity>
          );
        })}

        {/* Center FAB */}
        <View style={styles.fabWrapper}>
          <TouchableOpacity
            style={styles.fabButton}
            onPress={onFabPress}
            activeOpacity={0.85}
          >
            <Ionicons name="add" size={30} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Right side: Messages + Profile */}
        {tabs.slice(2).map((tab) => {
          const isActive = activeTab === tab.name;
          return (
            <TouchableOpacity
              key={tab.name}
              style={styles.tabItem}
              onPress={() => onTabPress(tab.name)}
              activeOpacity={0.7}
            >
              <Ionicons
                name={isActive ? tab.iconActive : tab.icon}
                size={22}
                color={isActive ? '#164D6F' : '#999'}
              />
              <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
                {tab.name}
              </Text>
            </TouchableOpacity>
          );
        })}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ececec',
    paddingBottom: 20, // safe area breathing room
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingHorizontal: 8,
    overflow: 'visible',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    gap: 3,
    paddingVertical: 4,
  },
  tabLabel: {
    fontSize: 10,
    fontFamily: 'Montserrat_400Regular',
    color: '#999',
  },
  tabLabelActive: {
    fontFamily: 'Montserrat_600SemiBold',
    color: '#164D6F',
  },

  // FAB
  fabWrapper: {
    flex: 1,
    alignItems: 'center',
    overflow: 'visible',
  },
  fabButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#164D6F',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -28, // lifts above the bar
    borderWidth: 4,
    borderColor: '#B7C8D2',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
});