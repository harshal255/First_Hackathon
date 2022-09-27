import React from 'react'

const Caser = ({Photo,Name,Aadhar,Fingerprint}) => {
    return (
        <div className='p-2 flex m-2 border-2 border-gray-600 border-solid rounded-[0.5rem]'>

            <img src={require(`../img/${Photo}.png`)} alt='criminal1' className=' w-20 border-white border-solid border-[1px]' />

            <div className='flex flex-col pl-3 text-start '>
                <span className='text-2xl '>{Name}</span>
                <span className=''>Aadhar:{Aadhar}</span>
                <span className=''>Fingerprint:{Fingerprint}</span>
            </div>
        </div>

    )
}

export default Caser