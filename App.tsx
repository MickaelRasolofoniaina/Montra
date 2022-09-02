import { useEffect, useCallback } from 'react'; 
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { Promo } from 'modules/onboarding/screens/Promo';
import { SafeArea } from 'modules/shared/components/container/SafeArea';

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
    <SafeArea onLayout={onLayoutRootView}>
      <Promo/>
    </SafeArea>
  );
}

