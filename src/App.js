import React, { useState } from "react";
import {Space, Checkbox} from "antd"

import {logo} from "./image.js"

function App() {
  const [checkAll,setCheckAll]=useState(true)
  const [indeterminate,setIndeterminate]=useState(true)
  const onChange=(e)=>{
    setCheckAll(!checkAll)
    console.log(e.target.value)
  }
  return (
    <div className="App" style={{height:"100vh" }}>
      
      <div style={{display:"flex",flexDirection:"column", width:"25%" ,backgroundColor:"#273AB5",height:"100%",}}>
      <img style={{width:"45%", margin:"0 auto",marginTop:"15px"}} src={`${logo}`} alt=""/>
      
      <div style={{marginLeft:"10%"}}>
         <div style={{display:"flex",justifyContent:"space-between"}}>
          <span style={{color:"white"}}>SÜREÇLER</span> 
          <Checkbox style={{color:"#e0dede",fontFamily:"sans-serif",}}>Tümünü Seç</Checkbox>
          </div>

       <Space style={{marginLeft:"2%"}} direction="vertical">
        <Checkbox checked={checkAll} onChange={onChange} style={{marginTop:"7px",marginLeft:"4px",color:"#e0dede",fontFamily:"sans-serif"}} value={"Arge"}>Arge</Checkbox>
        <Checkbox style={{marginTop:"7px",marginLeft:"4px",color:"#e0dede",fontFamily:"sans-serif"}} value={"Bakım"}>Bakım</Checkbox>
        <Checkbox style={{marginTop:"7px",marginLeft:"4px",color:"#e0dede",fontFamily:"sans-serif"}} value={"Bilgi Teknolojileri"}>Bilgi Teknolojileri</Checkbox>
        <Checkbox style={{marginTop:"7px",marginLeft:"4px",color:"#e0dede",fontFamily:"sans-serif"}} value={"Finans"}>Finans</Checkbox>
        <Checkbox style={{marginTop:"7px",marginLeft:"4px",color:"#e0dede",fontFamily:"sans-serif"}} value={"Çevre"}>Çevre</Checkbox>
        <Checkbox style={{marginTop:"7px",marginLeft:"4px",color:"#e0dede",fontFamily:"sans-serif"}} value={"İnsan Kaynakları"}>İnsan Kaynakları</Checkbox>
        <Checkbox style={{marginTop:"7px",marginLeft:"4px",color:"#e0dede",fontFamily:"sans-serif"}} value={"İş Sağlığı ve Güvenliği"}>İş Sağlığı ve Güvenliği</Checkbox>
        <Checkbox style={{marginTop:"7px",marginLeft:"4px",color:"#e0dede",fontFamily:"sans-serif"}} value={"Kalite"}>Kalite</Checkbox>
        <Checkbox style={{marginTop:"7px",marginLeft:"4px",color:"#e0dede",fontFamily:"sans-serif"}} value={"Satış ve Pazarlama"}>Satış ve Pazarlama</Checkbox>
        <Checkbox style={{marginTop:"7px",marginLeft:"4px",color:"#e0dede",fontFamily:"sans-serif"}} value={"Tedarik Zinciri"}>Tedarik Zinciri</Checkbox>
        <Checkbox style={{marginTop:"7px",marginLeft:"4px",color:"#e0dede",fontFamily:"sans-serif"}} value={"Üretim"}>Üretim</Checkbox>
        </Space>
      </div>
      </div>
    </div>
  );
}


export default App;
