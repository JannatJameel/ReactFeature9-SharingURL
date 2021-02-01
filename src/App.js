import { Route, Switch } from "react-router";
import React, { useState } from "react";
// Styling
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
// Components
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Switch>
        <Route exact path= "/">
          <Home />
        </Route>
        <Route path = "/products/:productSlug">
          <ProductDetail />
        </Route>
        <Route path = "/products">
          <ProductList />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
