import React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Caser from './Caser';

const SearchProfiles = () => {
    return (
        <div className="SearchProfile rounded-[1rem] m-2 p-2 bg-black  h-[40rem] z-[4] xl:w-[24rem]">
            <div className=" flex   mt-2 p-2 h-[4rem] text-center justify-center items-center text-[1.5rem]">
                <span className=' pt-[9px] w-[75%] h-[3rem] bg-[#26003b] text-center rounded-[12px] ml-[2rem]'>Search Profile</span>
                <AddBoxIcon className='m-2 text-green-500 hover:cursor-pointer'></AddBoxIcon>
            </div>
            <div className=" flex mt-2 p-2 h-[4rem] justify-between rounded-[12px] bg-slate-900">
                <span className='pt-[9px]  h-[3rem] w-[5rem]  '>Cesar</span>
                <FilterAltIcon className='m-2'></FilterAltIcon>

            </div>
            <Caser Photo="caser1" Name="Cesar Morals" Aadhar="xxxx xxxx xxxx" Fingerprint="12acd244h35e0" />
            <Caser Photo="caser2" Name="Cesar Parker" Aadhar="xxxx xxxx xxxx" Fingerprint="kak2299jsu2n3" />

        </div>
    )
}

export default SearchProfiles