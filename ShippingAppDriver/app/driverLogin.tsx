import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function DriverLoginScreen() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.page}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.flex}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.card}>
            <View style={styles.logoWrap}>
              <View style={styles.logoCircle}>
                <FontAwesome6 name="motorcycle" size={36} color="#FFFFFF" />
              </View>
              <Text style={styles.title}>Đăng nhập Tài xế</Text>
              <Text style={styles.subtitle}>Chào mừng bạn trở lại với App Shipping</Text>
            </View>

            <View style={styles.formArea}>
              <View style={styles.field}>
                <Text style={styles.label}>Số điện thoại</Text>
                <View style={styles.inputWrap}>
                  <FontAwesome name="phone" size={18} color="#9CA3AF" style={styles.leftIcon} />
                  <TextInput
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    placeholder="Nhập số điện thoại của bạn"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="phone-pad"
                    style={styles.input}
                  />
                </View>
              </View>

              <View style={styles.field}>
                <View style={styles.fieldHeader}>
                  <Text style={styles.label}>Mật khẩu</Text>
                  <TouchableOpacity>
                    <Text style={styles.forgot}>Quên mật khẩu?</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.inputWrap}>
                  <MaterialCommunityIcons name="lock-outline" size={19} color="#9CA3AF" style={styles.leftIcon} />
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Nhập mật khẩu"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry={!showPassword}
                    style={styles.input}
                  />
                  <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)} style={styles.rightIconButton}>
                    <MaterialCommunityIcons
                      name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                      size={20}
                      color="#9CA3AF"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity style={styles.loginButton} onPress={() => router.replace('/driverHome')}>
                <Text style={styles.loginButtonText}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.dividerRow}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>Hoặc đăng nhập với</Text>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.socialRow}>
              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome name="facebook-square" size={26} color="#1877F2" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome name="google" size={24} color="#EA4335" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome name="apple" size={24} color="#111111" />
              </TouchableOpacity>
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Bạn chưa có tài khoản?</Text>
              <TouchableOpacity onPress={() => router.push('/registers/driverRegisterStep1')}>
                <Text style={styles.footerLink}>Đăng ký ngay</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.customerButton} onPress={() => router.push('/profiles/customerProfile')}>
              <Text style={styles.customerButtonText}>Quay về profile customer</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F8F6F5',
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 36,
    paddingHorizontal: 24,
    paddingVertical: 28,
  },
  logoWrap: {
    alignItems: 'center',
    marginBottom: 28,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F2590D',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#181311',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#6B7280',
  },
  formArea: {
    gap: 16,
  },
  field: {
    gap: 8,
  },
  fieldHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#181311',
  },
  forgot: {
    fontSize: 12,
    color: '#F2590D',
    fontWeight: '600',
  },
  inputWrap: {
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  leftIcon: {
    marginRight: 10,
  },
  rightIconButton: {
    padding: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#181311',
  },
  loginButton: {
    marginTop: 4,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2590D',
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  dividerRow: {
    marginTop: 30,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ECECEC',
  },
  dividerText: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  socialRow: {
    flexDirection: 'row',
    gap: 12,
  },
  socialButton: {
    flex: 1,
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ECECEC',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  footer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  footerText: {
    fontSize: 14,
    color: '#6B7280',
  },
  footerLink: {
    fontSize: 14,
    fontWeight: '700',
    color: '#F2590D',
  },
  customerButton: {
    marginTop: 12,
    height: 46,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F6D5C3',
    backgroundColor: '#FFF7F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customerButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#C85313',
  },
});
