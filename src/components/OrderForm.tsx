import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addOrder, PizzaOrder } from '@/store/pizzaSlice'
import { RootState } from '@/store/store'
import { TOPPINGS } from '@/lib/constants'

export default function OrderForm() {
  const dispatch = useDispatch()
  const [isSmall, setIsSmall] = useState(false)
  const [toppings, setToppings] = useState<string[]>([])

  const latestOrder = useSelector((state: RootState) => {
    const { orders } = state.pizza
    return orders[orders.length - 1]
  })

  const submitOrder = () => {
    const newOrder: PizzaOrder = {
      id: (latestOrder?.id || 0) + 1,
      isSmall,
      toppings,
    }
    dispatch(addOrder(newOrder))
    setIsSmall(false)
    setToppings([])
  }

  const handleToppingChange = (topping: string) => {
    if (toppings.includes(topping)) {
      const updatedTopping = toppings.filter(top => top !== topping)
      setToppings(updatedTopping)
    } else {
      setToppings([...toppings, topping])
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>Order a Pizza</h2>
      <label className='flex items-center space-x-2 mt-3 cursor-pointer'>
        <input
          type='checkbox'
          className='form-checkbox h-5 w-5 text-blue-500'
          checked={isSmall}
          onChange={() => setIsSmall(!isSmall)}
        />
        <span className='text-gray-700'>Do you want a small size?</span>
      </label>
      <div>Choose topping that you want:</div>
      {
        TOPPINGS.map(topping => (
          <label className='flex items-center space-x-2 cursor-pointer' key={topping}>
            <input
              type='checkbox'
              className='form-checkbox h-5 w-5 text-blue-500'
              checked={toppings.includes(topping)}
              onChange={() => handleToppingChange(topping)}
            />
            <span className='text-gray-700'>{topping}</span>
          </label>
        ))
      }
      <button
        onClick={submitOrder}
        disabled={!toppings.length}
        className='block my-4 bg-blue-500 disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Add new order
      </button>
    </div>
  )
}