import React from "react";
import { Text } from "@chakra-ui/react";

const PriceCalculator = ({ quantity, region, pricePerUnit, rawHoney, condensedMilk }) => {
  const basePrice = quantity * pricePerUnit;
  const addOnPrice = quantity * (rawHoney ? 5 : 0) + quantity * (condensedMilk ? 3 : 0);
  const totalPrice = basePrice + addOnPrice;

  return (
    <Text fontSize="lg" fontWeight="bold" marginTop={2}>
      Total Price: ${totalPrice.toFixed(2)}
    </Text>
  );
};

export default PriceCalculator;
