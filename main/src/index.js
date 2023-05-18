import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import productsReducer, { productsFetch } from './features/productSlice'
import cartReducer, { getTotal } from './features/cartSlice'
import userReducer from './features/userSlice'
import { productsApi } from './features/productApi'
const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        user: userReducer,
        [productsApi.reducerPath]: productsApi.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
})
store.dispatch(productsFetch())
store.dispatch((getTotal))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'))
