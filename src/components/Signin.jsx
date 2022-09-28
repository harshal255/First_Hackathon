import React from 'react'

const Signin = () => {


  return (
    <div id='Signin' className=" Signin flex flex-col rounded-[2rem] bg-[#1f2e2e]  w-[20rem] xl:w-[30rem] h-[12rem] xl:h-[18rem]  m-auto my-[5rem] text-start items-center justify-center">

      <div className="flex my-2">
        <span>User ID :</span>
        <input type="text" className='bg-[#19334d] rounded-[0.5rem] ' id='username' />
      </div>
      <div className="flex my-2">
        <span>Password :</span>
        <input type="text" className='bg-[#19334d] rounded-[0.5rem] ' id='username' />
      </div>

      <button className='m-2 rounded-[1rem] bg-[#7300e6] w-[8rem] h-[2rem]   active:bg-[#5900b3] hover:bg-[#400080] '>SIGN IN</button>



    </div>
  )
}

export default Signin