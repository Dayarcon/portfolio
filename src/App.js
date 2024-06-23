import React from 'react';
import Header from './Header';
import Content from './Content';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import 'boxicons/css/boxicons.min.css';
import 'remixicon/fonts/remixicon.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './style.css';
function App(){
  React.useEffect(()=>{
AOS.init({
  offset: 300,
  duration: 1400
});
  }, []);
  return(
    <>
    <Header />
    <Content />
    <About />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  );
}
export default App;