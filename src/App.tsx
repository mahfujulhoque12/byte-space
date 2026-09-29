import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import StartTop from "./components/resuable/StartTop";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {!["/signin", "/signup"].includes(location.pathname) && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <StartTop />
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
