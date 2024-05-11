import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import Transactions from "../Transactions/Transactions"
import ChartSummary from "../charts/Charts"


const Summary = ( { onClose, isOpen, totalExpense, totalIncome } : any ) => {
  return (
    <Box
    border={['1px solid gray.100']}
    overflow={'hidden'}
    borderRadius={10}
    background={'white'}
    display={'flex'}
    p={6}
    >
        <Flex
        w={'full'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row'
        }}
        >
            <Flex 
            alignItems={'center'}
            justifyContent={'space-evenly'}
            flex={1}
            ml={-20}
            mt={4}
            mr={2}
            w={'full'}
            flexDirection={'column'}>
                <Heading size={'md'} mb={4} color={'gray.600'}>
                    Balance is ${totalIncome - totalExpense}
                </Heading>

                <Flex 
                alignItems={'center'}
                bg={'gray.50'}
                w={'full'}
                h={100}
                border={'1px solid gray.100'}
                justifyContent={'space-evenly'}>
                    <Flex flexDirection={'column'}>
                        <Heading color={'gray.700'}>
                            $ {totalIncome} 
                        </Heading>
                        <Text color={'gray.600'}>Total Expense </Text>
                    </Flex>
                </Flex>
                <Flex 
                alignItems={'center'}
                bg={'gray.50'}
                w={'full'}
                h={100}
                border={'1px solid gray.100'}
                justifyContent={'space-evenly'}>
                    <Flex flexDirection={'column'}>
                        <Heading color={'gray.700'}>
                            $ {totalExpense} 
                        </Heading>
                        <Text color={'gray.600'}>Total Income </Text>
                    </Flex>
                </Flex>

            </Flex>
            <Box 
            h={'300px'}
            justifyContent={'center'}
            display={'flex'}
            flex={1}
            mt={10}
            ml={-90} 
            mr={5} 
            w={'300px'}>
                <Heading>
                    <ChartSummary expense={totalExpense} income={totalIncome} />
                </Heading>
            </Box>
        </Flex>
        <Transactions onClose={onClose} isOpen={isOpen} />
    </Box>
  )
}

export default Summary