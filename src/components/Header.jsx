import React from 'react'
import City from './City'


const Header = () => {
    return (
        <div className="Header">
            <div className='flex bg-slate-900 items-center text-center justify-between  md:rounded-[2rem] md:m-4 text-white'>
                <img src={require('../img/logo.png')} alt='logo' className=' w-10 ml-3 md:w-[6rem] xl:ml-[4rem] my-2'/>
                <h1 className='text-1xl mr-[-1rem] md:text-5xl items-center justify-center ml-[-1.5rem] xl:ml-[-30rem]'>Gujarat Police department</h1>
                <City></City>
            </div>

        </div>
    )
}

export default Header