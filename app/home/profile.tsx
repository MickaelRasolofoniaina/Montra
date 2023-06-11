import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Stack } from "expo-router";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import { black100, grey, grey100, primaryColor, red, red20, secondaryColor } from "constants/color";
import { fontFamily } from "constants/font";

import { normalizeMeasure } from "utils/style";

import { Screen } from "components/container/screen";
import { Avatar } from "components/profile/avatar";
import { Card, CardType } from "components/card/card";
import { SettingItem } from "components/profile/settingItem";
import { BadgeIcon } from "components/card/badge";

export const Home: React.FC = ({}) => {
  return (
    <Screen statusBarTheme="dark" bgColor={grey100}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Card type={CardType.Full} style={styles.profile}>
          <Avatar
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgXKfFxgpqBoP6xhM38YNZihAVYGlbGzjUcQ&usqp=CAU",
            }}
          />
          <View style={styles.userInfo}>
            <Text style={styles.label}>Username</Text>
            <Text style={styles.name}>Mickael</Text>
          </View>
        </Card>
        <Card type={CardType.Full} collapseeEdge>
          <SettingItem
            onPress={() => {}}
            label="Account"
            badge={
              <BadgeIcon
                icon={
                  <MaterialIcons
                    name="account-balance"
                    size={24}
                    color={primaryColor}
                  />
                }
                color={secondaryColor}
              />
            }
          />
          <SettingItem
            onPress={() => {}}
            label="Settings"
            badge={
              <BadgeIcon
                icon={
                  <Ionicons
                    name="settings-sharp"
                    size={24}
                    color={primaryColor}
                  />
                }
                color={secondaryColor}
              />
            }
          />
          <SettingItem
            onPress={() => {}}
            label="Export Data"
            badge={
              <BadgeIcon
                icon={
                  <MaterialIcons
                    name="file-upload"
                    size={24}
                    color={primaryColor}
                  />
                }
                color={secondaryColor}
              />
            }
          />
          <SettingItem
            onPress={() => {}}
            label="Logout"
            badge={
              <BadgeIcon
                icon={
                  <MaterialIcons
                    name="logout"
                    size={24}
                    color={red}
                  />
                }
                color={red20}
              />
            }
          />
        </Card>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: normalizeMeasure(5),
  },
  userInfo: {
    marginLeft: normalizeMeasure(2),
  },
  label: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    lineHeight: 16,
    color: grey,
    marginBottom: normalizeMeasure(1),
  },
  name: {
    fontFamily: fontFamily.semiBold,
    fontSize: 24,
    lineHeight: 29,
    color: black100,
  },
});

export default Home;
