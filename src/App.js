import './App.css';
import AdminRoutes from './Routers/AdminRoutes';
// import Cart from './customer/components/Cart/Cart';
// import Checkout from './customer/components/Checkout/Checkout';
// import Footer from './customer/components/Footer/Footer';
// import Navigation from './customer/components/Navigation/Navigation';
// import HomePage from './customer/components/Pages/HomePage/HomePage';
// import Product from './customer/components/Product/Product';
// import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import CustomerRoutes from './Routers/CustomerRoutes'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="">
      <Routes>
        <Route  path= '/*' element={<CustomerRoutes/>} />
        <Route path='/admin/*' element={<AdminRoutes/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
