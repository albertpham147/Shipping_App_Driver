import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors, Spacing, BorderRadius } from '@/constants/theme';

type Notice = {
  id: string;
  title: string;
  body: string;
  time: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  iconBg: string;
  iconColor: string;
  unread?: boolean;
};

const DATA: Notice[] = [
  {
    id: '1',
    title: 'Tiền thưởng hôm nay',
    body: 'Nhận ngay 50.000đ khi hoàn thành đủ 10 chuyến xe trong ngày hôm nay.',
    time: '10:24',
    icon: 'monetization-on',
    iconBg: '#FFEDD5',
    iconColor: '#F2590D',
    unread: true,
  },
  {
    id: '2',
    title: 'Chế độ hoạt động mới',
    body: 'Cập nhật cách tính hạng tài xế mới. Hãy xem các thay đổi về tiêu chí đánh giá sao và tỉ lệ nhận đơn.',
    time: 'Hôm qua',
    icon: 'stars',
    iconBg: '#DBEAFE',
    iconColor: '#2563EB',
    unread: true,
  },
  {
    id: '3',
    title: 'Nhắc nhở nạp tiền',
    body: 'Số dư ví của bạn còn dưới 20.000đ. Vui lòng nạp thêm để không bị gián đoạn khi nhận đơn.',
    time: '2 ngày trước',
    icon: 'account-balance-wallet',
    iconBg: '#F3E8FF',
    iconColor: '#7C3AED',
  },
  {
    id: '4',
    title: 'Xác thực hồ sơ thành công',
    body: 'Hồ sơ đăng ký của bạn đã được phê duyệt. Bạn có thể bắt đầu nhận đơn ngay.',
    time: '3 ngày trước',
    icon: 'check-circle',
    iconBg: '#DCFCE7',
    iconColor: '#16A34A',
  },
];

export default function DriverNotificationsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <MaterialIcons name="arrow-back-ios-new" size={22} color={Colors.black} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Thông báo</Text>
          <View style={styles.backBtn} />
        </View>

        <ScrollView style={styles.list} contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
          {DATA.map((item) => (
            <View key={item.id} style={styles.card}>
              {item.unread ? <View style={styles.unreadDot} /> : null}
              <View style={[styles.iconWrap, { backgroundColor: item.iconBg }]}>
                <MaterialIcons name={item.icon} size={24} color={item.iconColor} />
              </View>
              <View style={styles.cardBody}>
                <View style={styles.cardTop}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardTime}>{item.time}</Text>
                </View>
                <Text style={styles.cardText}>{item.body}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.indicatorWrap}>
          <View style={styles.indicator} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#F8F6F5' },
  container: { flex: 1, maxWidth: 480, width: '100%', alignSelf: 'center', backgroundColor: '#FFFFFF' },
  header: {
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backBtn: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { flex: 1, textAlign: 'center', fontSize: 22, fontWeight: '700', color: '#181311' },
  list: { flex: 1, backgroundColor: '#F8F6F5' },
  listContent: { padding: 16, paddingBottom: 20, gap: 12 },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    padding: 14,
    flexDirection: 'row',
    gap: 12,
    position: 'relative',
  },
  unreadDot: { position: 'absolute', top: 14, right: 14, width: 8, height: 8, borderRadius: 4, backgroundColor: '#F2590D' },
  iconWrap: { width: 48, height: 48, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  cardBody: { flex: 1 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingRight: 14, marginBottom: 2 },
  cardTitle: { fontSize: 15, fontWeight: '700', color: '#181311', flex: 1, marginRight: 8 },
  cardTime: { fontSize: 11, color: '#A1A1AA' },
  cardText: { fontSize: 13, color: '#52525B', lineHeight: 20 },
  indicatorWrap: { paddingBottom: 8, alignItems: 'center', backgroundColor: '#F8F6F5' },
  indicator: { width: 128, height: 6, borderRadius: 99, backgroundColor: '#D1D5DB' },
});
