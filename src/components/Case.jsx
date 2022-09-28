import React from 'react'
import Searchcase from './Searchcase'
import Searchcase2 from './Searchcase2'

const Case = () => {
  return (
    <div id='Profile' className="Profile rounded-[1rem]  bg-slate-800 flex flex-col m-1 md:w-[80%] md:ml-[20%] xl:flex-row justify-center">
    <Searchcase></Searchcase>
    <Searchcase2></Searchcase2>
     


    </div>
  )
}

export default Case