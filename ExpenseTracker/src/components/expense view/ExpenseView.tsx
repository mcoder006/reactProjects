import { Box, Flex, Heading, Text } from "@chakra-ui/react"


const ExpenseView = ({ type, data }: any) => {
  return (
    <Box
      flex={1}
      w={"full"}
      mt={10}
      p={5}
      pb={4}
      border={"1px solid gray.400"}
      borderRadius={12}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading size={"md"} color={"red.700"}>
          {type === "income" ? "income" : "Expense"}
        </Heading>
      </Flex>

      {data.map((item: any) => (
        <Flex
          bg={type === "expense" ? "red.50" : "blue.50"}
          mt={4}
          justifyContent={"space-between"}
          alignItems={"center"}
          border={"1px solid"}
          p={4}
          borderRadius={8}
          borderColor={type === "expense" ? "red.100" : "blue.100"}
        >
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Text fontWeight={"bold"} color={"gray.700"} ml={3}>
              {item.description}
            </Text>
          </Flex>
          <Text>{item.amount}</Text>
        </Flex>
      ))}
    </Box>
  );
};

export default ExpenseView