import React, { useState } from 'react'
import { IoIosMenu,IoMdClose } from "react-icons/io";
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

const Header = ({layout}) => {
    const [show,setShow] = useState(false)
    const navigate = useNavigate()
  return (
    <header className={`md:bg-${layout} bg-secondary flex w-full items-center justify-between p-5 md:p-8`}>
        <div onClick={() => navigate('/')} className='space-x-2'>
            <span className='text-primary text-xl font-medium'>COMPARE</span>
            <span className='text-white text-xl font-medium'>DEALS</span>
        </div>
        <button onClick={()=> setShow(!show)} className='text-white text-3xl md:hidden'>
            {show ? <IoMdClose/> : <IoIosMenu/>}
        </button>
        {show && <Sidebar/>}
        <div className='hidden md:block'>
            <ul className='flex gap-8
             font-poppins'>
                <li>
                    <button className='text-primary p-2 border-b-2 border-primary'>Home</button>
                </li>
                <li>
                    <button className='text-white p-2 '>About us</button>
                </li>
                <li>
                    <button className='text-white p-2 '>Contact us</button>
                </li>
                <li>
                    <button className='text-white p-2 '>Testimonials</button>
                </li>
                <li>
                    <button className='bg-primary px-6
                     rounded-lg p-2 '>Login</button>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header