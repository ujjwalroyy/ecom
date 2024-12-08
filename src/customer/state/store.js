import { authReducer } from "./Auth/Reducer";
import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {thunk} from 'redux-thunk'
import { withExtraArgument } from 'redux-thunk';
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";

const rootReducers = combineReducers({
    auth:authReducer,
    products: customerProductReducer,
    cart: cartReducer,
    orders: orderReducer
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk,withExtraArgument("👌")))
// // // export default store



// // import { createStore, applyMiddleware, combineReducers } from "redux";
// // import thunk from 'redux-thunk';
// // import { authReducer } from "./Auth/Reducer";

// // const rootReducers = combineReducers({
// //     auth: authReducer
// // });

// // export const store = createStore(rootReducers, applyMiddleware(thunk));
// // // // export default store




// // import { withExtraArgument } from 'redux-thunk';
// // import { createStore, applyMiddleware } from 'redux';
// // import thunk from 'redux-thunk';
// // import { authReducer } from './Auth/Reducer';

// // const store = createStore(authReducer, applyMiddleware(thunk, withExtraArgument));

// // export default store;









// import { createStore, applyMiddleware, combineReducers } from "redux";
// import {thunk} from 'redux-thunk'; // Importing thunk middleware
// import { withExtraArgument } from 'redux-thunk';
// import { authReducer } from "./Auth/Reducer";
// import { customerProductReducer } from "./Product/Reducer";
// import { cartReducer } from "./Cart/Reducer";

// const rootReducers = combineReducers({
//     auth: authReducer,
//     product: customerProductReducer,
//     cart: cartReducer,
// });


// // Applying thunk middleware with extra argument if needed
// export const store = createStore(rootReducers, applyMiddleware(thunk,withExtraArgument("👌")))