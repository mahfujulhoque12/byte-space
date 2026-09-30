import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import StartTop from "./components/resuable/StartTop";
import NotFound from "./pages/NotFound";
import Navbar from "./components/navbar/Navbar";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {!["/signin", "/signup"].includes(location.pathname) && (
        <div className="sticky top-0 left-0 z-[9999] w-full">
          <Navbar />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
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
