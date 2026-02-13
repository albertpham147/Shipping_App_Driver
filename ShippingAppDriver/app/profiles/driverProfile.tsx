import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import UserImage from '@/assets/icons/user.png'

const DriverProfileScreen = () => {
  // Driver data
  const driver = {
    name: 'Nguyễn Văn A',
    role: 'Tài xế chuyên nghiệp',
    licensePlate: '29A1 - 123.45',
    rating: 4.9,
    totalKm: 1250,
    totalTrips: 450,
    photo: UserImage,
    isOnline: true,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          {/* Avatar */}
          <View style={styles.avatarContainer}>
            <Image 
              source={ driver.photo }
              style={styles.avatar}
            />
            <View style={[
              styles.onlineIndicator,
              driver.isOnline && styles.onlineIndicatorActive
            ]} />
          </View>

          {/* Name and Role */}
          <Text style={styles.driverName}>{driver.name}</Text>
          <Text style={styles.driverRole}>{driver.role}</Text>

          {/* License Plate */}
          <View style={styles.licensePlateContainer}>
            <Text style={styles.licensePlateLabel}>BIỂN SỐ XE</Text>
            <View style={styles.licensePlate}>
              <Text style={styles.licensePlateText}>{driver.licensePlate}</Text>
            </View>
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <AntDesign name="star" size={24} color="#FFD700" style={styles.statIcon}/>
            <Text style={styles.statValue}>{driver.rating}</Text>
            <Text style={styles.statLabel}>RATING</Text>
          </View>

          <View style={styles.statDivider} />

          <View style={styles.statItem}>
            <FontAwesome name="road" size={24} color="black" style={styles.statIcon}/>
            <Text style={styles.statValue}>{driver.totalKm.toLocaleString('vi-VN')}</Text>
            <Text style={styles.statLabel}>SỐ KM</Text>
          </View>

          <View style={styles.statDivider} />

          <View style={styles.statItem}>
            <MaterialCommunityIcons name="truck-delivery-outline" size={24} color="black" style={styles.statIcon}/>
            <Text style={styles.statValue}>{driver.totalTrips}</Text>
            <Text style={styles.statLabel}>SỐ CHUYẾN</Text>
          </View>
        </View>

        {/* Menu Options */}
        <View style={styles.menuContainer}>
          {/* Personal Info */}
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <AntDesign name="info" size={24} color="black" style={styles.menuIcon}/>
            </View>
            <Text style={styles.menuTitle}>Thông tin cá nhân</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Entypo name="log-out" size={24} color="#DC2626" style={styles.logoutIcon}/>
          <Text style={styles.logoutText}>Đăng xuất</Text>
        </TouchableOpacity>

        {/* Add spacing for bottom navigation */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  
  // Profile Header
  profileHeader: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 32,
    backgroundColor: '#FFFFFF',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E5E7EB',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#9CA3AF',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  onlineIndicatorActive: {
    backgroundColor: '#10B981',
  },
  driverName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  driverRole: {
    fontSize: 15,
    color: '#6B7280',
    marginBottom: 24,
  },
  licensePlateContainer: {
    alignItems: 'center',
  },
  licensePlateLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#9CA3AF',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  licensePlate: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  licensePlateText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    letterSpacing: 2,
  },
  
  // Stats Section
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginTop: 16,
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statIcon: {
    marginBottom: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#9CA3AF',
    letterSpacing: 0.5,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 8,
  },
  
  // Menu Container
  menuContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  menuIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FFF7ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuIcon: {
    fontSize: 24,
  },
  menuTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  menuChevron: {
    fontSize: 28,
    color: '#D1D5DB',
    fontWeight: '300',
  },
  
  // Highlight Menu Item
  menuItemHighlight: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#FF6B35',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  menuIconContainerHighlight: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FFF7ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuIconHighlight: {
    fontSize: 24,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitleHighlight: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FF6B35',
    marginBottom: 4,
  },
  menuSubtitle: {
    fontSize: 13,
    color: '#6B7280',
  },
  menuIconSwitch: {
    fontSize: 24,
    color: '#FF6B35',
  },
  
  // Logout Button
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 24,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#FEE2E2',
    borderRadius: 12,
    backgroundColor: '#FEF2F2',
  },
  logoutIcon: {
    marginRight: 8,
  },
  logoutText: {
    fontSize: 16,
    color: '#DC2626',
    fontWeight: '600',
  },
  
  // Bottom Navigation
  bottomNav: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navItemActive: {
    // Active state
  },
  navIcon: {
    fontSize: 24,
    marginBottom: 4,
    opacity: 0.5,
  },
  navIconActive: {
    fontSize: 24,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  navLabelActive: {
    fontSize: 12,
    color: '#FF6B35',
    fontWeight: '600',
  },
});

export default DriverProfileScreen;