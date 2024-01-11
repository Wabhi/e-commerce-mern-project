import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import ShopCart from './Pages/ShopCart';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory />} />
          <Route path="/women" element={<ShopCategory />} />
          <Route path="/kids" element={<ShopCategory />} />
          <Route path="/" element={<Shop />} />
          <Route path="/login" element={<LoginSignup/>} />
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/shopping-cart" element={<ShopCart/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
