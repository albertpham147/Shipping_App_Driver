import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors, Spacing, BorderRadius, ButtonHeights } from '@/constants/theme';

export default function DriverOrderCompletedScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.headerBlock}>
            <View style={styles.checkWrap}>
              <MaterialIcons name="check-circle" size={52} color={Colors.white} />
            </View>
            <Text style={styles.title}>Hoàn thành đơn hàng</Text>
            <Text style={styles.sub}>Cảm ơn bạn đã hoàn thành chuyến đi!</Text>
          </View>

          <View style={styles.earnCard}>
            <View style={styles.handle} />
            <Text style={styles.earnLabel}>Thu nhập</Text>
            <Text style={styles.earnValue}>25.000đ</Text>
          </View>

          <View style={styles.detailCard}>
            <View style={styles.detailTop}>
              <View>
                <Text style={styles.smallLabel}>Mã đơn hàng</Text>
                <Text style={styles.code}>#FOOD-28491-02</Text>
              </View>
              <View style={styles.typePill}>
                <Text style={styles.typeText}>Giao đồ ăn</Text>
              </View>
            </View>

            <View style={styles.routeItem}>
              <View style={styles.pointA} />
              <View style={styles.flexOne}>
                <Text style={styles.smallLabel}>Điểm lấy hàng</Text>
                <Text style={styles.routeTitle}>The Coffee House</Text>
                <Text style={styles.routeSub}>123 Trần Hưng Đạo, Quận 1</Text>
              </View>
            </View>

            <View style={styles.routeItem}>
              <View style={styles.pointB}>
                <MaterialIcons name="location-on" size={12} color={Colors.white} />
              </View>
              <View style={styles.flexOne}>
                <Text style={styles.smallLabel}>Điểm giao hàng</Text>
                <Text style={styles.routeTitle}>Nguyễn Văn A</Text>
                <Text style={styles.routeSub}>456 Lê Lợi, Phường Bến Thành, Quận 1</Text>
              </View>
            </View>

            <View style={styles.metaRow}>
              <View style={styles.metaBox}>
                <MaterialIcons name="route" size={20} color={Colors.gray[500]} />
                <View>
                  <Text style={styles.smallLabel}>Quãng đường</Text>
                  <Text style={styles.metaValue}>3.2 km</Text>
                </View>
              </View>
              <View style={styles.metaBox}>
                <MaterialIcons name="schedule" size={20} color={Colors.gray[500]} />
                <View>
                  <Text style={styles.smallLabel}>Thời gian</Text>
                  <Text style={styles.metaValue}>15 phút</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottom}>
          <TouchableOpacity style={styles.homeBtn} onPress={() => router.replace('/driverHome')}>
            <Text style={styles.homeBtnText}>Về trang chủ</Text>
          </TouchableOpacity>
          <View style={styles.bottomLine} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#F8F6F5' },
  container: { flex: 1, width: '100%', maxWidth: 480, alignSelf: 'center', backgroundColor: '#F8F6F5' },
  content: { paddingBottom: 20 },
  headerBlock: { alignItems: 'center', paddingTop: 26, paddingBottom: 18, paddingHorizontal: 20 },
  checkWrap: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#F2590D',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  title: { fontSize: 30, fontWeight: '700', color: '#181311' },
  sub: { marginTop: 4, fontSize: 14, color: '#71717A' },
  earnCard: { marginHorizontal: 16, backgroundColor: '#FFFFFF', borderRadius: 16, borderWidth: 1, borderColor: '#F3F4F6', padding: 18, alignItems: 'center' },
  handle: { width: 40, height: 4, borderRadius: 99, backgroundColor: '#D1D5DB', marginBottom: 8 },
  earnLabel: { fontSize: 12, color: '#71717A', textTransform: 'uppercase', letterSpacing: 1 },
  earnValue: { fontSize: 42, fontWeight: '700', color: '#F2590D' },
  detailCard: { marginTop: 12, marginHorizontal: 16, backgroundColor: '#FFFFFF', borderRadius: 16, borderWidth: 1, borderColor: '#F3F4F6', padding: 16, gap: 12 },
  detailTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  smallLabel: { fontSize: 10, fontWeight: '700', color: '#A1A1AA', textTransform: 'uppercase' },
  code: { marginTop: 2, fontSize: 14, fontWeight: '600', color: '#181311' },
  typePill: { backgroundColor: '#EFF6FF', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 },
  typeText: { fontSize: 11, fontWeight: '700', color: '#2563EB' },
  routeItem: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  pointA: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#F2590D' },
  pointB: { width: 16, height: 16, borderRadius: 8, backgroundColor: '#27272A', alignItems: 'center', justifyContent: 'center' },
  routeTitle: { fontSize: 14, fontWeight: '700', color: '#181311' },
  routeSub: { marginTop: 1, fontSize: 12, color: '#71717A' },
  metaRow: { marginTop: 8, flexDirection: 'row', gap: 10 },
  metaBox: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: '#F9FAFB', borderRadius: 12, padding: 10 },
  metaValue: { fontSize: 14, fontWeight: '700', color: '#181311' },
  bottom: { paddingHorizontal: 16, paddingBottom: 10, backgroundColor: '#F8F6F5' },
  homeBtn: { height: 56, borderRadius: 16, backgroundColor: '#F2590D', alignItems: 'center', justifyContent: 'center' },
  homeBtnText: { color: '#FFFFFF', fontSize: 18, fontWeight: '700' },
  bottomLine: { alignSelf: 'center', marginTop: 10, width: 128, height: 6, borderRadius: 99, backgroundColor: '#D4D4D8' },
});

