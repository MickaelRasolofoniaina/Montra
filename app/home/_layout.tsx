import { Stack } from "expo-router";

import { TabNavigation } from "shared/components/navigation/TabNavigation";

const HomeLayout: React.FC = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <TabNavigation />
    </>
  );
};

export default HomeLayout;
