import { Stack } from "expo-router";

import { TabNavigation } from "components/navigation/tabNavigation";

const HomeLayout: React.FC = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <TabNavigation />
    </>
  );
};

export default HomeLayout;
