import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AssetUrls, Colors } from '@/constants/theme';

export default function DriverProfileDetailsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()}>
            <MaterialIcons name="arrow-back-ios-new" size={20} color="#F2590D" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Thông tin cá nhân</Text>
          <TouchableOpacity style={styles.iconBtn} onPress={() => router.push('/profiles/driverProfileEdit')}>
            <MaterialIcons name="settings" size={22} color="#181311" />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.profileTop}>
            <View style={styles.avatarWrap}>
              <Image source={{ uri: AssetUrls.driverAvatar }} style={styles.avatar} />
              <View style={styles.verified}>
                <MaterialIcons name="verified" size={12} color="#FFFFFF" />
              </View>
            </View>
            <Text style={styles.name}>Nguyễn Văn A</Text>
            <Text style={styles.sub}>28 tuổi • Tài xế hạng A</Text>
          </View>

          <Text style={styles.sectionTitle}>CHI TIẾT TÀI KHOẢN</Text>

          <InfoRow icon="account-balance" label="Tài khoản ngân hàng" value="Vietcombank - 1012345678" />
          <InfoRow icon="call" label="Số điện thoại" value="0901 234 567" />
          <InfoRow icon="mail" label="Email" value="vana.nguyen@shipapp.vn" />
          <InfoRow icon="directions-car" label="Biển số xe" value="29-A1 123.45" />

          <Text style={[styles.sectionTitle, styles.sectionSpacing]}>TRẠNG THÁI</Text>
          <View style={styles.statusCard}>
            <View style={styles.statusLeft}>
              <View style={styles.onlineDot} />
              <Text style={styles.statusText}>Đang hoạt động</Text>
            </View>
            <Switch value trackColor={{ false: Colors.gray[300], true: Colors.primary }} thumbColor={Colors.white} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  value: string;
}) {
  return (
    <View style={styles.infoCard}>
      <View style={styles.infoIcon}>
        <MaterialIcons name={icon} size={22} color={Colors.primary} />
      </View>
      <View style={styles.flexOne}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: Colors.background.page },
  flexOne: { flex: 1 },
  sectionSpacing: { marginTop: 12 },
  container: { flex: 1, width: '100%', maxWidth: 480, alignSelf: 'center' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: 'rgba(248,246,245,0.96)',
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: { flex: 1, textAlign: 'center', fontSize: 18, fontWeight: '700', color: '#181311' },
  content: { paddingHorizontal: 16, paddingBottom: 24 },
  profileTop: { alignItems: 'center', paddingTop: 12, paddingBottom: 14 },
  avatarWrap: { position: 'relative', marginBottom: 10 },
  avatar: { width: 128, height: 128, borderRadius: 64, borderWidth: 4, borderColor: '#FFFFFF' },
  verified: {
    position: 'absolute',
    right: 6,
    bottom: 6,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F2590D',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: { fontSize: 28, fontWeight: '700', color: '#181311' },
  sub: { marginTop: 4, fontSize: 16, color: '#8A6E60', fontWeight: '500' },
  sectionTitle: { marginTop: 8, marginBottom: 10, paddingHorizontal: 4, fontSize: 12, fontWeight: '700', color: '#8A6E60' },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    minHeight: 80,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FFF0E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoLabel: { fontSize: 11, fontWeight: '600', color: '#8A6E60', textTransform: 'uppercase' },
  infoValue: { marginTop: 2, fontSize: 16, fontWeight: '600', color: '#181311' },
  statusCard: {
    backgroundColor: '#FFF7ED',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  onlineDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#22C55E' },
  statusText: { fontSize: 16, fontWeight: '500', color: '#181311' },
});
