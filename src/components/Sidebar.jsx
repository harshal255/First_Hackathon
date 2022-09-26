import React from 'react'


import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person3Icon from '@mui/icons-material/Person3';
import SummarizeIcon from '@mui/icons-material/Summarize';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Dashboard from './Dashboard';
import Profile from './Profile';


const Sidebar = () => {

    function close() {
        //    let a=  document.querySelector(".close");
        //    a.style.display ="hidden";
        document.querySelector(".menu").style.display = "none";
        document.querySelector(".line").style.visibility = "visible";


    }
    function open() {
        document.querySelector(".menu").style.display = "initial";
        document.querySelector(".line").style.visibility = "hidden";


    }
    return (

        <div className='flex flex-col  z-[3] relative' >

            <div className="line text-white flex justify-start m-[1rem] md:ml-[1.5rem] w-14 absolute" onClick={open}>
                <DensityMediumIcon></DensityMediumIcon>

            </div>

            <div className="menu sidebar bg-black sm:m-4 fixed top-[4.4rem] md:top-[9.5rem] bottom-0 lg:left-0 p-2 w-[300px]  text-white overflow-clip hidden"  >


                <div className="flex justify-end xl:hidden" onClick={close} >
                    <CloseIcon className='ml-20 cursor-pointer ' onClick={close} ></CloseIcon>
                </div>

                <ul>

                    <li className='flex bg-slate-900 rounded-full p-3 m-3 hover:mr-[-2rem] hover:bg-slate-800'>
                       

                            <DashboardIcon></DashboardIcon>
                            <span className='ml-2'>Dashboard</span>
                      


                    </li>
                    <li className='flex bg-slate-900 rounded-full p-3 m-3 hover:mr-[-2rem] hover:bg-slate-800'>

                      
                            <Person3Icon></Person3Icon>
                            <span className='ml-2'>Profile</span>
                       


                    </li>
                    <li className='flex bg-slate-900 rounded-full p-3 m-3 hover:mr-[-2rem] hover:bg-slate-800'>
                       

                            <SummarizeIcon></SummarizeIcon>
                            <span className='ml-2'>Report</span>
                      


                    </li>
                    <li className='flex bg-slate-900 rounded-full p-3 m-3 hover:mr-[-2rem] hover:bg-slate-800'>
                       

                            <DirectionsCarFilledIcon></DirectionsCarFilledIcon>
                            <span className='ml-2'>Vehicles</span>
                      


                    </li>
                    <li className='flex bg-slate-900 rounded-full p-3 m-3 hover:mr-[-2rem]  hover:bg-slate-800'>
                        
                            <PersonIcon></PersonIcon>
                            <span className='ml-2'>Missing Person</span>
             


                    </li>
                    <li className='flex bg-slate-900 rounded-full p-3 m-3 hover:mr-[-2rem] hover:bg-slate-800'>
                      

                            <DescriptionIcon></DescriptionIcon>
                            <span className='ml-2'>Case</span>
                    


                    </li>
                </ul>




            </div>
        </div >

    )
}

export default Sidebar