import React from "react";
import ReactDOM from "react-dom";

import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";

import App from "./app";
import theme from "./theme";
import {createRoot} from 'react-dom/client';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <>
   <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
 
  </>
 
);
