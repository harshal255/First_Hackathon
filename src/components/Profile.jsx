import React from 'react'
import CaserMorals from './CaserMorals'
import KnownCrimes from './KnownCrimes'
import SearchProfiles from './SearchProfiles'

const Profile = () => {
  return (
    <div id='Profile' className="Profile rounded-[1rem]  bg-slate-800 flex flex-col m-1 md:w-[80%] md:ml-[20%] xl:flex-row justify-evenly ">
      <SearchProfiles className="bg-black"></SearchProfiles>
      <CaserMorals></CaserMorals>
      <KnownCrimes></KnownCrimes>


    </div>
  )
}

export default Profile