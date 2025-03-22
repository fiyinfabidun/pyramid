
import './App.css'
import { useEffect , useState} from 'react';

import {Route, Routes, BrowserRouter, useLocation} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/pages/Home'
import SvgComponent from './components/Loader';

import AOS from "aos";
import "aos/dist/aos.css";


function App() {

  useEffect(() => {
    AOS.init({ duration: 2000,
       once: false,
       offset:150,
       });
  }, []);


  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 5000 );
  }, [])

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };


  return (
    <>

      <div className="app">
        {loading ? 
        <div className=' h-screen flex justify-center items-center'>
                  <SvgComponent className='scalers'/>
        </div>
 :        <BrowserRouter>
        <ScrollToTop /> 
       <Navbar/>
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
        </Routes> 
        <Footer/>
       </BrowserRouter>
        }

      </div>

    </>
  )
}

export default App
