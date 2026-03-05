import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors, BorderRadius, ButtonHeights, AssetUrls } from '../../constants/theme';

export default function DriverProfileEditScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <MaterialIcons name="arrow-back-ios-new" size={20} color={Colors.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Chỉnh sửa thông tin</Text>
          <View style={styles.backBtn} />
        </View>

        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.avatarSection}>
            <View style={styles.avatarWrap}>
              <Image source={{ uri: AssetUrls.driverAvatar }} style={styles.avatar} />
              <TouchableOpacity style={styles.cameraBtn}>
                <MaterialIcons name="photo-camera" size={20} color={Colors.white} />
              </TouchableOpacity>
            </View>
            <Text style={styles.changeAvatar}>Thay đổi ảnh đại diện</Text>
          </View>

          <View style={styles.form}>
            <Field label="Họ và tên" value="Nguyễn Văn A" />
            <Field label="Số điện thoại" value="0901 234 567" keyboardType="phone-pad" />
            <Field label="Email" value="vana.nguyen@shipapp.vn" keyboardType="email-address" />
            <Field label="Ngân hàng" value="Vietcombank" />
            <Field label="Số tài khoản" value="1012345678" />
          </View>
        </ScrollView>

        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.saveBtn} onPress={() => router.back()}>
            <Text style={styles.saveText}>Lưu thay đổi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

function Field({
  label,
  value,
  keyboardType,
}: {
  label: string;
  value: string;
  keyboardType?: 'default' | 'phone-pad' | 'email-address';
}) {
  return (
    <View style={styles.fieldGroup}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        defaultValue={value}
        keyboardType={keyboardType ?? 'default'}
        placeholderTextColor="#9CA3AF"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: Colors.gray[50] },
  container: { flex: 1, width: '100%', maxWidth: 430, alignSelf: 'center' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: 'rgba(248,246,245,0.96)',
  },
  backBtn: { width: 40, height: 40, borderRadius: BorderRadius.full, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { flex: 1, textAlign: 'center', fontSize: 18, fontWeight: '700', color: Colors.black },
  content: { paddingHorizontal: 16, paddingBottom: 120 },
  avatarSection: { alignItems: 'center', paddingTop: 14, paddingBottom: 8 },
  avatarWrap: { position: 'relative' },
  avatar: { width: 128, height: 128, borderRadius: 64, borderWidth: 4, borderColor: Colors.white },
  cameraBtn: {
    position: 'absolute',
    right: 4,
    bottom: 4,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.primary,
    borderWidth: 2,
    borderColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  changeAvatar: { marginTop: 10, fontSize: 14, fontWeight: '600', color: Colors.primary },
  form: { marginTop: 8, gap: 14 },
  fieldGroup: { gap: 8 },
  fieldLabel: { fontSize: 14, fontWeight: '700', color: Colors.black, paddingHorizontal: 2 },
  input: {
    height: ButtonHeights.xl,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.gray[200],
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    paddingTop: 20,
    backgroundColor: '#F8F6F5',
  },
  saveBtn: {
    height: ButtonHeights.xl,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveText: { color: Colors.white, fontSize: 16, fontWeight: '700' },
});

