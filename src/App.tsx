/* eslint-disable jsx-a11y/anchor-is-valid */
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import NotFound from "./components/404";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Reviews />
              <About />
              <Menu />
              <Contact />
            </>
          }
        />
        <Route
          path="/menu"
          element={
            <>
              <div className="mb-3"></div>
              <Menu />
              <Contact />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <div className="mb-3"></div>
              <Reviews />
              <About />
              <Contact />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <div className="mb-3"></div>
              <NotFound />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
