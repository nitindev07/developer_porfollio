import "./App.css";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[#0D0D0D] w-full max-w-[1440px] mx-auto h-full">
      <Navbar />
      <Home/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
