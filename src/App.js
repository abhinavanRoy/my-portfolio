/* Styles */
import "./App.css";
/* Modules */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* Pages */
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import ContactMe from "./pages/ContactMe.js";
import Footer from "./components/Footer.js";
import { ThemeProvider } from "./lib/context/ThemeContext.js";

/* Root */
export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="fixed left-0 top-0 flex h-full w-full flex-col items-center gap-5 bg-cream text-deep-brown transition-colors duration-300 dark:bg-dark-bg dark:text-dark-text">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
