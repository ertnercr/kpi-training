import React, { useState } from 'react'
import MusteriTanimlama from '../components/LicenseManager/MusteriTanimlama'
import Navbar from '../components/Navbar'
import LisansTanimlama from '../components/LicenseManager/LisansTanimlama';
import MusteriLisansYonetimi from '../components/LicenseManager/MusteriLisansYonetimi';

function LicenseManagerApp() {
  const [secilen,setSecilen]=useState("1");
  console.log(secilen)
  return (
    <div >
      <Navbar setSecilen={setSecilen}/>
      <div style={{display:"flex",width:"100%",height:"900px",justifyContent:"center",alignItems:"center"}}>
     
      {secilen === "1" && <MusteriTanimlama />}
      {secilen === "2" && <LisansTanimlama/>}
      {secilen === "3" && <MusteriLisansYonetimi/>}
      </div>
     
      
      
      </div>
  )
}

export default LicenseManagerApp  