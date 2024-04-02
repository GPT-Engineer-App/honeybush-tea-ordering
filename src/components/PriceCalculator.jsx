import React from "react";
import { Text } from "@chakra-ui/react";

const PriceCalculator = ({ quantity, pricePerUnit }) => {
  const totalPrice = quantity * pricePerUnit;

  return (
    <Text fontSize="lg" fontWeight="bold" marginTop={2}>
      Total Price: {totalPrice.toFixed(2)} ZAR/EUR
    </Text>
  );
};

export default PriceCalculator;
