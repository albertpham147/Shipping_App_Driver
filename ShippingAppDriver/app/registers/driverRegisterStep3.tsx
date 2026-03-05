import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors, Spacing, BorderRadius, ButtonHeights } from '../../constants/theme';

const REQUIREMENTS = [
  'Nhìn thẳng vào camera',
  'Không đeo kính râm hoặc khẩu trang',
  'Đảm bảo đủ ánh sáng',
];

export default function DriverRegisterStep3Screen() {
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
                <AntDesign name="check" size={14} color={Colors.white} />
              </View>
              <Text style={styles.stepTextActive}>GIẤY TỜ</Text>
            </View>
            <View style={styles.stepItem}>
              <View style={[styles.stepCircle, styles.stepCircleActive, styles.stepCircleCurrent]}>
                <Text style={styles.stepCircleTextActive}>3</Text>
              </View>
              <Text style={styles.stepTextActive}>XÁC MINH</Text>
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
          <Text style={styles.formTitle}>Xác minh danh tính</Text>
          <Text style={styles.formSubtitle}>Vui lòng chụp ảnh chân dung để xác thực khuôn mặt</Text>

          <View style={styles.cameraArea}>
            <TouchableOpacity style={styles.cameraRing}>
              <View style={styles.cameraInner}>
                <View style={styles.cameraIconWrap}>
                  <MaterialIcons name="photo-camera" size={48} color="#F2590D" />
                </View>
                <Text style={styles.cameraText}>Chạm để chụp</Text>
              </View>
              <View style={styles.cameraOverlay} />
            </TouchableOpacity>
          </View>

          <View style={styles.requirementCard}>
            <Text style={styles.requirementTitle}>YÊU CẦU HÌNH ẢNH</Text>
            {REQUIREMENTS.map((item) => (
              <View key={item} style={styles.requirementItem}>
                <View style={styles.requirementCheck}>
                  <MaterialIcons name="check-circle" size={17} color="#16A34A" />
                </View>
                <Text style={styles.requirementText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.bottomHint}>
          <Text style={styles.bottomHintText}>Bạn gặp khó khăn khi xác thực?</Text>
          <TouchableOpacity>
            <Text style={styles.bottomHintLink}>Liên hệ Tổng đài hỗ trợ</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.takePhotoButton} onPress={() => router.push('/registers/driverRegisterStep4')}>
          <MaterialIcons name="photo-camera" size={20} color="#FFFFFF" />
          <Text style={styles.takePhotoButtonText}>Chụp ảnh</Text>
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
    flexGrow: 1,
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
    width: '72%',
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
    backgroundColor: '#F2590D',
  },
  stepCircleCurrent: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  stepCircleText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#8A6E60',
  },
  stepCircleTextActive: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  stepText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#8A6E60',
    textAlign: 'center',
  },
  stepTextActive: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.primary,
    textAlign: 'center',
  },
  formSection: {
    gap: 18,
    flex: 1,
  },
  formTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#181311',
  },
  formSubtitle: {
    marginTop: -10,
    fontSize: 14,
    color: '#8A6E60',
  },
  cameraArea: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  cameraRing: {
    width: 258,
    height: 258,
    borderRadius: 129,
    borderWidth: 4,
    borderStyle: 'dashed',
    borderColor: '#F7C8AD',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  cameraInner: {
    alignItems: 'center',
    gap: 12,
  },
  cameraIconWrap: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FEE9DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraText: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  cameraOverlay: {
    position: 'absolute',
    top: 14,
    left: 14,
    right: 14,
    bottom: 14,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#FCE2D3',
  },
  requirementCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E6DFDB',
    padding: 18,
    gap: 14,
  },
  requirementTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#181311',
    letterSpacing: 0.5,
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  requirementCheck: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#DCFCE7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  requirementText: {
    flex: 1,
    fontSize: 14,
    color: '#181311',
    fontWeight: '500',
  },
  bottomHint: {
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 12,
  },
  bottomHintText: {
    fontSize: 13,
    color: '#8A6E60',
    textAlign: 'center',
  },
  bottomHintLink: {
    marginTop: 4,
    fontSize: 13,
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
  takePhotoButton: {
    height: ButtonHeights.xl,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  takePhotoButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.white,
  },
});
