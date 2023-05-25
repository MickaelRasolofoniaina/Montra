import { Stack } from "expo-router";

import { fontFamily } from "constants/Font";

export interface LayoutProps {
  headerBackgroundColor: string;
}

export const Layout: React.FC<LayoutProps> =  ({ headerBackgroundColor }) => {
  return <Stack screenOptions={{
    headerTitleStyle: {
      fontFamily: fontFamily.bold,
      fontSize: 18,
      color: "#FFF"
    },
    headerStyle: {
      backgroundColor: headerBackgroundColor,
    },
    headerShadowVisible: false
  }} />;
}

export default Layout;