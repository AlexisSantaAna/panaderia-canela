//forma tradicional de usar redux, ahora hay un "redux toolkit"
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { categoryReducer, productsReducer, cartReducer, ordersReducer } from "./reducers";

const rootReducer = combineReducers({
    products: productsReducer,
    category: categoryReducer,
    cart: cartReducer,
    orders: ordersReducer
})

//estoy importando, combinando y exportando los reducers en un solo grupo 
// (rootReducer) que es nuestro Store
// el store recibe varios parámetros
//el 1º los reductores, el 2º los objetos de configuracion
//el middleware que nosotros instalamos es thunk
export default createStore(rootReducer, applyMiddleware(thunk))