import React, { useState } from "react";
import { Box, Heading, Text, Image, Button, Stack, Input, Select, Flex, Spacer, Link, useToast } from "@chakra-ui/react";
import { FaShoppingCart, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const [quantity, setQuantity] = useState(1);
  const [region, setRegion] = useState("national");
  const toast = useToast();

  const handleOrder = () => {
    // TODO: Implement order submission logic
    toast({
      title: "Order Submitted",
      description: `You have pre-ordered ${quantity} units of honeybush tea for ${region} delivery.`,
      status: "success",
      duration: 5000,
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
          <Text fontSize="xl">Discover the delightful taste and health benefits of our premium honeybush tea. Sourced from the finest regions, our tea offers a naturally sweet and soothing experience.</Text>
        </Box>

        <Box>
          <Heading as="h3" size="lg">
            Pre-Order Now
          </Heading>
          <Text>Show your interest in our honeybush tea by pre-ordering now. Your pre-order helps us gauge demand and prepare for full-scale production.</Text>
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
          <Text fontSize="sm" color="gray.500" marginTop={2}>
            Pricing: National - $10/unit | International - $15/unit
          </Text>
        </Box>

        <Box id="about">
          <Heading as="h3" size="lg">
            About Us
          </Heading>
          <Text>At Creec, we are passionate about delivering the finest honeybush tea to businesses worldwide. With our commitment to quality and sustainability, we strive to provide an exceptional tea experience for your customers.</Text>
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
