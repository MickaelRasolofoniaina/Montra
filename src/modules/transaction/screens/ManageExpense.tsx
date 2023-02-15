import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { red, white } from "constants/Color";

import { normalizeMeasure } from "utils/Style";

import { Screen } from "modules/shared/components/container/Screen";
import {
  Typography,
  TypoVariant,
} from "modules/shared/components/typo/Typography";
import {
  TextInput,
  TextInputVariant,
} from "modules/shared/components/form/TextInput";
import { Card } from "modules/shared/components/card/Card";
import { SpaceContent } from "modules/shared/components/container/SpaceContent";
import { SelectInput } from "modules/shared/components/form/SelectInput";
import { FileInput } from "modules/shared/components/form/FileInput";

export const ManageExpense: React.FC = () => {
  const [amount, setAmount] = useState("0");

  const onAmountChange = (amount: string) => {
    setAmount(amount);
  };

  const onAttachementUploaded = (attachmentUri: string) => {

  }

  return (
    <Screen
      style={styles.container}
      bgColor={red}
      statusBarTheme="light"
      collapseEdge
    >
      <SpaceContent>
        <Typography
          variant={TypoVariant.title3}
          color={white}
          text="How much?"
          marginBottom={2}
        />
        <TextInput
          value={amount}
          onChange={onAmountChange}
          type="number-pad"
          variant={TextInputVariant.Large}
          placeholder=""
        />
      </SpaceContent>
      <Card>
        <SpaceContent>
          <SelectInput />
          <TextInput
            value={amount}
            onChange={onAmountChange}
            type="number-pad"
            variant={TextInputVariant.Normal}
            placeholder="Description"
          />
          <FileInput onImageSelected={onAttachementUploaded} />
        </SpaceContent>
      </Card>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: normalizeMeasure(8),
  },
});

export default ManageExpense;
