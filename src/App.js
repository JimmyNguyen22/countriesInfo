import { useContext } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { ThemeContext } from "./components/ThemeContext/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CountryDetail from "./components/MainContent/CountryDetail/CountryDetail";
import Footer from "./components/Footer/Footer";

function App() {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={themeContext.theme} id="App">
      <BrowserRouter>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" element={<MainContent></MainContent>}></Route>{" "}
            <Route
              path="/region/:regionName"
              element={<MainContent></MainContent>}
            ></Route>
            <Route
              path="/country/:countryName"
              element={<CountryDetail></CountryDetail>}
            ></Route>
            <Route
              path="/search/:name"
              element={<MainContent></MainContent>}
            ></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
