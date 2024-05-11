import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import theme from "./themes";
import GlobalState from "./context/context";


const App = () => {
  return (
    <GlobalState>
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </GlobalState>
  );
};

export default App;
