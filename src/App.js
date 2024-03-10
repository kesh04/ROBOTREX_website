import About from "./components/About";
import Challe from "./components/Challe";
import Conatct from "./components/Conatct";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
   <Navbar />
   <Hero />
   <About/>
   <Challe />
   <Register/>
   <Conatct />
  <Footer/>
 
    </div>
  );
}

export default App;
