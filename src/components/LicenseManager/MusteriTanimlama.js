import React, { useState } from 'react'
import SwitchIos from '../SwitchIos'
import { Button } from '@mui/material'

function MusteriTanimlama() {
   
     
    
  return (

    <>
             <div style={{backgroundColor:"#F5F5F5",display:"flex",width:"800px",height:"700px",flexDirection:"column"}}> 
             <div style={{display:"flex",width:"100%",height:"100px",justifyContent:"center",alignItems:"center"}}>
             <h2 style={{fontFamily:"arial",color:"#5C5C5C"}}>Müşteri Tanımlama</h2>
             </div>
             <div style={{display:"flex",width:"300px",height:"550px",margin:"0 auto",flexDirection:"column",marginTop:"20px",}}>
             


                                {/* select option müşteri */}
             <label style={{fontWeight:"bold",fontSize:"13px",color:"#5C5C5C",fontFamily:"arial",marginBottom:"8px"}}>
                Müşteri Firma
            </label>
            <select  style={{width:"303px",height:"39px",paddingLeft:"5px",marginBottom:"30px",borderRadius:"8px"}} name="seç" id="musteri-firma" defaultValue={"seçiniz"}>
            <option disabled value="seçiniz">Tenant Seçiniz</option>
            <option value="bmw">BMW</option>
            <option value="audi">AUDI</option>
            <option value="merso">MERSO</option>
            <option value="volkswagen">VOLKSWAGEN</option>
            </select>


                                {/* ad soyad input */}
            <label style={{fontWeight:"bold",fontSize:"13px",color:"#5C5C5C",fontFamily:"arial",marginBottom:"8px"}}>
                Müşteri Sorumlusu Ad-Soyad
            </label>
            <input type="text" id='musteri-ad-soyad' placeholder='Ad Soyad Giriniz...' style={{width:"295px",height:"35px",paddingLeft:"5px",marginBottom:"30px",border:"1px solid  rgb(133, 133, 133)",borderRadius:"8px",paddingLeft:"8px"}} />


                                {/* email input */}
            <label style={{fontWeight:"bold",fontSize:"13px",color:"#5C5C5C",fontFamily:"arial",marginBottom:"8px"}}>
                Müşteri Sorumlusu e-mail
            </label>
            <input type="email" placeholder='E-mail giriniz' id='musteri-mail' style={{ width:"295px",height:"35px",paddingLeft:"5px",border:"1px solid  rgb(133, 133, 133)",borderRadius:"8px",paddingLeft:"8px"}} />
            
                                {/* Switch */}
            <div style={{display:"flex", justifyContent:"flex-end",marginTop:"30px",alignItems:"center"}}> 
            <label style={{fontSize:"13px",marginRight:"10px",fontWeight:"600",color:"#5C5C5C",fontFamily:"arial"}}>Aktif/Pasif</label>
            <SwitchIos/>
            </div>


                                {/* Buton */}
            <div style={{display:"flex",justifyContent:"center",marginTop:"30px"}}>
              {/*   <button type='submit' style={{width:"300px",height:"37px",color:"white",backgroundColor:"#3C8D40",border:"none",borderRadius:"8px",fontSize:"15px"}} >Kaydet</button>  */}
                <Button variant="contained"  type='submit' style={{width:"300px",height:"37px",color:"white",backgroundColor:"#3C8D40",border:"none",borderRadius:"8px",fontSize:"15px",textTransform:"none"}}>Kaydet</Button>
            </div>
            
             </div>
             </div>

    </>
  )
}

export default MusteriTanimlama