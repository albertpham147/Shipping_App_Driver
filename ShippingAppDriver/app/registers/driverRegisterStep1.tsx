import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors, Spacing, BorderRadius, ButtonHeights } from '../../constants/theme';

const REGIONS = ['Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Cần Thơ'];

export default function DriverRegisterStep1Screen() {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [vehicleType, setVehicleType] = useState<'motorbike' | 'car'>('motorbike');
  const [regionIndex, setRegionIndex] = useState(0);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

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
                <Text style={styles.stepCircleTextActive}>1</Text>
              </View>
              <Text style={styles.stepTextActive}>THÔNG TIN</Text>
            </View>
            <View style={styles.stepItem}>
              <View style={styles.stepCircle}>
                <Text style={styles.stepCircleText}>2</Text>
              </View>
              <Text style={styles.stepText}>GIẤY TỜ</Text>
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
          <Text style={styles.formTitle}>Thông tin cá nhân</Text>
          <Text style={styles.formSubtitle}>Vui lòng điền thông tin chính xác theo CCCD</Text>

          <View style={styles.field}>
            <Text style={styles.label}>Họ và tên</Text>
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
              placeholder="Nhập họ và tên đầy đủ"
              placeholderTextColor="#8A6E60"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Số điện thoại</Text>
            <View style={styles.phoneWrap}>
              <Text style={styles.prefix}>+84</Text>
              <TextInput
                style={styles.phoneInput}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                placeholder="Nhập số điện thoại"
                placeholderTextColor="#8A6E60"
              />
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Loại phương tiện</Text>
            <View style={styles.vehicleRow}>
              <TouchableOpacity
                style={[styles.vehicleCard, vehicleType === 'motorbike' && styles.vehicleCardActive]}
                onPress={() => setVehicleType('motorbike')}>
                <MaterialIcons
                  name="two-wheeler"
                  size={28}
                  color={vehicleType === 'motorbike' ? '#F2590D' : '#8A6E60'}
                />
                <Text style={[styles.vehicleText, vehicleType === 'motorbike' && styles.vehicleTextActive]}>
                  Xe máy
                </Text>
                {vehicleType === 'motorbike' && (
                  <View style={styles.checkBadge}>
                    <MaterialIcons name="check-circle" size={18} color="#F2590D" />
                  </View>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.vehicleCard, vehicleType === 'car' && styles.vehicleCardActive]}
                onPress={() => setVehicleType('car')}>
                <MaterialIcons
                  name="directions-car"
                  size={28}
                  color={vehicleType === 'car' ? '#F2590D' : '#8A6E60'}
                />
                <Text style={[styles.vehicleText, vehicleType === 'car' && styles.vehicleTextActive]}>Ô tô</Text>
                {vehicleType === 'car' && (
                  <View style={styles.checkBadge}>
                    <MaterialIcons name="check-circle" size={18} color="#F2590D" />
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Khu vực hoạt động</Text>
            <TouchableOpacity
              style={styles.input}
              onPress={() => setRegionIndex((prev) => (prev + 1) % REGIONS.length)}>
              <Text style={styles.regionText}>{REGIONS[regionIndex]}</Text>
              <MaterialIcons name="expand-more" size={22} color="#8A6E60" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.termsRow} onPress={() => setAcceptedTerms((prev) => !prev)}>
            <View style={[styles.checkbox, acceptedTerms && styles.checkboxActive]}>
              {acceptedTerms && <AntDesign name="check" size={14} color="#FFFFFF" />}
            </View>
            <Text style={styles.termsText}>
              Tôi đồng ý với <Text style={styles.termsLink}>điều khoản dịch vụ</Text> và chính sách bảo mật của ứng
              dụng.
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomHint}>
          <Text style={styles.bottomHintText}>Bạn đã có tài khoản?</Text>
          <TouchableOpacity onPress={() => router.push('/driverLogin')}>
            <Text style={styles.bottomHintLink}>Đăng nhập ngay</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton} onPress={() => router.push('/registers/driverRegisterStep2')}>
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
    width: '25%',
    height: 4,
    backgroundColor: Colors.primary,
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
  field: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#181311',
  },
  input: {
    minHeight: 56,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6DFDB',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#181311',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  phoneWrap: {
    height: 56,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6DFDB',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  prefix: {
    fontSize: 16,
    fontWeight: '500',
    color: '#181311',
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    color: '#181311',
  },
  vehicleRow: {
    flexDirection: 'row',
    gap: 10,
  },
  vehicleCard: {
    flex: 1,
    height: 110,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E6DFDB',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    position: 'relative',
  },
  vehicleCardActive: {
    borderColor: Colors.primary,
    backgroundColor: '#FEF1EA',
  },
  vehicleText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#8A6E60',
  },
  vehicleTextActive: {
    color: Colors.primary,
  },
  checkBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  regionText: {
    fontSize: 16,
    color: '#181311',
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginTop: 4,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E6DFDB',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  checkboxActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  termsText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: '#181311',
  },
  termsLink: {
    color: Colors.primary,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  bottomHint: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 12,
  },
  bottomHintText: {
    fontSize: 13,
    color: '#8A6E60',
  },
  bottomHintLink: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primary,
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
