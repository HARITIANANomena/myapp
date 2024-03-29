// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <>
            <div className='ctn_nav h-12 bg-green-600 flex justify-between items-center'>
                <h1 className='text-white text-2xl'>Logo</h1>
                <nav>
                    <ul className='flex'>
                        <li className='text-white text-xl'>
                            <Link to='/'>Evènements</Link>
                        </li>
                        <li className='ml-8 text-white text-xl'><a href="#">Point de vente</a></li>
                        <li className='ml-8 text-white text-xl'><a href="#">Compte</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navigation;