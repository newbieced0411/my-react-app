import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import ChangingBackgroundColor from "./pages/ChangingBackgroudColor";
import InputsCounter from "./pages/InputsCounter";
import Error404 from "./pages/Error404";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route index element={<ChangingBackgroundColor />} />{" "}
          {/** this is homepage */}
          <Route
            path="/background-color"
            element={<ChangingBackgroundColor />}
          />
          <Route path="/letter-counter" element={<InputsCounter />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
