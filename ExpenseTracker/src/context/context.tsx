import { createContext, useState } from "react";

export const GlobalContext = createContext<any>(null);

export default function GlobalState({
  children,
}: {
  children: React.ReactNode;
}) {

  const [formData, setFormData] = useState({
    type: 'expense',
    amount: 0,
    description: ''
  });

  function handleFormSubmit( currentFormData: any ){
    if(!currentFormData.description || !currentFormData.amount) return;

    setAllTransactions([...transactions, {...currentFormData, id: Date.now()}, ])

    console.log(transactions);
  }

  const [value, setValue] = useState('expense');

  const [totalExpense, setTotalExpense] = useState(0);

  const [totalIncome, setTotalIncome] = useState(0);

  const [transactions, setAllTransactions] = useState<number []> ([]);

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        setTotalExpense,
        totalExpense,
        totalIncome,
        setTotalIncome,
        transactions,
        setAllTransactions,
        value,
        setValue,
        handleFormSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
