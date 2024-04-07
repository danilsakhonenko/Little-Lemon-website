import "./App.css";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollUp";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
