import { BrowserRouter } from "react-router-dom";
import RouterIndex from "./app/core/router/RouterIndex";
import HeaderGlobal from "./app/shared/components/HeaderGlobal";
import store from "./app/core/store/store";
import "./App.css";
import { Provider } from "react-redux";
import React from "react";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HeaderGlobal />
        <RouterIndex />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
