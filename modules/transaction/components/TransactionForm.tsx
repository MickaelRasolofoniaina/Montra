import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { Theme, white } from "constants/Color";

import { normalizeMeasure } from "utils/Style";

import { CATEGORIES_INPUT } from "models/transaction.model";

import { InputValue } from "definitions/type";

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
import { StickyFooter } from "modules/shared/components/container/StickyFooter";
import { ScrollView } from "modules/shared/components/container/ScrollView";

export const TransactionForm: React.FC = () => {
  const [amount, setAmount] = useState("0");
  const [repeat, setRepeat] = useState(false);
  const [category, setCategory] = useState<InputValue>(null);

  const onAmountChange = (amount: string) => {
    setAmount(amount);
  };

  const onAttachementUploaded = (attachmentUri: string) => {};

  const onRepeatChange = (repeat: boolean) => {
    setRepeat(repeat);
  };

  const validate = () => {};

  return (
    <>
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
        <SpaceContent style={{ flex: 1 }}>
          <ScrollView>
            <SelectInput
              label="Category"
              items={CATEGORIES_INPUT}
              onChange={(value: InputValue) => setCategory(value)}
              value={category}
            />
            <TextInput
              value={amount}
              onChange={onAmountChange}
              type="number-pad"
              variant={TextInputVariant.Normal}
              placeholder="Description"
            />
            <FileInput onImageSelected={onAttachementUploaded} />
            <Switch
              label="Repeat"
              description="Repeat transaction"
              onValueChange={onRepeatChange}
              value={repeat}
            />
          </ScrollView>
          <StickyFooter collapseBottom>
            <Button theme={Theme.primary} label="Continue" onPress={validate} />
          </StickyFooter>
        </SpaceContent>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: normalizeMeasure(8),
  },
});

export default TransactionForm;
