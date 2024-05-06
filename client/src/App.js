import "./App.css";
import MenuTop from "./components/MenuTop";
import Main from "./pages/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuTop />
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
