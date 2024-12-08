import { api } from "../../../config/apiConfig"
import { ADD_ITEM_TO_CART_FALIURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FALIURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

export const getCart=()=> async (dispatch)=>{
    dispatch({type:GET_CART_REQUEST})
    try {
        const {data} = await api.get(`/api/cart/`)
        dispatch({type:GET_CART_SUCCESS, payload:data})
        console.log("cart ", data);
    } catch (error) {
        dispatch({type:GET_CART_FALIURE, payload:error.message})
    }
}

export const addItemToCart=(reqData)=> async(dispatch)=>{
    dispatch({type:ADD_ITEM_TO_CART_REQUEST})
    try {
        const {data} = await api.put(`/api/cart/addItem`, reqData)
        dispatch({type:ADD_ITEM_TO_CART_SUCCESS, payload:data})
        console.log("data ",data);
    } catch (error) {
        dispatch({type:ADD_ITEM_TO_CART_FALIURE, payload:error.message})
    }
}

export const removeCartItem=(cartItemId)=>async(dispatch)=>{
    dispatch({type:REMOVE_CART_ITEM_REQUEST})
    try {
        const {data} = await api.delete(`/api/cartItems/${cartItemId}`)
        dispatch({type:ADD_ITEM_TO_CART_SUCCESS, payload:cartItemId})
    } catch (error) {
        dispatch({type:ADD_ITEM_TO_CART_FALIURE, payload:error.message})
    }
}

export const updateCartItem=(cartItemId)=>async(dispatch)=>{
    dispatch({type:UPDATE_CART_ITEM_REQUEST})
    try {
        const {data} =await api.put(`/api/cartItems/${cartItemId}`)
        dispatch({type:UPDATE_CART_ITEM_SUCCESS, payload:cartItemId})
        console.log("cartItemId ", data);
    } catch (error) {
        dispatch({type:UPDATE_CART_ITEM_FAILURE, payload:error.message})
    }
}