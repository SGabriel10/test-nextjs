"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import Icon from './Icon';
import classnames from 'classnames';
import Link from 'next/link';
export default function Sidebar() {
    const router = useRouter()
    const[toggleCollapse,setToggleCollapse] = useState(false);
    const[isCollapsible, setIsCollapsible]= useState(false);
    const wrapper = classnames('h-screen px-4 pt-8 pb-4 bg-cyan-600 justify-between flex-col w-80',{
        ['w-80']: !toggleCollapse,
        ['w-20']: toggleCollapse
    });
    const collapseIconClasses = classnames('p-4 round bg-light absolute right-0',{
       "rotate-180": toggleCollapse
    });
    const setClickToggle=()=>{
        setToggleCollapse(!toggleCollapse);
    }
    const onMouseOver =()=>{
        setIsCollapsible(!isCollapsible);
    }
  return (
    <div className={wrapper} onMouseEnter={onMouseOver}>
        <div className='flex flex-col'>          
            <div className='flex items-center justify-between relative'>
                <div className='flex items-center pl-1 gap-4'>
                     <Icon imagen = '/logo.png'/>
                    <span className={classnames('mt-2 text-lg font-medium text-text',{
                    hidden: toggleCollapse,
                    })}>
                    Sistema de Pago
                    </span>
                </div>
            </div>
        </div>
        <div>
            <div>
                <button onClick={() => router.push('/dashboard')}>
                    Home
                </button>
            </div>
            <div>
                <button onClick={() => router.push('/pago')}>
                    Pago
                </button>
            </div>
        </div>
    </div>
  )
}
