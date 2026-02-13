import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function DriverRegistrationStep4Screen() {
  // Steps for the registration process
  const steps = [
    { id: 1, label: 'THÔNG TIN', completed: true },
    { id: 2, label: 'GIẤY TỜ', completed: true },
    { id: 3, label: 'XÁC MINH', completed: true },
    { id: 4, label: 'HOÀN TẤT', completed: true },
  ];

  const handleGoHome = () => {
    console.log('Go to home');
    // Navigate to home/driver dashboard
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Đăng ký Tài xế</Text>
      </View>

      {/* Progress Steps */}
      <View style={styles.stepsContainer}>
        <View style={styles.stepsLine}>
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <View style={styles.stepWrapper}>
                <View style={styles.stepCircleCompleted}>
                  <AntDesign name="check" size={20} color="white" />
                </View>
                <Text style={styles.stepLabelActive}>
                  {step.label}
                </Text>
              </View>

              {index < steps.length - 1 && (
                <View style={styles.stepConnectorActive} />
              )}
            </React.Fragment>
          ))}
        </View>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Success Icon */}
        <View style={styles.successSection}>
          <View style={styles.successCircleOuter}>
            <View style={styles.successCircleMiddle}>
              <View style={styles.successCircleInner}>
                <AntDesign name="check" size={60} color="#FF6B35"></AntDesign>
              </View>
            </View>
          </View>
        </View>

        {/* Success Message */}
        <Text style={styles.successTitle}>Gửi hồ sơ thành công!</Text>

        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            Hồ sơ của bạn đang được hệ thống xét duyệt. Kết quả sẽ có trong vòng{' '}
            <Text style={styles.highlightText}>24 - 48 giờ</Text>
            {' '}làm việc.
          </Text>
        </View>

        <Text style={styles.welcomeText}>
          Chào mừng bạn gia nhập đội ngũ{' '}
          <Text style={styles.appName}>App Shipping</Text>!
        </Text>

        {/* Notification Card */}
        <View style={styles.notificationCard}>
          <View style={styles.notificationIconContainer}>
            <FontAwesome name="bell-o" size={30} color="black" />
          </View>

          <View style={styles.notificationContent}>
            <Text style={styles.notificationTitle}>THÔNG BÁO</Text>
            <Text style={styles.notificationText}>
              Chúng tôi sẽ thông báo cho bạn qua ứng dụng và SMS ngay khi có kết quả.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Go to Home Button */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={handleGoHome}
          >
          <FontAwesome6 name="house" size={24} color="white" style={styles.homeIcon}></FontAwesome6>
          <Text style={styles.homeButtonText}>Về trang chủ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },

  // Header
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },

  // Progress Steps
  stepsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#F9FAFB',
  },
  stepsLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepWrapper: {
    alignItems: 'center',
  },
  stepCircleCompleted: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF6B35',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepLabelActive: {
    fontSize: 11,
    fontWeight: '600',
    color: '#FF6B35',
  },
  stepConnectorActive: {
    flex: 1,
    height: 2,
    backgroundColor: '#FF6B35',
    marginHorizontal: 4,
    marginBottom: 32,
  },

  // Content
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 120,
    alignItems: 'center',
  },

  // Success Section
  successSection: {
    marginBottom: 32,
  },
  successCircleOuter: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#FFF7ED',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF6B35',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 8,
  },
  successCircleMiddle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#FF6B35',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successCircleInner: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Success Message
  successTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 24,
    textAlign: 'center',
  },
  messageContainer: {
    marginBottom: 24,
  },
  messageText: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  highlightText: {
    color: '#FF6B35',
    fontWeight: '700',
  },
  welcomeText: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  appName: {
    fontWeight: '700',
    color: '#1F2937',
  },

  // Notification Card
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  notificationIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#FFF7ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1F2937',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  notificationText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },

  // Home Button
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  homeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    backgroundColor: '#FF6B35',
    borderRadius: 12,
  },
  homeIcon: {
    marginRight: 8,
  },
  homeButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
