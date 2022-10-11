import { useContext } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { ThemeContext } from "./components/ThemeContext/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
