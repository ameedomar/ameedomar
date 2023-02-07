import "./App.css";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import Footer from "./PortfolioContainer/Footer/Footer";
import Home from "./PortfolioContainer/Home/Home";
import NavBar from "./PortfolioContainer/NavBar/NavBar";
import Resume from "./PortfolioContainer/Resume/Resume";

//https://www.ahmedmagid.com/#about
function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Resume />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
