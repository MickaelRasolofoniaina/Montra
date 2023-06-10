import { Stack } from "expo-router";

import { fontFamily } from "constants/font";

export interface LayoutProps {
  headerBackgroundColor: string;
}

export const StackLayout: React.FC<LayoutProps> =  ({ headerBackgroundColor }) => {
  return <Stack screenOptions={{
    headerTitleStyle: {
      fontFamily: fontFamily.bold,
      fontSize: 18,
      color: "#FFF"
    },
    headerStyle: {
      backgroundColor: headerBackgroundColor,
    },
    headerShadowVisible: false,
    headerBackTitleVisible: false
  }} />;
}

export default StackLayout;