import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        changeCart: (state, { payload }) => {
            const itemFind = state.some(item => item.id === payload.id)
            if (!itemFind) return [
                ...state, {
                    id: payload.id,
                    quantity: 1,
                    price: payload.preco
                }
            ];
            return state.filter(item => item.id !== payload.id)
        },
        addQuantity: (state, { payload }) => {
            return state.map(item => {
                if (item.id === payload.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item
            })
        },
        subQuantity: (state, { payload }) => {
            return state.map(item => {
                if (item.id === payload.id) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item
            })
        },
        resetCart: () => initialState
    }
})

export const { changeCart, returnTotal, subQuantity, addQuantity, resetCart } = cartSlice.actions