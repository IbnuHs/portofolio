import HomePage from "./Pages/HomePage";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
