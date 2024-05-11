import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, RadioGroup, Radio, ModalFooter, Button } from "@chakra-ui/react"
import { useContext } from "react";
import { GlobalContext } from "../../context/context";


const Transactions = ( { onClose , isOpen }: any ) => {

   const handleFormChange = (e: any) => {
    e.preventDefault();

    setFormData({
        ...formData, [e.target.name]: e.target.value
    });
   }

   

   const { formData, setFormData, value, setValue, handleFormSubmit } =
     useContext(GlobalContext);

     const handleSubmit = (e: any) => {
       e.preventDefault();
       handleFormSubmit(formData);
     };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transactios</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Description : </FormLabel>
              <Input
                required
                onChange={handleFormChange}
                placeholder="Enter Transaction Description..."
                name="description"
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Amount : </FormLabel>
              <Input
               required
                placeholder="Enter Transaction Amount"
                name="amount"
                type="number"
                onChange={handleFormChange}
              />
            </FormControl>

            <RadioGroup value={value} onChange={setValue} mt={5}>
              <Radio
                checked={formData.type === "income"}
                value="Income"
                colorScheme="blue"
                name="type"
                mr={5}
                onChange={handleFormChange}
              >
                Income
              </Radio>

              <Radio
                checked={formData.type === "expense"}
                value="Expense"
                colorScheme="red"
                name="type"
                onChange={handleFormChange}
              >
               Expense
              </Radio>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={4}>
              Cancel
            </Button>
            <Button 
            onClick={onClose}
            type="submit">Add</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}

export default Transactions