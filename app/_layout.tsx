import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import Layout from "components/container/layout";

const AppLayout: React.FC = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../src/assets/fonts/inter/Inter-Black.ttf"),
    "Inter-Medium": require("../src/assets/fonts/inter/Inter-Medium.ttf"),
    "Inter-Regular": require("../src/assets/fonts/inter/Inter-Regular.ttf"),
    "Inter-Bold": require("../src/assets/fonts/inter/Inter-Bold.ttf"),
    "Inter-SemiBold": require("../src/assets/fonts/inter/Inter-SemiBold.ttf"),
  });

  if(!fontsLoaded) {
    return <SplashScreen />;
  }
  
  return (
    <Layout headerBackgroundColor="#FFF" />
  );
};

export default AppLayout;
