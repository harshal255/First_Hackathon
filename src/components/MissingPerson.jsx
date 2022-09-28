import React from 'react'
import CaserMorals from './CaserMorals';

import Mp from './Mp';
// import Caser from './Caser';

const MissingPerson = () => {
  return (
    <div id='Profile' className="Profile rounded-[1rem]  bg-slate-800 flex flex-col m-1 md:w-[80%] md:ml-[20%] xl:flex-row justify-center">
     <Mp ></Mp>
     <CaserMorals CaserMoral="Jimmy Sharma" ></CaserMorals>
     


    </div>
   
  )
}

export default MissingPerson