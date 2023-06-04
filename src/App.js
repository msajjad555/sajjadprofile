import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";

import "./App.css";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Toggle from "./components/Toggle/Toggle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Specials from "./components/Special/Specials";
function App() {

  return (
  <>
<div className="container-fluid">
<div className="row">
<div className="col-lg-12">



      <Navbar />
      <Intro/>
      <Specials/>
      <Services/>
     
      <Experience/>
      {/* <Works/> */}
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      {/* <Toggle/> */}
      </div>
      </div>
      </div>
      </>
  );
}

export default App;
