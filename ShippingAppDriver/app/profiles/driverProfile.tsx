import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AssetUrls, Colors, Spacing, BorderRadius } from '@/constants/theme';
import BottomNav from '@/components/BottomNav';

export default function DriverProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.avatarWrap}>
            <View style={styles.avatarBorder}>
              <Image source={{ uri: AssetUrls.driverAvatar }} style={styles.avatar} />
            </View>
            <View style={styles.onlineDot} />
          </View>

          <Text style={styles.name}>Nguyễn Văn A</Text>
          <Text style={styles.role}>Tài xế chuyên nghiệp</Text>

          <View style={styles.plateWrap}>
            <Text style={styles.plateLabel}>BIỂN SỐ XE</Text>
            <View style={styles.plateBox}>
              <Text style={styles.plateText}>29A1 - 123.45</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            <Stat icon="star" value="4.9" label="Rating" filled />
            <View style={styles.statDivider} />
            <Stat icon="route" value="1,250" label="Số km" />
            <View style={styles.statDivider} />
            <Stat icon="local-shipping" value="450" label="Số chuyến" />
          </View>
        </View>

        <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.card}>
            <TouchableOpacity style={styles.menuRow} onPress={() => router.push('/profiles/driverProfileDetails')}>
              <View style={styles.menuLeft}>
                <View style={styles.menuIconWrap}>
                  <MaterialIcons name="person" size={22} color="#F2590D" />
                </View>
                <Text style={styles.menuLabel}>Thông tin cá nhân</Text>
              </View>
              <MaterialIcons name="chevron-right" size={22} color="#D1D5DB" />
            </TouchableOpacity>
          </View>

          <View style={styles.logoutWrap}>
            <TouchableOpacity style={styles.logoutBtn} onPress={() => router.replace('/driverLogin')}>
              <MaterialIcons name="logout" size={22} color="#F2590D" />
              <Text style={styles.logoutText}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <BottomNav
          items={[
            { icon: 'home', label: 'Trang chủ', onPress: () => router.replace('/driverHome') },
            { icon: 'history', label: 'Lịch sử', onPress: () => router.push('/driverHistory') },
            { icon: 'account-circle', label: 'Cá nhân', active: true },
          ]}
        />
      </View>
    </SafeAreaView>
  );
}

function Stat({
  icon,
  value,
  label,
  filled,
}: {
  icon: keyof typeof MaterialIcons.glyphMap;
  value: string;
  label: string;
  filled?: boolean;
}) {
  return (
    <View style={styles.statItem}>
      <MaterialIcons name={icon} size={24} color="#F2590D" />
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#F8F6F5' },
  container: { flex: 1, maxWidth: 480, width: '100%', alignSelf: 'center', backgroundColor: '#F8F6F5' },

  topSection: {
    backgroundColor: '#FFFFFF',
    paddingTop: 14,
    paddingHorizontal: 16,
    paddingBottom: 10,
    alignItems: 'center',
  },
  avatarWrap: { marginBottom: 10, position: 'relative' },
  avatarBorder: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: '#FFF7ED',
    overflow: 'hidden',
  },
  avatar: { width: '100%', height: '100%' },
  onlineDot: {
    position: 'absolute',
    right: 2,
    bottom: 2,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#22C55E',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  name: { fontSize: 22, fontWeight: '700', color: '#181311' },
  role: { marginTop: 2, fontSize: 12, color: '#6B7280' },
  plateWrap: { marginTop: 10, alignItems: 'center' },
  plateLabel: { fontSize: 10, fontWeight: '700', color: '#9CA3AF', letterSpacing: 1 },
  plateBox: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 18,
    paddingVertical: 6,
  },
  plateText: { fontSize: 16, fontWeight: '700', color: '#27272A', letterSpacing: 1 },
  statsRow: {
    width: '100%',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  statItem: { flex: 1, alignItems: 'center', gap: 2 },
  statDivider: { width: 1, backgroundColor: '#F3F4F6' },
  statValue: { fontSize: 20, fontWeight: '700', color: '#181311' },
  statLabel: { fontSize: 10, fontWeight: '600', color: '#6B7280', textTransform: 'uppercase', letterSpacing: 0.5 },

  content: { flex: 1 },
  contentContainer: { padding: 16, paddingBottom: 100, gap: 14 },
  card: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#F3F4F6', borderRadius: 16, overflow: 'hidden' },
  menuRow: { padding: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  menuLeft: { flexDirection: 'row', alignItems: 'center', gap: 10, flex: 1 },
  menuIconWrap: { width: 40, height: 40, borderRadius: 10, backgroundColor: '#FFF7ED', alignItems: 'center', justifyContent: 'center' },
  menuLabel: { fontSize: 14, fontWeight: '600', color: '#181311' },

  logoutWrap: { paddingTop: 8, alignItems: 'center' },
  logoutBtn: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  logoutText: { fontSize: 14, fontWeight: '500', color: Colors.gray[500] },
});
