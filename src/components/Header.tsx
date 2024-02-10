import { Flex, Icon, Input, Text } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export default function Header() {

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text as="span" color="pink.500">.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        maxWidth={400}
        ml="6"
        px="8"
        py="4"
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Search in the application"
          _placeholder={{ color: "gray.400" }}
          px="4"
          mr="4"
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
    </Flex>
  );
}