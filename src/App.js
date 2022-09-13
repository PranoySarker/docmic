import './App.css';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';
import Service from './Service/Service';

function App() {
  return (
    <div className='bg-base-100'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Service></Service>
    </div>
  );
}

export default App;
