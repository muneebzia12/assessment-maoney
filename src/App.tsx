import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Provider } from "react-redux";
import { store } from "./lib/store";

function App() {
  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
}

export default App;
