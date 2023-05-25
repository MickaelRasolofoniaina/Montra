import React from "react";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { black, purple100 } from "constants/Color";

import { Screen } from "shared/components/container/Screen";
import { HeaderContainer } from "shared/components/container/Container";
import { ButtonIcon, SimpleButton } from "shared/components/form/Button";

import { ReportButton } from "components/transaction/ReportButton";

export const TransactionList: React.FC = () => {
  return (
    <Screen bgColor="#FFF" statusBarTheme="dark">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <HeaderContainer>
        <SimpleButton
          label="Month"
          startIcon={
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color={purple100}
            />
          }
          onPress={() => {}}
        />
        <ButtonIcon
          icon={<Ionicons name="filter" size={30} color={black} />}
          onPress={() => {}}
        />
      </HeaderContainer>
      <ReportButton onPress={() => {}} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default TransactionList;
