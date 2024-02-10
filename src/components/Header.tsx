import { Avatar, Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from "react-icons/ri";

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

      <Flex
        align="center"
        marginLeft="auto"
      >
        <HStack
          spacing="6"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box textAlign="right" mr="4">
            <Text>Thiago Gonçalves</Text>
            <Text color="gray.300" fontSize="small">thiagocog2512@gmail.com</Text>
          </Box>
          <Avatar size="md" name="Thiago Gonçalves" src="https://github.com/thiagocog.png"/>
        </Flex>
      </Flex>
    </Flex>
  );
}