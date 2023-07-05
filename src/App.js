import React, { useState,useEffect } from "react";
import {Space, Checkbox} from "antd"
import {logo} from "./image.js"

function App() {
  const [checkAll,setCheckAll]=useState(false)
  const [checkboxStates, setCheckboxStates] = useState({
    Arge: false,
    Bakim: false,
    Bilgi_Teknolojileri: false,
    Finans: false,
    Cevre: false,
    Insan_Kaynaklari: false,
    Is_Sagligi: false,
    Kalite: false,
    Satis: false,
    Tedarik: false,
    Uretim: false
  });

  useEffect(() => {
    const trueKeys = Object.keys(checkboxStates).filter(key => checkboxStates[key] === true);
    console.log("Seçili Olanlar:",trueKeys)
  }, [checkboxStates])
  
  const handleSelectAll = (e) => {
    const { checked } = e.target;
    const updatedCheckboxStates = {};
    Object.keys(checkboxStates).forEach((key) => {
      updatedCheckboxStates[key] = checked;
    });
    setCheckAll(checked);
    setCheckboxStates(updatedCheckboxStates);
  };

  const handleCheckboxChange = (e) => {
    const {id, checked } = e.target;
   
    setCheckboxStates((prevStates) => ({...prevStates,[id]:checked}));
  
  };
  return (
    <div className="App" style={{height:"100vh" }}>
      
      <div style={{display:"flex",flexDirection:"column", width:"25%" ,backgroundColor:"#273AB5",height:"100%",}}>
      <img style={{width:"45%", margin:"0 auto",marginTop:"25px",marginBottom:"15px"}} src={`${logo}`} alt=""/>
      
      <div style={{marginLeft:"10%"}}>
         <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px",marginBottom:"25px"}}>
          <span style={{color:"#F3F4FB",fontFamily:"Montserrat,sans-serif"}}>SÜREÇLER</span> 
          <Checkbox style={{ color: "#F3F4FB", fontFamily:"Montserrat,sans-serif",position:"relative",right:"35px" }} checked={checkAll}  onChange={handleSelectAll}>Tümünü Seç</Checkbox>
          </div>

       <Space style={{marginLeft:"2%"}} direction="vertical">
       <Checkbox
        checked={checkboxStates.Arge}
        onChange={handleCheckboxChange}
        style={{ marginTop: "14px", marginLeft: "4px", color: "#F3F4FB", fontFamily:"Montserrat,sans-serif",fontSize:"16px" }}
        name="Arge"
        id="Arge"
      >
        Arge
      </Checkbox>

      <Checkbox
        checked={checkboxStates.Bakim}
        onChange={handleCheckboxChange}
        style={{ marginTop: "14px", marginLeft: "4px", color: "#F3F4FB", fontFamily:"Montserrat,sans-serif",fontSize:"16px" }}
        name="Bakım"
        id="Bakim"
      >
        Bakım
      </Checkbox>

      <Checkbox
        checked={checkboxStates.Bilgi_Teknolojileri}
        onChange={handleCheckboxChange}
        style={{ marginTop: "14px", marginLeft: "4px", color: "#F3F4FB", fontFamily:"Montserrat,sans-serif",fontSize:"16px" }}
        name="Bilgi Teknolojileri"
        id="Bilgi_Teknolojileri"
      >
        Bilgi Teknolojileri
      </Checkbox>

      <Checkbox
        checked={checkboxStates.Finans}
        onChange={handleCheckboxChange}
        style={{ marginTop: "14px", marginLeft: "4px", color: "#F3F4FB", fontFamily:"Montserrat,sans-serif",fontSize:"16px" }}
        name="Finans"
        id="Finans"
      >
        Finans
      </Checkbox>

      <Checkbox
        checked={checkboxStates.Cevre}
        onChange={handleCheckboxChange}
        style={{ marginTop: "14px", marginLeft: "4px", color: "#F3F4FB",fontFamily:"Montserrat,sans-serif",fontSize:"16px" }}
        name="Çevre"
        id="Cevre"
      >
        Çevre
      </Checkbox>
      
      <Checkbox
        checked={checkboxStates.Insan_Kaynaklari}
        onChange={handleCheckboxChange}
        style={{ marginTop: "14px", marginLeft: "4px", color: "#F3F4FB", fontFamily:"Montserrat,sans-serif",fontSize:"16px" }}
        name="İnsan Kaynakları"
        id="Insan_Kaynaklari"
      >
        İnsan Kaynakları
      </Checkbox>

      <Checkbox
        checked={checkboxStates.Is_Sagligi}
        onChange={handleCheckboxChange}
        style={{ marginTop: "14px", marginLeft: "4px", color: "#F3F4FB",fontFamily:"Montserrat,sans-serif",fontSize:"16px" }}
        name="İş Sağlığı ve Güvenliği"
        id="Is_Sagligi"
      >
        İş Sağlığı ve Güvenliği
      </Checkbox>

      <Checkbox
        checked={checkboxStates.Kalite}
        onChange={handleCheckboxChange}
        style={{ marginTop: "14px", marginLeft: "4px", color: "#F3F4FB", fontFamily:"Montserrat,sans-serif",fontSize:"16px" }}
        name="Kalite"
        id="Kalite"
      >
        Kalite
      </Checkbox>

      <Checkbox
        checked={checkboxStates.Satis}
        onChange={handleCheckboxChange}
        style={{ marginTop: "14px", marginLeft: "4px", color: "#F3F4FB", fontFamily:"Montserrat,sans-serif",fontSize:"16px" }}
        name="Satış ve Pazarlama"
        id="Satis"
      >
        Satış ve Pazarlama
      </Checkbox>

      <Checkbox
        checked={checkboxStates.Tedarik}
        onChange={handleCheckboxChange}
        style={{ marginTop: "14px", marginLeft: "4px", color: "#F3F4FB", fontFamily:"Montserrat,sans-serif",fontSize:"16px" }}
        name="Tedarik Zinciri"
        id="Tedarik"
      >
        Tedarik Zinciri
      </Checkbox>

      <Checkbox
        checked={checkboxStates.Uretim}
        onChange={handleCheckboxChange}
        style={{ marginTop: "14px", marginLeft: "4px", color: "#F3F4FB", fontFamily:"Montserrat,sans-serif",fontSize:"16px" }}
        name="Üretim"
        id="Uretim"
      >
        Üretim
      </Checkbox>
        </Space>
      </div>
      </div>
    </div>
  );
}


export default App;
