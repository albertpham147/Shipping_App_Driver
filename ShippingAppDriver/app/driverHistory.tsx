import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors, Spacing, BorderRadius, ButtonHeights } from '@/constants/theme';
import BottomNav from '@/components/BottomNav';

type Trip = {
  id: string;
  code: string;
  type: string;
  amount: string;
  bonus?: string;
  pickup: string;
  dropoff: string;
  time: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  iconBg: string;
  iconColor: string;
};

const TRIPS: Trip[] = [
  {
    id: '1',
    code: '#DRV-88291',
    type: 'Giao đồ ăn',
    amount: '42.000đ',
    bonus: '+5.000đ Thưởng',
    pickup: 'Cơm tấm Ba Ghiền, 84 Đặng Văn Ngữ, Phú Nhuận',
    dropoff: '152 Lê Văn Sỹ, Phường 10, Phú Nhuận',
    time: '12:30 • 15/10/2023',
    icon: 'restaurant',
    iconBg: '#FFEDD5',
    iconColor: '#F2590D',
  },
  {
    id: '2',
    code: '#DRV-88285',
    type: 'Di chuyển (Bike)',
    amount: '28.000đ',
    pickup: 'Vincom Center Đồng Khởi, Quận 1',
    dropoff: '235 Nguyễn Văn Cừ, Quận 5',
    time: '11:15 • 15/10/2023',
    icon: 'two-wheeler',
    iconBg: '#DBEAFE',
    iconColor: '#2563EB',
  },
  {
    id: '3',
    code: '#DRV-88270',
    type: 'Giao hàng (Express)',
    amount: '65.000đ',
    bonus: '+10.000đ Thưởng',
    pickup: 'Kho hàng GHTK, Đường số 7, Bình Tân',
    dropoff: 'Tòa nhà Landmark 81, Bình Thạnh',
    time: '09:45 • 15/10/2023',
    icon: 'inventory-2',
    iconBg: '#F3E8FF',
    iconColor: '#7C3AED',
  },
];

export default function DriverHistoryScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Lịch sử đơn hàng</Text>
          <View style={styles.incomeCard}>
            <View style={styles.incomeTop}>
              <Text style={styles.incomeLabel}>Tổng thu nhập hôm nay</Text>
              <MaterialIcons name="trending-up" size={18} color={Colors.white} />
            </View>
            <Text style={styles.incomeValue}>850.000đ</Text>
            <View style={styles.incomeBadges}>
              <View style={styles.incomeBadge}>
                <MaterialIcons name="check-circle" size={12} color={Colors.white} />
                <Text style={styles.incomeBadgeText}>12 Đơn hàng</Text>
              </View>
              <View style={styles.incomeBadge}>
                <MaterialIcons name="redeem" size={12} color="#FFFFFF" />
                <Text style={styles.incomeBadgeText}>Tiền thưởng: 45.000đ</Text>
              </View>
            </View>
          </View>
        </View>

        <ScrollView style={styles.list} contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
          {TRIPS.map((trip) => (
            <View key={trip.id} style={styles.card}>
              <View style={styles.cardTop}>
                <View style={styles.leftTop}>
                  <View style={[styles.typeIcon, { backgroundColor: trip.iconBg }]}>
                    <MaterialIcons name={trip.icon} size={20} color={trip.iconColor} />
                  </View>
                  <View>
                    <Text style={styles.tripCode}>{trip.code}</Text>
                    <Text style={styles.tripType}>{trip.type}</Text>
                  </View>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={styles.tripAmount}>{trip.amount}</Text>
                  {trip.bonus ? <Text style={styles.tripBonus}>{trip.bonus}</Text> : null}
                </View>
              </View>

              <View style={styles.routeWrap}>
                <View style={styles.routeRow}>
                  <View style={[styles.routeDot, { backgroundColor: '#3B82F6' }]}>
                    <Text style={styles.routeDotText}>A</Text>
                  </View>
                  <Text style={styles.routeText}>{trip.pickup}</Text>
                </View>
                <View style={styles.routeLine} />
                <View style={styles.routeRow}>
                  <View style={[styles.routeDot, { backgroundColor: '#F97316' }]}>
                    <Text style={styles.routeDotText}>B</Text>
                  </View>
                  <Text style={styles.routeText}>{trip.dropoff}</Text>
                </View>
              </View>

              <View style={styles.cardBottom}>
                <Text style={styles.tripTime}>{trip.time}</Text>
                <View style={styles.doneBadge}>
                  <Text style={styles.doneText}>HOÀN THÀNH</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.bottomNav}>
          <NavItem icon="home" label="Trang chủ" onPress={() => router.replace('/driverHome')} />
          <NavItem icon="history" label="Lịch sử" active />
          <NavItem icon="account-circle" label="Cá nhân" onPress={() => router.push('/profiles/driverProfile')} />
        </View>
      </View>
    </SafeAreaView>
  );
}

