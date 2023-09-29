import { useDispatch } from 'react-redux'
import { removeOrder } from '@/store/pizzaSlice'
import { PizzaOrder } from '@/store/pizzaSlice'

export default function OrderCard({ order }: { order: PizzaOrder }) {
  const dispatch = useDispatch()

  return (
    <div key={order.id} className='mb-3 max-w-sm rounded overflow-hidden shadow-md bg-blue-200 p-3'>
      <div className='flex items-center justify-between'>
        <div className='text-lg font-bold mb-1'>
          Order ID #{order.id}
        </div>
        <button
          onClick={() => dispatch(removeOrder(order.id))}
          className='rounded-full w-6 h-6 flex items-center justify-center bg-gray-500 text-white'
        >x</button>
      </div>
      <div className='text-sm text-gray-700'>
        Size {order.isSmall ? 'small' : 'medium'}
      </div>
      <ul className='list-disc pl-4'>
        {
          order.toppings.map(topping => (
            <li key={topping}>{topping}</li>
          ))
        }
      </ul>
    </div>
  )
}