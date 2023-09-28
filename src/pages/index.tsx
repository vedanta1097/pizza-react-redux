import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import { addOrder, removeOrder, PizzaOrder } from '@/store/pizzaSlice'

export default function Home() {
  const pizzaOrders = useSelector((state: RootState) => state.pizza.orders)
  const latestOrder = useSelector((state: RootState) => {
    const { orders } = state.pizza
    return orders[orders.length - 1]
  })
  const dispatch = useDispatch()

  const submitOrder = () => {
    const newOrder: PizzaOrder = {
      id: (latestOrder?.id || 0) + 1,
      isSmall: false,
      toppings: ['sausage', 'cheese']
    }
    dispatch(addOrder(newOrder))
  }

  return (
    <>
      <div className='container mx-auto px-6 mt-10'>
        {
          // TODO: create input field to select topping
        }
        <button onClick={submitOrder} className='block mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Add new order
        </button>
        {
          // TODO: separate to different component
          pizzaOrders.map(order => (
            <div key={order.id} className='mb-3 max-w-sm rounded overflow-hidden shadow-md bg-blue-200 p-3'>
              <div className='flex items-center justify-between'>
                <div className='text-lg font-bold mb-1'>Order ID #{order.id}</div>
                <button onClick={() => dispatch(removeOrder(order.id))} className='rounded-full w-6 h-6 flex items-center justify-center bg-gray-400 text-white'>
                  x
                </button>
              </div>
              <div className='text-sm font-extralight'>Size {order.isSmall ? 'small' : 'medium'}</div>
              <ul className='list-disc pl-4'>
                {
                  order.toppings.map(topping => (
                    <li key={topping}>{topping}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </>
  )
}
