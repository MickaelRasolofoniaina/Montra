import React, { useState } from "react";

import { Theme, white } from "constants/color";

import { CATEGORIES_INPUT, TransactionType } from "models/transaction.model";

import { InputValue } from "types/form.type";

import {
  Typography,
  TypoVariant,
} from "components/typo/typography";
import {
  TextInput,
  TextInputVariant,
} from "components/form/textInput";
import { Card } from "components/card/card";
import { SpaceContent } from "components/container/spaceContent";
import { SelectInput } from "components/form/selectInput";
import { FileInput } from "components/form/fileInput";
import { Switch } from "components/form/switch";
import { Button } from "components/form/button";
import { StickyFooter } from "components/container/stickyFooter";
import { ScrollView } from "components/container/scrollView";

export interface TransactionFormProps {
  transactionType?: TransactionType
}

export const TransactionForm: React.FC<TransactionFormProps> = ({ transactionType = TransactionType.In }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [repeat, setRepeat] = useState(false);
  const [category, setCategory] = useState<InputValue>(null);

  const onAmountChange = (amount: string) => {
    setAmount(amount);
  };

  const onDescriptionChange = (description: string) => {
    setDescription(description);
  }

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
          opacity={0.6}
        />
        <TextInput
          value={amount}
          onChange={onAmountChange}
          type="number-pad"
          variant={TextInputVariant.Large}
          placeholder="0"
          placeholderTextColor="#FFF"
        />
      </SpaceContent>
      <Card style={{ flex: 1 }}>
        <SpaceContent style={{ flex: 1 }}>
          <ScrollView>
            <SelectInput
              label="Category"
              items={CATEGORIES_INPUT}
              onChange={(value: InputValue) => setCategory(value)}
              value={category}
            />
            <TextInput
              value={description}
              onChange={onDescriptionChange}
              type="default"
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

export default TransactionForm;
