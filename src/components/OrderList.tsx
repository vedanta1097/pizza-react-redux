
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import OrderCard from '@/components/OrderCard'

export default function OrderList() {
  const pizzaOrders = useSelector((state: RootState) => state.pizza.orders)

  return (
    <div className='mt-4'>
    { pizzaOrders.map(order => <OrderCard key={order.id} order={order}/>) }
    </div>
  )
}