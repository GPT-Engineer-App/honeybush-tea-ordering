import React from "react";
import { Checkbox, Stack, Text } from "@chakra-ui/react";

const AddOns = ({ rawHoney, setRawHoney, condensedMilk, setCondensedMilk }) => {
  return (
    <Stack direction="column" marginTop={4}>
      <Text fontSize="lg" fontWeight="bold">
        Add-Ons:
      </Text>
      <Checkbox isChecked={rawHoney} onChange={(e) => setRawHoney(e.target.checked)}>
        Raw Honey (+$5/unit)
      </Checkbox>
      <Checkbox isChecked={condensedMilk} onChange={(e) => setCondensedMilk(e.target.checked)}>
        Condensed Milk (+$3/unit)
      </Checkbox>
    </Stack>
  );
};

export default AddOns;