function NavItem({
  icon,
  label,
  active,
  onPress,
}: {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  active?: boolean;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <MaterialIcons name={icon} size={22} color={active ? '#F2590D' : '#9CA3AF'} />
      <Text style={[styles.navLabel, active && styles.navLabelActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#F8F6F5' },
  container: { flex: 1, maxWidth: 480, width: '100%', alignSelf: 'center', backgroundColor: '#F8F6F5' },
  header: { backgroundColor: '#FFFFFF', paddingHorizontal: 16, paddingTop: 14, paddingBottom: 14 },
  headerTitle: { fontSize: 24, fontWeight: '700', color: '#181311', marginBottom: 12 },
  incomeCard: { borderRadius: 16, backgroundColor: '#F2590D', padding: 14 },
  incomeTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 },
  incomeLabel: { fontSize: 13, color: '#FFFFFF', opacity: 0.9 },
  incomeValue: { fontSize: 32, fontWeight: '700', color: '#FFFFFF', marginBottom: 10 },
  incomeBadges: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  incomeBadge: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 4 },
  incomeBadgeText: { fontSize: 11, color: '#FFFFFF' },
  list: { flex: 1 },
  listContent: { padding: 16, gap: 12, paddingBottom: 100 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, borderWidth: 1, borderColor: '#F3F4F6', padding: 14 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 },
  leftTop: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  typeIcon: { width: 40, height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  tripCode: { fontSize: 11, color: '#A1A1AA', fontWeight: '500' },
  tripType: { marginTop: 1, fontSize: 14, fontWeight: '700', color: '#181311' },
  tripAmount: { fontSize: 18, fontWeight: '700', color: '#F2590D' },
  tripBonus: { fontSize: 10, fontWeight: '700', color: '#16A34A', textTransform: 'uppercase', marginTop: 1 },
  routeWrap: { marginBottom: 10 },
  routeRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8 },
  routeDot: { width: 20, height: 20, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  routeDotText: { fontSize: 10, fontWeight: '700', color: '#FFFFFF' },
  routeText: { flex: 1, fontSize: 12, color: '#52525B', lineHeight: 17 },
  routeLine: { marginLeft: 9.5, width: 1, height: 16, backgroundColor: '#E5E7EB' },
  cardBottom: { borderTopWidth: 1, borderTopColor: '#FAFAFA', paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  tripTime: { fontSize: 10, color: '#A1A1AA' },
  doneBadge: { backgroundColor: '#ECFDF3', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3 },
  doneText: { fontSize: 10, fontWeight: '700', color: '#16A34A' },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 26,
    paddingTop: 12,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navItem: { alignItems: 'center', gap: 2 },
  navLabel: { fontSize: 10, fontWeight: '500', color: '#9CA3AF' },
  navLabelActive: { color: '#F2590D', fontWeight: '700' },
});
