import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />

        <Stack.Screen name="driverLogin" options={{ headerShown: false }} />
        <Stack.Screen name="driverHome" options={{ headerShown: false }} />
        <Stack.Screen name="driverOrderCompleted" options={{ headerShown: false }} />
        <Stack.Screen name="driverChat" options={{ headerShown: false }} />
        <Stack.Screen name="driverHistory" options={{ headerShown: false }} />
        <Stack.Screen name="driverNotifications" options={{ headerShown: false }} />
        <Stack.Screen name="customerLogin" options={{ headerShown: false }} />
        <Stack.Screen name="customerRegister" options={{ headerShown: false }} />

        <Stack.Screen name="registers/driverRegisterStep1" options={{ headerShown: false }} />
        <Stack.Screen name="registers/driverRegisterStep2" options={{ headerShown: false }} />
        <Stack.Screen name="registers/driverRegisterStep3" options={{ headerShown: false }} />
        <Stack.Screen name="registers/driverRegisterStep4" options={{ headerShown: false }} />

        <Stack.Screen name="profiles/driverProfile" options={{ headerShown: false }} />
        <Stack.Screen name="profiles/driverProfileDetails" options={{ headerShown: false }} />
        <Stack.Screen name="profiles/driverProfileEdit" options={{ headerShown: false }} />
        <Stack.Screen name="profiles/customerProfile" options={{ headerShown: false }} />
        <Stack.Screen name="notifications" options={{ headerShown: false }} />
        <Stack.Screen name="rideSearch" options={{ headerShown: false }} />
        <Stack.Screen name="rideDestination" options={{ headerShown: false }} />
        <Stack.Screen name="rideVehicle" options={{ headerShown: false }} />
        <Stack.Screen name="rideSearching" options={{ headerShown: false }} />
        <Stack.Screen name="rideFound" options={{ headerShown: false }} />
        <Stack.Screen name="rideOnTrip" options={{ headerShown: false }} />
        <Stack.Screen name="rideTripNextTest" options={{ headerShown: false }} />
        <Stack.Screen name="rideReceipt" options={{ headerShown: false }} />
        

      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
