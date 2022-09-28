import React from 'react'

const Mpcard = ({Photo,btn,Address}) => {
    return (
        <div className='p-2 flex m-2 bg-[#141f1f] rounded-[0.5rem]'>

            <img src={require(`../img/${Photo}.png`)} alt='criminal1' className=' w-24 h-24 border-white border-solid border-[1px]' />

            <div className='flex flex-col pl-3 text-start '>
                <div className='flex flex-col'>
                    <span className='text-2xl '>Jimmey Singh</span>
                    <button className='m-1 rounded-[2rem] bg-[#0000ff] w-[5rem] h-[2rem]   active:bg-[#000066] hover:bg-[#000099] '>{btn}</button>
                </div>
                <span className='justify-end text-[0.7rem]'>{Address}</span>
            </div>
        </div>
    )
}

export default Mpcard