import React from "react";
import Header from "./components/Header"; // Import the Header component
import About from "./components/About"; // Import the About component
import Projects from "./components/Projects"; // Import the Projects component
import Skills from "./components/Skills"; // Import the Skills component
import HireMe from "./components/HireMe"; // Import the HireMe component
import Contact from "./components/Contact"; // Import the Contact component
import Footer from "./components/Footer"; // Import the Footer component

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About /> {/* Include the About component here */}
        <Projects />
        <Skills />
        <HireMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
