import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import {useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../state/Cart/Action";
import { store } from "../../state/store";


const Cart = () => {
  const navigate =  useNavigate()
  const {cart} = useSelector((store) => store);
  const dispatch = useDispatch()
  const handleCheckOut = ()=>{
    navigate("/checkout?step=2")
  }
  useEffect(()=>{
    dispatch(getCart())
  },[cart.updateCartItem, cart.deleteCartItem])

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
            {cart.cart?.cartItems.map((item) => <CartItem item={item}/>)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
        <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                    <span>Price</span>
                    <span>₹{cart.cart?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3">
                    <span>Discount</span>
                    <span className="text-green-600">-₹{cart.cart?.totalDiscountedPrice}</span>
                </div>
                <div className="flex justify-between pt-3">
                    <span>Delivery Charge</span>
                    <span className=" text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 font-bold">
                    <span>Total Amount</span>
                    <span className=" text-green-600">{cart.cart?.totalPrice}</span>
                </div>
            </div>

            <Button onClick={handleCheckOut} variant="contained" className="w-full mt-5" sx={{px:"2.5rem", py:".7rem", bgcolor:"#9155fd"}}>
                Checkout
            </Button>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Cart;
