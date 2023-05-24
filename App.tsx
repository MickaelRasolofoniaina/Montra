import { useEffect, useCallback } from 'react'; 
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';

import { TabNavigation } from 'shared/components/navigation/TabNavigation';

export default function App() {
  
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/inter/Inter-Black.ttf'),
    'Inter-Medium': require('./assets/fonts/inter/Inter-Medium.ttf'),
    'Inter-Regular': require('./assets/fonts/inter/Inter-Regular.ttf'),
    'Inter-Bold': require('./assets/fonts/inter/Inter-Bold.ttf'),
    'Inter-SemiBold': require('./assets/fonts/inter/Inter-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{flex: 1}}>
      <TabNavigation />
    </View>
  );
}

