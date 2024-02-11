import Input from "@/src/components/Form/Input";
import Header from "@/src/components/Header";
import Sidebar from "@/src/components/Sidebar";
import { Box, Button, Divider, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";

export default function CreateUser() {
  return (
    <Box>
      
      <Header />

      <Flex w="100%" maxW={1480} my="6" px={6} mx="auto">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">Create user</Heading>
          <Divider my="6" borderColor="gray.700" />
          <Stack spacing="8">
            <SimpleGrid minChildWidth={240} spacing="8" w="100%">
              <Input name="name" label="Full name" />
              <Input name="email" label="E-mail" type="email" />
            </SimpleGrid>
            <SimpleGrid minChildWidth={240} spacing="8" w="100%">
              <Input name="password" label="Password" type="password" />
              <Input name="password_confirmation" label="Password confirmation" type="password" />
            </SimpleGrid>
          </Stack>

          <Flex mt="8" justify="flex-end" gap="4">
            <Button colorScheme="whiteAlpha">Cancel</Button>
            <Button colorScheme="pink">Save</Button>
          </Flex>

        </Box>
      </Flex>
    </Box>
  )
}