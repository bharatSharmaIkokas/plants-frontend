import './App.css';
import Nav from './components/header';
import Signup from './components/signup';
import Login from './components/Login';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import ManageProducts from './components/MangeProducts';
import PrivateComponent from './components/privateComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route path='/' element={<h1>Home</h1>}></Route>
          <Route path='/about-us' element={<h1>About Us</h1>}></Route>
          <Route path='/our-products' element={<Products />}></Route>
          <Route path='/add-products' element={<AddProduct/>}></Route>
          <Route path='/manage-products' element={<ManageProducts/>}></Route>
          <Route path='/contact-us' element={<h1>Contact Us</h1>}></Route>
          <Route element={<PrivateComponent />}>
          
          </Route>


          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
