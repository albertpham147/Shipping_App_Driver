import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AssetUrls, Colors, Spacing, BorderRadius, IconSizes, ButtonHeights } from '@/constants/theme';
import BottomNav from '@/components/BottomNav';

export default function DriverHomeScreen() {
  const [online, setOnline] = useState(false);
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const [onActiveOrder, setOnActiveOrder] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <ImageBackground source={{ uri: AssetUrls.mapImage }} style={styles.map} imageStyle={styles.mapImageStyle}>
          <View style={styles.mapOverlay} />

          <View style={styles.topRight}>
            <TouchableOpacity style={styles.notificationBtn} onPress={() => router.push('/driverNotifications')}>
              <MaterialIcons name="notifications" size={22} color="#181311" />
              <View style={styles.notiDot} />
            </TouchableOpacity>
          </View>

          {!onActiveOrder && (
            <View style={styles.centerPin}>
              <View style={[styles.centerPinGlow, online && styles.centerPinGlowOnline]} />
              <View style={styles.centerPinHead}>
                <View style={styles.centerPinDot} />
              </View>
              <View style={styles.centerPinShadow} />
            </View>
          )}

          {onActiveOrder && (
            <>
              <View style={styles.routeLine} />
              <View style={styles.driverDot} />
              <View style={styles.restaurantPinWrap}>
                <View style={styles.restaurantPin}>
                  <MaterialIcons name="store" size={18} color={Colors.white} style={styles.rotated45} />
                </View>
                <View style={styles.restaurantPinShadow} />
              </View>
            </>
          )}

          <View style={styles.mapTools}>
            <TouchableOpacity style={styles.testBtn} onPress={() => online && !onActiveOrder && setShowOrderPopup(true)}>
              <MaterialIcons name="science" size={16} color="#181311" />
              <Text style={styles.testBtnText}>Test đơn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolBtn}>
              <MaterialIcons name="my-location" size={20} color="#181311" />
            </TouchableOpacity>
            <View style={styles.zoomWrap}>
              <TouchableOpacity style={[styles.toolBtn, styles.zoomTop]}>
                <MaterialIcons name="add" size={20} color="#181311" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.toolBtn}>
                <MaterialIcons name="remove" size={20} color="#181311" />
              </TouchableOpacity>
            </View>
          </View>

          {showOrderPopup && (
            <View style={styles.orderSheet}>
              <View style={styles.sheetHandle} />

              <View style={styles.badgeWrap}>
                <View style={styles.newOrderBadge}>
                  <MaterialIcons name="restaurant" size={18} color="#F2590D" />
                  <Text style={styles.newOrderText}>Đơn hàng đồ ăn mới</Text>
                </View>
              </View>

              <View style={styles.storeRow}>
                <View style={styles.storeLeft}>
                  <View style={styles.storeIcon}>
                    <MaterialIcons name="fastfood" size={22} color="#FFFFFF" />
                  </View>
                  <View>
                    <Text style={styles.storeName}>The Coffee House</Text>
                    <Text style={styles.storeSub}>Giao hàng • 3 món</Text>
                  </View>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={styles.income}>45.000đ</Text>
                  <Text style={styles.incomeNote}>Thu nhập dự kiến</Text>
                </View>
              </View>

              <View style={styles.routeBlock}>
                <View style={styles.routeLineCol}>
                  <View style={styles.dotStart} />
                  <View style={styles.routeDash} />
                  <View style={styles.dotEnd}>
                    <MaterialIcons name="location-on" size={12} color="#2563EB" />
                  </View>
                </View>
                <View style={{ flex: 1, gap: 12 }}>
                  <View>
                    <Text style={styles.addrText}>102 CMT8, Phường 6, Quận 3</Text>
                    <Text style={styles.addrSub}>Điểm lấy hàng (800m)</Text>
                  </View>
                  <View>
                    <Text style={styles.addrText}>Vinhomes Central Park, Bình Thạnh</Text>
                    <Text style={styles.addrSub}>Điểm giao hàng</Text>
                  </View>
                </View>
              </View>

              <View style={styles.itemsCard}>
                <Text style={styles.itemsTitle}>Chi tiết món ăn</Text>
                <Text style={styles.itemText}>1x Bạc sỉu đá</Text>
                <Text style={styles.itemText}>1x Cà phê sữa nóng</Text>
                <Text style={styles.itemText}>1x Bánh mì Việt Nam</Text>
              </View>

              <View style={styles.metaRow}>
                <View style={styles.metaBox}>
                  <MaterialIcons name="route" size={16} color="#6B7280" />
                  <View>
                    <Text style={styles.metaLabel}>Khoảng cách</Text>
                    <Text style={styles.metaValue}>3.5 km</Text>
                  </View>
                </View>
                <View style={styles.metaBox}>
                  <MaterialIcons name="schedule" size={16} color="#6B7280" />
                  <View>
                    <Text style={styles.metaLabel}>Thời gian</Text>
                    <Text style={styles.metaValue}>12 phút</Text>
                  </View>
                </View>
              </View>

              <View style={styles.actionsWrap}>
                <View style={styles.timerCircle}>
                  <Text style={styles.timerText}>12</Text>
                </View>
                <TouchableOpacity
                  style={styles.acceptOrderBtn}
                  onPress={() => {
                    setShowOrderPopup(false);
                    setOnActiveOrder(true);
                  }}>
                  <MaterialIcons name="check-circle" size={20} color="#FFFFFF" />
                  <Text style={styles.acceptOrderText}>Chấp nhận</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rejectTextBtn} onPress={() => setShowOrderPopup(false)}>
                  <Text style={styles.rejectText}>Từ chối</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {onActiveOrder ? (
            <View style={styles.activeOrderCard}>
              <View style={styles.activeHeader}>
                <View style={styles.activeHeaderIcon}>
                  <MaterialIcons name="restaurant" size={26} color={Colors.primary} />
                </View>
                <View style={styles.flexOne}>
                  <Text style={styles.activeTag}>Đang đến cửa hàng</Text>
                  <Text style={styles.activeTitle}>The Coffee House</Text>
                  <Text style={styles.activeEta}>Ước tính: 5 phút</Text>
                </View>
              </View>

              <View style={styles.activeActions}>
                <TouchableOpacity style={styles.actionBtn}>
                  <MaterialIcons name="directions" size={18} color="#374151" />
                  <Text style={styles.actionBtnText}>Bản đồ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtn} onPress={() => router.push('/driverChat')}>
                  <MaterialIcons name="chat" size={18} color="#374151" />
                  <Text style={styles.actionBtnText}>Nhắn tin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callBtn}>
                  <MaterialIcons name="call" size={18} color="#FFFFFF" />
                  <Text style={styles.callBtnText}>Gọi điện</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.finishBtn}
                onPress={() => {
                  setOnActiveOrder(false);
                  router.push('/driverOrderCompleted');
                }}>
                <MaterialIcons name="check-circle" size={18} color="#FFFFFF" />
                <Text style={styles.finishBtnText}>Hoàn thành đơn</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.connectionCard}>
              <TouchableOpacity
                style={[styles.powerBtn, online && styles.powerBtnOnline]}
                onPress={() =>
                  setOnline((v) => {
                    const next = !v;
                    if (!next) {
                      setShowOrderPopup(false);
                      setOnActiveOrder(false);
                    }
                    return next;
                  })
                }>
                <MaterialIcons name={online ? 'radio-button-checked' : 'power-settings-new'} size={26} color="#FFFFFF" />
              </TouchableOpacity>

              <View style={{ flex: 1 }}>
                <View style={styles.connectionTitleRow}>
                  <Text style={styles.connectionTitle}>{online ? 'Đang tìm đơn...' : 'Bật kết nối'}</Text>
                  <View style={[styles.statusPill, online ? styles.statusPillOnline : styles.statusPillOffline]}>
                    <View style={[styles.statusDot, online ? styles.statusDotOnline : styles.statusDotOffline]} />
                    <Text style={[styles.statusText, online ? styles.statusTextOnline : styles.statusTextOffline]}>
                      {online ? 'Trực tuyến' : 'Ngoại tuyến'}
                    </Text>
                  </View>
                </View>
                <Text style={styles.connectionSub}>{online ? 'Bạn sẵn sàng nhận đơn hàng mới' : 'Bạn đang tắt kết nối'}</Text>
              </View>

              <MaterialIcons name="chevron-right" size={20} color={Colors.gray[300]} />
            </View>
          )}
        </ImageBackground>

        <BottomNav
          items={[
            { icon: 'home', label: 'Trang chủ', active: true },
            { icon: 'history', label: 'Lịch sử', onPress: () => router.push('/driverHistory') },
            { icon: 'account-circle', label: 'Cá nhân', onPress: () => router.push('/profiles/driverProfile') },
          ]}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: Colors.background.page },
  container: { flex: 1, maxWidth: 480, width: '100%', alignSelf: 'center', backgroundColor: Colors.white, overflow: 'hidden' },
  map: { flex: 1, justifyContent: 'flex-end' },
  mapImageStyle: { resizeMode: 'cover' },
  mapOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.05)' },
  flexOne: { flex: 1 },
  rotated45: { transform: [{ rotate: '45deg' }] },

  topRight: { position: 'absolute', top: 56, right: 20 },
  notificationBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(229,231,235,0.8)',
  },
  notiDot: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#EF4444',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },

  centerPin: { position: 'absolute', top: '50%', left: '50%', marginLeft: -20, marginTop: -34, alignItems: 'center' },
  centerPinGlow: { position: 'absolute', width: 60, height: 60, borderRadius: 30, backgroundColor: 'rgba(242,89,13,0.3)' },
  centerPinGlowOnline: { backgroundColor: 'rgba(34,197,94,0.22)' },
  centerPinHead: {
    width: 40,
    height: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    transform: [{ rotate: '45deg' }],
    backgroundColor: '#F2590D',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerPinDot: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#FFFFFF', transform: [{ rotate: '-45deg' }] },
  centerPinShadow: { width: 16, height: 4, borderRadius: 99, backgroundColor: 'rgba(0,0,0,0.2)', marginTop: 6 },

  routeLine: {
    position: 'absolute',
    top: '46%',
    left: '48%',
    width: '16%',
    height: 4,
    borderRadius: 2,
    backgroundColor: '#F2590D',
    transform: [{ rotate: '-30deg' }],
  },
  driverDot: {
    position: 'absolute',
    top: '54%',
    left: '45%',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#3B82F6',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  restaurantPinWrap: { position: 'absolute', top: '40%', left: '60%', marginLeft: -22, marginTop: -46, alignItems: 'center' },
  restaurantPin: {
    width: 44,
    height: 44,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    transform: [{ rotate: '-45deg' }],
    backgroundColor: '#F2590D',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantPinShadow: { width: 10, height: 3, borderRadius: 99, marginTop: 2, backgroundColor: 'rgba(0,0,0,0.25)' },

  mapTools: { position: 'absolute', right: 16, bottom: 194, gap: 10 },
  testBtn: {
    height: 34,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'rgba(229,231,235,0.8)',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  testBtnText: { fontSize: 11, fontWeight: '700', color: '#181311' },
  toolBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(229,231,235,0.8)',
  },
  zoomWrap: { borderRadius: 10, overflow: 'hidden', backgroundColor: '#FFFFFF' },
  zoomTop: { borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },

  orderSheet: {
    marginHorizontal: 16,
    marginBottom: 8,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.96)',
    padding: 12,
    paddingTop: 8,
    gap: 10,
  },
  sheetHandle: { width: 48, height: 5, borderRadius: 99, backgroundColor: '#D1D5DB', alignSelf: 'center', marginBottom: 2 },
  badgeWrap: { alignItems: 'center' },
  newOrderBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FFF0E6',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  newOrderText: { fontSize: 11, fontWeight: '700', color: '#F2590D', textTransform: 'uppercase' },
  storeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  storeLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  storeIcon: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#F2590D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storeName: { fontSize: 18, fontWeight: '700', color: '#181311' },
  storeSub: { marginTop: 2, fontSize: 12, color: '#6B7280' },
  income: { fontSize: 20, fontWeight: '700', color: '#F2590D' },
  incomeNote: { fontSize: 10, fontWeight: '600', color: '#9CA3AF', textTransform: 'uppercase' },
  routeBlock: { flexDirection: 'row', gap: 10 },
  routeLineCol: { width: 28, alignItems: 'center' },
  dotStart: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#F2590D', marginTop: 2 },
  routeDash: { width: 2, height: 30, borderRadius: 1, backgroundColor: '#D1D5DB', marginVertical: 4 },
  dotEnd: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addrText: { fontSize: 14, fontWeight: '600', color: '#181311' },
  addrSub: { marginTop: 1, fontSize: 11, color: '#6B7280' },
  itemsCard: {
    borderRadius: 12,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    padding: 10,
    gap: 5,
  },
  itemsTitle: { fontSize: 11, fontWeight: '700', color: '#6B7280', textTransform: 'uppercase' },
  itemText: { fontSize: 14, fontWeight: '500', color: '#181311' },
  metaRow: { flexDirection: 'row', gap: 8 },
  metaBox: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  metaLabel: { fontSize: 10, fontWeight: '700', color: '#9CA3AF', textTransform: 'uppercase' },
  metaValue: { marginTop: 1, fontSize: 14, fontWeight: '700', color: '#181311' },
  actionsWrap: { alignItems: 'center', gap: 8, paddingBottom: 2 },
  timerCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 3,
    borderColor: '#F2590D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: { fontSize: 22, fontWeight: '700', color: '#181311' },
  acceptOrderBtn: {
    width: '100%',
    height: 52,
    borderRadius: 14,
    backgroundColor: '#F2590D',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  acceptOrderText: { fontSize: 18, fontWeight: '700', color: '#FFFFFF' },
  rejectTextBtn: { height: 36, alignItems: 'center', justifyContent: 'center' },
  rejectText: { fontSize: 14, fontWeight: '600', color: '#6B7280' },

  activeOrderCard: {
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.96)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
    padding: 16,
    gap: 12,
  },
  activeHeader: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  activeHeaderIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#FFF0E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTag: { fontSize: 11, fontWeight: '700', color: '#F2590D', textTransform: 'uppercase' },
  activeTitle: { marginTop: 2, fontSize: 20, fontWeight: '700', color: '#181311' },
  activeEta: { marginTop: 2, fontSize: 13, fontWeight: '500', color: '#6B7280' },
  activeActions: { flexDirection: 'row', gap: 8 },
  actionBtn: {
    flex: 1,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  actionBtnText: { fontSize: 10, fontWeight: '600', color: '#374151' },
  callBtn: {
    flex: 1,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#F2590D',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  callBtnText: { fontSize: 10, fontWeight: '600', color: '#FFFFFF' },
  finishBtn: {
    marginTop: 2,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  finishBtnText: { fontSize: 14, fontWeight: '700', color: '#FFFFFF' },

  connectionCard: {
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  powerBtn: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F2590D',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#F2590D',
    shadowOpacity: 0.22,
    shadowRadius: 10,
    elevation: 4,
  },
  powerBtnOnline: {
    backgroundColor: '#22C55E',
    shadowColor: '#22C55E',
  },
  connectionTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  connectionTitle: { fontSize: 16, fontWeight: '700', color: '#181311' },
  statusPill: { flexDirection: 'row', alignItems: 'center', borderRadius: 999, paddingHorizontal: 8, paddingVertical: 3, gap: 5 },
  statusPillOffline: { backgroundColor: '#F3F4F6' },
  statusPillOnline: { backgroundColor: '#ECFDF3', borderWidth: 1, borderColor: '#D1FAE5' },
  statusDot: { width: 6, height: 6, borderRadius: 3 },
  statusDotOffline: { backgroundColor: '#9CA3AF' },
  statusDotOnline: { backgroundColor: '#22C55E' },
  statusText: { fontSize: 9, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.4 },
  statusTextOffline: { color: '#6B7280' },
  statusTextOnline: { color: '#22C55E' },
  connectionSub: { marginTop: 2, fontSize: 12, fontWeight: '500', color: Colors.gray[500] },
});
