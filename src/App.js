import Intro from "./Components/Intro/intro";
import Navbar from "./Components/NavBar/navbar";
import Projects from "./Components/WhatIDo/whatIDo";
import HowIWork from "./Components/HowIWork/howIWork";
import WhoIAm from "./Components/whoIAm/whoIAm";
import Footer from "./Components/Footer/footer";
import ResumeButton from "./Components/ResumeButton/resumeButton";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <WhoIAm/>
      <Projects/>
      <HowIWork/>
      <ResumeButton/>
      <Footer/>
    </div>
  );
}

export default App;
