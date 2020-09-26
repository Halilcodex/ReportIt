import React from "react";
import { CookiesProvider } from "react-cookie";
import RouterMain from "./router";

function App() {
  return (
    <CookiesProvider>
      <RouterMain />
    </CookiesProvider>
  );
}

export default App;
