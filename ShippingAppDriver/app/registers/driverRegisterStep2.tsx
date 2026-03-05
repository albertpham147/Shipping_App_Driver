import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors, Spacing, BorderRadius, ButtonHeights } from '../../constants/theme';

type DocumentItem = {
  key: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  subtitle: string;
};

const DOCUMENTS: DocumentItem[] = [
  {
    key: 'cccd',
    icon: 'badge',
    title: 'Căn cước công dân (CCCD)',
    subtitle: 'Mặt trước và mặt sau',
  },
  {
    key: 'license',
    icon: 'credit-card',
    title: 'Bằng lái xe',
    subtitle: 'Hạng A1/A2 hoặc cao hơn',
  },
  {
    key: 'vehicle',
    icon: 'description',
    title: 'Đăng ký xe (Cà vẹt)',
    subtitle: 'Chụp rõ biển số và số khung',
  },
  {
    key: 'insurance',
    icon: 'verified-user',
    title: 'Bảo hiểm xe',
    subtitle: 'Bảo hiểm bắt buộc còn hạn',
  },
];

export default function DriverRegisterStep2Screen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={24} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Đăng ký Tài xế</Text>
        <View style={styles.backButton} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.progressWrap}>
          <View style={styles.progressLineBg} />
          <View style={styles.progressLineActive} />
          <View style={styles.stepRow}>
            <View style={styles.stepItem}>
              <View style={[styles.stepCircle, styles.stepCircleActive]}>
                <AntDesign name="check" size={14} color={Colors.white} />
              </View>
              <Text style={styles.stepTextActive}>THÔNG TIN</Text>
            </View>
            <View style={styles.stepItem}>
              <View style={[styles.stepCircle, styles.stepCircleActive]}>
                <Text style={styles.stepCircleTextActive}>2</Text>
              </View>
              <Text style={styles.stepTextActive}>GIẤY TỜ</Text>
            </View>
            <View style={styles.stepItem}>
              <View style={styles.stepCircle}>
                <Text style={styles.stepCircleText}>3</Text>
              </View>
              <Text style={styles.stepText}>XÁC MINH</Text>
            </View>
            <View style={styles.stepItem}>
              <View style={styles.stepCircle}>
                <Text style={styles.stepCircleText}>4</Text>
              </View>
              <Text style={styles.stepText}>HOÀN TẤT</Text>
            </View>
          </View>
        </View>

        <View style={styles.formSection}>
          <Text style={styles.formTitle}>Giấy tờ cá nhân</Text>
          <Text style={styles.formSubtitle}>Vui lòng tải lên ảnh chụp bản gốc các giấy tờ sau</Text>

          <View style={styles.documentList}>
            {DOCUMENTS.map((doc) => (
              <View key={doc.key} style={styles.documentCard}>
                <View style={styles.iconWrap}>
                  <MaterialIcons name={doc.icon} size={24} color="#F2590D" />
                </View>
                <View style={styles.documentInfo}>
                  <Text style={styles.documentTitle}>{doc.title}</Text>
                  <Text style={styles.documentSubtitle}>{doc.subtitle}</Text>
                </View>
                <TouchableOpacity style={styles.uploadButton}>
                  <Text style={styles.uploadButtonText}>Tải lên</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <View style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <MaterialIcons name="lightbulb" size={18} color="#F2590D" />
              <Text style={styles.tipTitle}>MẸO CHỤP ẢNH</Text>
            </View>
            <View style={styles.tipItem}>
              <MaterialIcons name="check-circle" size={18} color="#F2590D" />
              <Text style={styles.tipText}>Đảm bảo đủ ánh sáng, không bị lóa bởi đèn flash</Text>
            </View>
            <View style={styles.tipItem}>
              <MaterialIcons name="check-circle" size={18} color="#F2590D" />
              <Text style={styles.tipText}>Giấy tờ nằm gọn trong khung hình, không bị mất góc</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomHint}>
          <Text style={styles.bottomHintText}>
            Cần hỗ trợ? <Text style={styles.bottomHintLink}>Liên hệ Tổng đài</Text>
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton} onPress={() => router.push('/registers/driverRegisterStep3')}>
          <Text style={styles.nextButtonText}>Tiếp theo</Text>
          <MaterialIcons name="arrow-forward" size={20} color="#FFFFFF" />
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
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#181311',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  progressWrap: {
    marginTop: 20,
    marginBottom: 18,
  },
  progressLineBg: {
    position: 'absolute',
    top: 16,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: '#E6DFDB',
    borderRadius: 99,
  },
  progressLineActive: {
    position: 'absolute',
    top: 16,
    left: 0,
    width: '50%',
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
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E6DFDB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  stepCircleActive: {
    backgroundColor: Colors.primary,
  },
  stepCircleText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#8A6E60',
  },
  stepCircleTextActive: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.white,
  },
  stepText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#8A6E60',
  },
  stepTextActive: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.primary,
  },
  formSection: {
    gap: 14,
  },
  formTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#181311',
  },
  formSubtitle: {
    marginTop: -6,
    fontSize: 14,
    color: '#8A6E60',
    marginBottom: 8,
  },
  documentList: {
    gap: 10,
  },
  documentCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E6DFDB',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#F8F6F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  documentInfo: {
    flex: 1,
  },
  documentTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#181311',
  },
  documentSubtitle: {
    fontSize: 12,
    color: '#8A6E60',
    marginTop: 2,
  },
  uploadButton: {
    backgroundColor: '#FEE9DE',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  uploadButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primary,
  },
  tipCard: {
    marginTop: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#F4B28C',
    backgroundColor: '#FEF4EE',
    padding: 14,
    gap: 8,
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  tipTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primary,
    letterSpacing: 0.4,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  tipText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 19,
    color: '#8A6E60',
  },
  bottomHint: {
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 12,
  },
  bottomHintText: {
    fontSize: 13,
    color: '#8A6E60',
  },
  bottomHintLink: {
    color: Colors.primary,
    fontWeight: '700',
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
  nextButton: {
    height: ButtonHeights.xl,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  nextButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.white,
  },
});
