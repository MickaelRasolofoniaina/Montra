import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";

const AppLayout: React.FC = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/inter/Inter-Black.ttf"),
    "Inter-Medium": require("../assets/fonts/inter/Inter-Medium.ttf"),
    "Inter-Regular": require("../assets/fonts/inter/Inter-Regular.ttf"),
    "Inter-Bold": require("../assets/fonts/inter/Inter-Bold.ttf"),
    "Inter-SemiBold": require("../assets/fonts/inter/Inter-SemiBold.ttf"),
  });

  if(!fontsLoaded) {
    return <SplashScreen />;
  }
  
  return (
    <Stack />
  );
};

export default AppLayout;
