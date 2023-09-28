import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PizzaOrder = {
  id: number,
  toppings: string[],
  isSmall: boolean,
}
type InitialState = {
  orders: PizzaOrder[]
}

const initialState: InitialState = {
  orders: []
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<PizzaOrder>) => {
      state.orders = [...state.orders, action.payload]
    },
    removeOrder: (state, action: PayloadAction<number>) => {
      const removedOrderIdx = state.orders.findIndex(order => order.id === action.payload)
      state.orders.splice(removedOrderIdx, 1)
    }
  },
})

export const { addOrder, removeOrder } = pizzaSlice.actions

export default pizzaSlice.reducer