import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors, Spacing, BorderRadius, ButtonHeights } from '../../constants/theme';

export default function DriverRegisterStep4Screen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerSide} />
        <Text style={styles.headerTitle}>Đăng ký Tài xế</Text>
        <View style={styles.headerSide} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.progressWrap}>
          <View style={styles.progressLineActive} />
          <View style={styles.stepRow}>
            {['THÔNG TIN', 'GIẤY TỜ', 'XÁC MINH', 'HOÀN TẤT'].map((step) => (
              <View key={step} style={styles.stepItem}>
                <View style={styles.stepCircleActive}>
                <AntDesign name="check" size={14} color={Colors.white} />
                </View>
                <Text style={styles.stepTextActive}>{step}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.centerArea}>
          <View style={styles.successGlow} />
          <View style={styles.successOuter}>
            <View style={styles.successInner}>
              <MaterialIcons name="check-circle" size={76} color={Colors.white} />
            </View>
          </View>

          <Text style={styles.successTitle}>Gửi hồ sơ thành công!</Text>

          <Text style={styles.successText}>
            Hồ sơ của bạn đang được hệ thống xét duyệt. Kết quả sẽ có trong vòng{' '}
            <Text style={styles.highlight}>24 - 48 giờ</Text> làm việc. {'\n'}
            Chào mừng bạn gia nhập đội ngũ <Text style={styles.bold}>App Shipping!</Text>
          </Text>

          <View style={styles.noticeCard}>
            <View style={styles.noticeIconWrap}>
              <MaterialIcons name="notifications-active" size={24} color="#F2590D" />
            </View>
            <View style={styles.noticeContent}>
              <Text style={styles.noticeTitle}>THÔNG BÁO</Text>
              <Text style={styles.noticeText}>Chúng tôi sẽ thông báo cho bạn qua ứng dụng và SMS ngay khi có kết quả.</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.homeButton} onPress={() => router.replace('/driverHome')}>
          <MaterialIcons name="home" size={20} color="#FFFFFF" />
          <Text style={styles.homeButtonText}>Về trang chủ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F6F5',
  },
  header: {
    height: 60,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E6DFDB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerSide: {
    width: 40,
    height: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#181311',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 120,
    flexGrow: 1,
  },
  progressWrap: {
    marginTop: 20,
    marginBottom: 24,
  },
  progressLineActive: {
    position: 'absolute',
    top: 16,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: '#F2590D',
    borderRadius: 99,
  },
  stepRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stepItem: {
    alignItems: 'center',
    width: '24%',
  },
  stepCircleActive: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F2590D',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  stepTextActive: {
    fontSize: 10,
    fontWeight: '700',
    color: '#F2590D',
    textAlign: 'center',
  },
  centerArea: {
    alignItems: 'center',
    paddingTop: 20,
    gap: 22,
  },
  successGlow: {
    position: 'absolute',
    top: 30,
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: '#FCD8C4',
  },
  successOuter: {
    width: 165,
    height: 165,
    borderRadius: 82.5,
    backgroundColor: '#FFFFFF',
    borderWidth: 4,
    borderColor: '#F8C5A8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successInner: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: '#181311',
    textAlign: 'center',
  },
  successText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#8A6E60',
    textAlign: 'center',
  },
  highlight: {
    color: Colors.primary,
    fontWeight: '700',
  },
  bold: {
    color: '#181311',
    fontWeight: '700',
  },
  noticeCard: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E6DFDB',
    backgroundColor: '#FFFFFF',
    padding: 16,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  noticeIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FFE9DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noticeContent: {
    flex: 1,
  },
  noticeTitle: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.6,
    color: '#181311',
    marginBottom: 4,
  },
  noticeText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#8A6E60',
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 14,
    borderTopWidth: 1,
    borderTopColor: '#E6DFDB',
    backgroundColor: '#FFFFFF',
  },
  homeButton: {
    height: ButtonHeights.xl,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  homeButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.white,
  },
});
