import "./App.css";
import Home from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninPage from "./pages/signin";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
