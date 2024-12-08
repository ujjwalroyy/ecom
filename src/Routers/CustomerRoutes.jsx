import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../customer/components/Pages/HomePage/HomePage'
import Navigation from '../customer/components/Navigation/Navigation'
import Cart from '../customer/components/Cart/Cart';
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import OrderDetails from '../customer/components/Order/OrderDetails';
import Order from '../customer/components/Order/Order'
import PaymentSuccess from '../customer/Payment/PaymentSuccess';

const CustomerRoutes = () => {
  return (
    <div>
        <div>
        <Navigation/>
        </div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>} />
        <Route path='/product/:productId' element={<ProductDetails/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/account/order' element={<Order/>} />
        <Route path='/account/order/:orderId' element={<OrderDetails/>} />
        <Route path='/payment/:orderId' element={<PaymentSuccess/>} />

      </Routes>
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default CustomerRoutes
