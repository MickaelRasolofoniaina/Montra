import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { red, Theme, white } from "constants/Color";

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
import { Switch } from "modules/shared/components/form/Switch";
import { Button } from "modules/shared/components/form/Button";

export const ManageExpense: React.FC = () => {
  const [amount, setAmount] = useState("0");
  const [repeat, setRepeat] = useState(false);

  const onAmountChange = (amount: string) => {
    setAmount(amount);
  };

  const onAttachementUploaded = (attachmentUri: string) => {

  }

  const onRepeatChange = (repeat: boolean) => {
    setRepeat(repeat);
  }

  const validate = () => {
    
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
          <Switch label="Repeat" description="Repeat transaction" onValueChange={onRepeatChange} value={repeat} />
          <Button theme={Theme.primary} label="Continue" onPress={validate} />
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
