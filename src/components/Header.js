import React, { useState } from 'react'
import {Link} from "react-router-dom"
import useOnline from '../Utilis/useOnline';
import { useSelector } from 'react-redux';

const Title=()=>(
    <a href="/">
    <img  className="h-28 p-2" src="https://cdn.dotpe.in/longtail/store-logo/1023934/dOZPIFia.jpeg" alt="logo"/>
    </a>
);
const Header=()=>{
    //  const[isloggedIn, setloggedIn]=useState(false);

    const isOnline=useOnline();

    const cardItems=useSelector(store=>store.card.item);
    console.log(cardItems);
    return (
        <div className="flex justify-between bg-black shadow-lg border-4 border-black">
            <Title/>
            <div className="nav-items">
                <ul className='flex py-10'>
                    <li className='px-2 text-white'>
                        <Link to ="/">Home</Link>
                    </li>
                    <li className='px-2 text-white'>
                        <Link to ="/about">About</Link>
                    </li>
                    <li className='px-2 text-white'>
                        <Link to ="/contact">Contact</Link>
                    </li>
                    <li className='px-2 text-white'><Link to ="/cart">Cart-{cardItems.length}items</Link></li>
                    <li className='px-2 text-white'>
                        <Link to="/Instamart">Instamart</Link>
                    </li>
                    <li className="px-2 text-white">
                        <Link to="/Login">Login</Link>
                    </li>
                </ul>
            </div>
            <h1 className='pt-9'>{isOnline?"✅":"🔴"}</h1>
            {/* {isloggedIn ?(
                <button onClick={()=>setloggedIn(false)} className='text-white'>LogOut</button>
            ):<button onClick={()=>setloggedIn(true)} className='text-white'>Login</button>} */}
            
        </div>
    );
};



export default Header