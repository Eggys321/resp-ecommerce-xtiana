import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import SingleProduct from './pages/SingleProduct';


function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/SingleProduct/:id' element={<SingleProduct/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
