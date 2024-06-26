import React, { useState } from "react";
import { Box, Heading, Text, Image, Button, Stack, Input, Select, Flex, Spacer, Link, useToast } from "@chakra-ui/react";
import { FaShoppingCart, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import PriceCalculator from "../components/PriceCalculator";
import AddOns from "../components/AddOns";

const Index = () => {
  const [quantity, setQuantity] = useState(1);
  const [region, setRegion] = useState("national");
  const [rawHoney, setRawHoney] = useState(false);
  const [condensedMilk, setCondensedMilk] = useState(false);
  const toast = useToast();

  const handleOrder = () => {
    toast({
      title: "Pre-Order Submitted",
      description: (
        <>
          <Text>
            You have pre-ordered {quantity} units of honeybush tea for {region} delivery
            {rawHoney && " with raw honey"}
            {condensedMilk && " and condensed milk"}.
          </Text>
          <Text mt={4}>Please make a 50% deposit to secure your order:</Text>
          <Text fontWeight="bold">Bank: Creec International Bank</Text>
          <Text fontWeight="bold">Account Number: 1234 5678 9012 3456</Text>
          <Text fontWeight="bold">Routing Number: 123456789</Text>
          <Text mt={4}>Once your deposit is received, we will confirm your pre-order and provide an estimated delivery date.</Text>
        </>
      ),
      status: "success",
      duration: null,
      isClosable: true,
    });
  };

  return (
    <Box maxWidth="960px" margin="auto" padding={8}>
      <Flex align="center" marginBottom={8}>
        <Heading as="h1" size="xl">
          Creec
        </Heading>
        <Spacer />
        <Link href="#about">
          <Button leftIcon={<FaInfoCircle />} variant="ghost">
            About Us
          </Button>
        </Link>
        <Link href="#contact">
          <Button leftIcon={<FaEnvelope />} variant="ghost">
            Contact Us
          </Button>
        </Link>
      </Flex>

      <Stack spacing={8}>
        <Box>
          <Image src="https://images.unsplash.com/photo-1523920290228-4f321a939b4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxob25leWJ1c2glMjB0ZWF8ZW58MHx8fHwxNzExOTQ4MDIxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Honeybush Tea" />
          <Heading as="h2" size="xl" marginTop={4}>
            Honeybush Tea
          </Heading>
          <Text fontSize="xl">Indulge in the exquisite taste and remarkable health benefits of our premium honeybush tea. Meticulously sourced from the finest regions, our tea offers a naturally sweet and soothing experience that elevates your well-being. Crafted with utmost care and expertise, each cup is a luxurious escape from the ordinary.</Text>
        </Box>

        <Box>
          <Heading as="h3" size="lg">
            Pre-Order Now
          </Heading>
          <Text>Show your interest in our honeybush tea by pre-ordering now. Your pre-order helps us gauge demand and prepare for full-scale production.</Text>
          <Text mt={4}>Our pre-order process is simple and secure. Just select your desired quantity and delivery region, then click "Pre-Order". You'll receive instructions to make a 50% deposit to our company bank account. Once your deposit is received, we'll confirm your pre-order and keep you updated on the production progress.</Text>
          <Stack direction="row" align="center" marginTop={4}>
            <Input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} width="100px" />
            <Select value={region} onChange={(e) => setRegion(e.target.value)} width="200px">
              <option value="national">National</option>
              <option value="international">International</option>
            </Select>
            <Button leftIcon={<FaShoppingCart />} colorScheme="blue" onClick={handleOrder}>
              Pre-Order
            </Button>
          </Stack>
          <Text fontSize="sm" color="gray.500">
            Pricing: National - $10/unit | International - $15/unit
          </Text>
          <AddOns rawHoney={rawHoney} setRawHoney={setRawHoney} condensedMilk={condensedMilk} setCondensedMilk={setCondensedMilk} />
          <PriceCalculator quantity={quantity} region={region} pricePerUnit={region === "national" ? 10 : 15} rawHoney={rawHoney} condensedMilk={condensedMilk} />
        </Box>

        <Box id="about">
          <Heading as="h3" size="lg">
            About Us
          </Heading>
          <Text>At Creec, we are passionate about delivering the finest honeybush tea to businesses worldwide. With our commitment to quality and sustainability, we strive to provide an exceptional tea experience for your customers.</Text>
          <Box marginTop={4}>
            <Heading as="h4" size="md">
              Our Sourcing and Production Process
            </Heading>
            <Text>We carefully select the best honeybush leaves from trusted farmers who share our dedication to sustainable practices. Our state-of-the-art production facility ensures that each batch of tea is processed with precision and care, preserving the natural goodness and flavor of the honeybush plant.</Text>
          </Box>
          <Box marginTop={4}>
            <Heading as="h4" size="md">
              What Our Customers Say
            </Heading>
            <Text fontStyle="italic">"Creec's honeybush tea is simply exquisite. The flavor is unmatched, and I feel great knowing that I'm serving a premium, healthy product to my customers." - John D., Cafe Owner</Text>
          </Box>
        </Box>

        <Box id="contact">
          <Heading as="h3" size="lg">
            Contact Us
          </Heading>
          <Text>Have questions or want to learn more about our honeybush tea? Reach out to us at:</Text>
          <Text fontWeight="bold">Email: info@creec.com</Text>
          <Text fontWeight="bold">Phone: +1 (555) 123-4567</Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default Index;
