import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Colors } from '@/constants/Colors';

const ProfileScreen = () => {
  const { profile } = useSelector((state: RootState) => state.user);

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.profileAvatar}>
          <Text style={styles.avatarIcon}>👤</Text>
        </View>
        <Text style={styles.profileName}>{profile.name}</Text>
        <Text style={styles.profileSubtitle}>{profile.subtitle}</Text>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Goals & Targets</Text>
          <Text style={styles.menuArrow}>&gt;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Notifications</Text>
          <Text style={styles.menuArrow}>&gt;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Data & Privacy</Text>
          <Text style={styles.menuArrow}>&gt;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Help & Support</Text>
          <Text style={styles.menuArrow}>&gt;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>About</Text>
          <Text style={styles.menuArrow}>&gt;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    // The mockup shows a gradient, but StyleSheet doesn't directly support linear-gradient for background.
    // For a pixel-perfect match, a library like 'react-native-linear-gradient' would be needed.
    // For now, using a solid color that matches the lighter end of the gradient.
  },
  avatarIcon: {
    fontSize: 24,
    color: '#666',
  },
  profileName: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.textDark,
    marginBottom: 5,
  },
  profileSubtitle: {
    fontSize: 14,
    color: Colors.textLight,
  },
  menuContainer: {
    width: '100%',
  },
  menuItem: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 16,
    padding: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },
  menuText: {
    fontSize: 16,
    color: Colors.textDark,
  },
  menuArrow: {
    fontSize: 14,
    color: '#ccc',
  },
});

export default ProfileScreen;