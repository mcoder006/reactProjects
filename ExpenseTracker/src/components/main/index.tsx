import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react"
import Summary from "../Summary/Summary";
import ExpenseView from "../expense view/ExpenseView";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/context";


const Main = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const {
      setTotalExpense,
      totalExpense,
      totalIncome,
      setTotalIncome,
      transactions,
    } = useContext(GlobalContext);


    useEffect(() => {
      let income = 0;

      let expense = 0;

      transactions.forEach((item: any) => {
        item.type === 'income' ? income = income + parseFloat(item.amount) : expense = expense + parseFloat(item.amount);
      });

      setTotalExpense(expense);
      setTotalIncome(income);

    }, [transactions])

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex textAlign={"center"} justifyContent={"space-between"} mt={12}>
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex textAlign={"center"}>
          <Button onClick={onOpen} bg={"blue.500"} color={"black"} ml={4}>
            Add Transactions
          </Button>
        </Flex>
      </Flex>
      <Summary
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        isOpen={isOpen}
        onClose={onClose}
      />

      <Flex
        w={"full"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
        alignItems={"flex-start"}
      >
        <ExpenseView
          data={transactions.filter((item : any) => item.type === "expense")}
          type={'expense'}
        />
        <ExpenseView
          data={transactions.filter((item: any) => item.type === "income")}
          type={'income'}
        />
      </Flex>
    </Flex>
  );
}

export default Main