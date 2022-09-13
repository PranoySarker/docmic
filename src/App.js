import './App.css';
import Banner from './Banner/Banner';
import Experience from './Experience/Experience';
import Faq from './Faq/Faq';
import Feature from './Feature/Feature';
import Navbar from './Navbar/Navbar';
import Service from './Service/Service';

function App() {
  return (
    <div className='bg-base-100'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Service></Service>
      <Experience></Experience>
      <Feature></Feature>
      <Faq></Faq>
    </div>
  );
}

export default App;
