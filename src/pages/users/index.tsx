import Header from "@/src/components/Header";
import Pagination from "@/src/components/Pagination";
import Sidebar from "@/src/components/Sidebar";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

export default function UserList() {
  return (
    <Box>

      <Header />

      <Flex w="100%" maxW={1480} my="6" px={6} mx="auto">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Users list</Heading>
            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20"/>}>Create new user</Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>User</Th>
                <Th>Registration date</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Thiago Gonçalves</Text>
                    <Text fontSize="sm" color="gray.300">thiagocog2512@gmail.com</Text>
                  </Box>
                </Td>
                <Td><Text>10 february, 2024</Text></Td>
                <Td><Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}>Edit</Button></Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Thiago Gonçalves</Text>
                    <Text fontSize="sm" color="gray.300">thiagocog2512@gmail.com</Text>
                  </Box>
                </Td>
                <Td><Text>10 february, 2024</Text></Td>
                <Td><Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}>Edit</Button></Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Thiago Gonçalves</Text>
                    <Text fontSize="sm" color="gray.300">thiagocog2512@gmail.com</Text>
                  </Box>
                </Td>
                <Td><Text>10 february, 2024</Text></Td>
                <Td><Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}>Edit</Button></Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />

        </Box>
      </Flex>
    </Box>
  )
}