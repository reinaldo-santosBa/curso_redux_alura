import { configureStore } from '@reduxjs/toolkit'
import { categorySlice } from './reducers/categoryReducers'
import { itemsSlice } from './reducers/itemsReducers'
import { cartSlice } from './reducers/cartReducers'
import { searchSlice } from './reducers/searchReducers'
const store = configureStore({
    reducer: {
        category: categorySlice.reducer,
        items: itemsSlice.reducer,
        cart: cartSlice.reducer,
        search: searchSlice.reducer
    }
})

export { store }