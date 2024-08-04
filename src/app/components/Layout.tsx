import React from 'react'
import Sidebar from './Sidebar'
import Pago from './pago/Pago';
export default function Layout() {
  return (
    <div className='h-screen flex flex-row justify-start'>
        <Sidebar/>
        <div className='flex-1 m-20'>
            <Pago/>
        </div>
    </div>
  )
}
