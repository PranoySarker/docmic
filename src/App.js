import './App.css';
import Banner from './Banner/Banner';
import Experience from './Experience/Experience';
import Faq from './Faq/Faq';
import Feature from './Feature/Feature';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Service from './Service/Service';
import Testimonial from './Testimonial/Testimonial';

function App() {
  return (
    <div>
      <div className='bg-sky-50'>
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <div className='bg-gradient-to-r from-sky-50 to-fuchsia-100'>
        <Service></Service>
        <Experience></Experience>
        <Feature></Feature>
        <Faq></Faq>
        <Testimonial></Testimonial>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
