import React from 'react'
import { useCounterStore } from '../Store'

const Counter = () => {
   const state =  useCounterStore((state)=> state.count)
    const incrementAsync = useCounterStore((state) => state.incementAsync)
    const decrement = useCounterStore((state) => state.decrement)
  return (
    <div>{state}
    <div className='flex justify-center items-center gap-4'>
        <button onClick={incrementAsync} className='bg-blue-500 text-white px-4 py-2 rounded'>Increment</button>
        <button onClick={decrement} className='bg-red-500 text-white px-4 py-2 rounded'>Decrement</button>
      
    </div>
    </div>
  )
}

export default Counter