import './App.css';
import Navbar from './component/Navbar';
import Homepage from './component/Homepage';
import Productlist from './component/Productlist';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetailas from './component/ProductDetailas';
import Footer from './component/Footer';
// rtk
import Productslice from './component/rtk/Productslice';
import Productslicedetails from './component/rtk/Productslicedetails';
import Cart from './component/rtk/Cart';
import { Provider } from 'react-redux';
import { store } from './component/rtk/store';
import Login from './component/user/Login';
import Register from './component/user/Register';
function App() {
  return (
     <>
    
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Homepage /><Productlist />    <Productslice />   </>} />
        <Route path='/product' element={<Productlist /> } />
        <Route path="/product/:productId" element={<ProductDetailas />} />
        <Route path="/productslice/:productId" element={<Productslicedetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
     <Footer />

     </Provider>
     </>
   
  );
}

export default App;
