import React from "react";
import { Text } from "@chakra-ui/react";

const PriceCalculator = ({ quantity, region, pricePerUnit }) => {
  const totalPrice = quantity * pricePerUnit;

  return (
    <Text fontSize="lg" fontWeight="bold" marginTop={2}>
      Total Price: ${totalPrice.toFixed(2)}
    </Text>
  );
};

export default PriceCalculator;
