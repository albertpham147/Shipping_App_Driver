import { Image } from 'expo-image';
import { Platform, Pressable, StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link, useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View>
        <Pressable onPress={() => {router.push('/driverLogin')}}>
          <Text style ={{color:'black'}}>login</Text>
        </Pressable>
        <Pressable onPress={() => {router.push('/registers/driverRegisterStep1')}}>
          <Text style ={{color:'black'}}>register step 1</Text>
        </Pressable>
        <Pressable onPress={() => {router.push('/registers/driverRegisterStep2')}}>
          <Text style ={{color:'black'}}>register step 2</Text>
        </Pressable>
        <Pressable onPress={() => {router.push('/registers/driverRegisterStep3')}}>
          <Text style ={{color:'black'}}>register step 3</Text>
        </Pressable>
        <Pressable onPress={() => {router.push('/registers/driverRegisterStep4')}}>
          <Text style ={{color:'black'}}>register step 4</Text>
        </Pressable>
        <Pressable onPress={() => {router.push('/profiles/driverProfile')}}>
          <Text style ={{color:'black'}}>profile</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
