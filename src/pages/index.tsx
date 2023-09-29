import OrderForm from '@/components/OrderForm'
import OrderList from '@/components/OrderList'

export default function Home() {

  return (
    <>
      <div className='container max-w-sm mx-auto px-6 mt-4'>
        <OrderForm />
        <OrderList />
      </div>
    </>
  )
}
