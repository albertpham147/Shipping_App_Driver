import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AssetUrls, Colors, Spacing, BorderRadius } from '../constants/theme';

const CUSTOMER_AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrtkirlcJhlo0mK-olaFf0mYTx-SvjOwoahXKFEmrLBgKMIeN3H17qiVg44eovszC4Hip2wJ1cacbMke9uAE8CgzRRC8GZi52vWwS80Zbf8bq5GPrJ1PmH-ZrnnDZaN0oY_Px3e9QikKNSbiw9sPv2EIzma5f_eQgKSsNlpZHohfT7jhygiClrzDipz12luQ1YT7Np1tYgw9UOPK5zk9dvJbWSoFi_SsxweFBnYgujCv9Y31w3HTSWGkhNLLq1fwrjc_Ky0q4-K-d5';
const DRIVER_AVATAR = AssetUrls.driverAvatar;

export default function DriverChatScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()}>
            <MaterialIcons name="arrow-back-ios-new" size={22} color={Colors.black} />
          </TouchableOpacity>
          <View style={styles.flexOne}>
            <Text style={styles.headerTitle}>Trần Thu Thảo</Text>
            <Text style={styles.headerSub}>Chuyến đi #EX-982310</Text>
          </View>
          <TouchableOpacity style={styles.callBtn}>
            <MaterialIcons name="call" size={22} color={Colors.primary} />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.chatArea} contentContainerStyle={styles.chatContent} showsVerticalScrollIndicator={false}>
          <View style={styles.dayTag}>
            <Text style={styles.dayTagText}>Hôm nay</Text>
          </View>

          <View style={styles.leftRow}>
            <Image source={{ uri: CUSTOMER_AVATAR }} style={styles.avatar} />
            <View style={styles.leftBubbleWrap}>
              <View style={styles.leftBubble}>
                <Text style={styles.leftBubbleText}>Tôi đang đứng trước cửa hàng tiện lợi.</Text>
              </View>
              <Text style={styles.timeLeft}>10:45 AM</Text>
            </View>
          </View>

          <View style={styles.rightRow}>
            <View style={styles.rightBubbleWrap}>
              <View style={styles.rightBubble}>
                <Text style={styles.rightBubbleText}>Vâng, tôi thấy bạn rồi.</Text>
              </View>
              <View style={styles.timeRow}>
                <Text style={styles.timeRight}>10:46 AM</Text>
                <MaterialIcons name="done-all" size={14} color={Colors.primary} />
              </View>
            </View>
            <Image source={{ uri: DRIVER_AVATAR }} style={[styles.avatar, styles.driverAvatar]} />
          </View>

          <View style={styles.leftRow}>
            <Image source={{ uri: CUSTOMER_AVATAR }} style={styles.avatar} />
            <View style={styles.leftBubbleWrap}>
              <View style={styles.leftBubble}>
                <Text style={styles.leftBubbleText}>Tôi mặc áo khoác màu vàng nhé.</Text>
              </View>
              <Text style={styles.timeLeft}>10:47 AM</Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.quickRow}>
            <Quick text="Tôi đang đến" />
            <Quick text="Bạn chờ ở đâu?" />
            <Quick text="Tôi đã tới điểm đón" />
          </ScrollView>

          <View style={styles.inputRow}>
            <View style={styles.leftActions}>
              <TouchableOpacity style={styles.smallIconBtn}>
                <MaterialIcons name="image" size={24} color="#8A6E60" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.smallIconBtn}>
                <MaterialIcons name="location-on" size={24} color="#8A6E60" />
              </TouchableOpacity>
            </View>
            <TextInput placeholder="Nhập tin nhắn..." placeholderTextColor="#9CA3AF" style={styles.input} />
            <TouchableOpacity style={styles.sendBtn}>
              <MaterialIcons name="send" size={22} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function Quick({ text }: { text: string }) {
  return (
    <TouchableOpacity style={styles.quickChip}>
      <Text style={styles.quickText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  flexOne: { flex: 1 },
  page: { flex: 1, backgroundColor: Colors.gray[50] },
  container: { flex: 1, width: '100%', maxWidth: 480, alignSelf: 'center', backgroundColor: Colors.white },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingHorizontal: 12,
    paddingTop: 6,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBtn: { width: 40, height: 40, borderRadius: BorderRadius.full, alignItems: 'center', justifyContent: 'center' },
  callBtn: { width: 40, height: 40, borderRadius: BorderRadius.full, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(242,89,13,0.1)' },
  headerTitle: { fontSize: 18, fontWeight: '700', color: Colors.black },
  headerSub: { marginTop: 2, fontSize: 12, fontWeight: '500', color: '#8A6E60' },

  chatArea: { flex: 1, paddingHorizontal: Spacing.md },
  chatContent: { paddingVertical: 12, gap: 18 },
  dayTag: { alignSelf: 'center', backgroundColor: Colors.gray[100], borderRadius: 999, paddingHorizontal: 12, paddingVertical: 4 },
  dayTagText: { fontSize: 11, fontWeight: '600', color: '#8A6E60', textTransform: 'uppercase' },
  leftRow: { flexDirection: 'row', alignItems: 'flex-end', gap: 10 },
  rightRow: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', gap: 10 },
  avatar: { width: 36, height: 36, borderRadius: 18 },
  driverAvatar: { borderWidth: 2, borderColor: 'rgba(242,89,13,0.2)' },
  leftBubbleWrap: { maxWidth: '75%', gap: 4 },
  rightBubbleWrap: { maxWidth: '75%', gap: 4, alignItems: 'flex-end' },
  leftBubble: { backgroundColor: Colors.gray[100], borderRadius: BorderRadius.lg, borderBottomLeftRadius: 4, paddingHorizontal: 14, paddingVertical: 10 },
  rightBubble: { backgroundColor: Colors.primary, borderRadius: BorderRadius.lg, borderBottomRightRadius: 4, paddingHorizontal: 14, paddingVertical: 10 },
  leftBubbleText: { fontSize: 15, color: Colors.black },
  rightBubbleText: { fontSize: 15, color: Colors.white },
  timeLeft: { fontSize: 11, color: '#8A6E60', marginLeft: 4 },
  timeRow: { flexDirection: 'row', alignItems: 'center', gap: 2, marginRight: 2 },
  timeRight: { fontSize: 11, color: '#8A6E60' },

  footer: { paddingHorizontal: 12, paddingTop: 8, paddingBottom: 18, backgroundColor: Colors.white },
  quickRow: { gap: 8, paddingBottom: 8 },
  quickChip: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 999,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  quickText: { fontSize: 14, fontWeight: '600', color: Colors.black },
  inputRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  leftActions: { flexDirection: 'row', gap: 2 },
  smallIconBtn: { width: 34, height: 34, alignItems: 'center', justifyContent: 'center' },
  input: {
    flex: 1,
    height: 42,
    borderRadius: 999,
    backgroundColor: Colors.gray[100],
    paddingHorizontal: 14,
    fontSize: 15,
    color: Colors.black,
  },
  sendBtn: { width: 40, height: 40, borderRadius: BorderRadius.full, backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center' },
});

