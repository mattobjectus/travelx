import Heros from "./components/Heros";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { Tours } from "./components/Tours";

function App() {
  return (
    <>
      <NavBar />
      <Heros />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
