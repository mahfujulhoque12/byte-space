import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Signin from "./pages/Signin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
