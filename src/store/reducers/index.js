//los reducers son los estados globales dentro de mi store global
//por ej la data que compone el carrito (categorias, productos, etc)
//con este estado global puedo, desde toda la app, lograr que los datos persistan durante la sesión
export { default as categoryReducer } from "./category.reducer";
export { default as productsReducer } from "./products.reducer";
export { default as cartReducer } from "./cart.reducer";
export { default as ordersReducer } from "./orders.reducer";
export { default as authReducer } from "./auth.reducer";