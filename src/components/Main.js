import React, { useEffect, useState } from 'react'
import {MdOutlineDownloadForOffline} from "react-icons/md"
import {RiFileExcel2Fill} from "react-icons/ri"
import {BiSolidMessageRoundedAdd} from "react-icons/bi"
import {Rate,Tag,Input} from "antd"

import data from "../assets/data"

function Main() {
  const { Search } = Input;
  const [searchBar, setSearchBar] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  
  const onSearch = (value) => {
    setSearchBar(value)
  };
  const filterData=()=>{
      const filtered =  data.filter(item => {
      
      return item.baslik.toLowerCase().includes(searchBar.toLowerCase());
    });
    console.log(filtered)
    setFilteredData(filtered);
  }
 
  useEffect(() => {
    filterData();
  }, [searchBar])

  return (
    
    <div style={{backgroundColor:"white",display:"flex",width:"100vw",margin:"1%",flexWrap:"wrap",alignContent:"flex-start"}}>
      <div style={{display:"flex",width:"98%",marginBottom:"15px",marginLeft:"10px"}}>
        <Search style={{fontSize:"5px"}} placeholder="Hızlı Arama" onSearch={onSearch} enterButton allowClear  showCount={true} size='large'/>
        <div style={{width:"12%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#C4DAA9",color:"#2C7930",borderRadius:"16px",fontFamily:"Roboto",marginLeft:"10px",fontWeight:"600"}}><RiFileExcel2Fill style={{fontSize:"20px",marginRight:"3px"}}/>Excele Aktar</div>
        <div style={{width:"13%",display:"flex",alignItems:"center",justifyContent:"center", backgroundColor:"#DDE1FB",color:"#273AB5",borderRadius:"16px",fontFamily:"Roboto",marginLeft:"10px",fontWeight:"600"}}><BiSolidMessageRoundedAdd style={{fontSize:"22px",marginRight:"3px",color:"#1C4B95"}}/>Gösterge Öner</div>
      </div>
      
      {filteredData.map((item, index) => (
        <div key={index} style={{width:"48%",height:"25%",border:"1px solid rgba(93, 93, 94, 0.1)",borderRadius:"5px",backgroundColor:"rgba(225, 225, 226, 0.08)",marginLeft:"10px",paddingLeft:"10px",marginBottom:"2%"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <h3 style={{fontFamily:"Montserrat",fontWeight:"500"}}>{item.baslik}</h3>
            <MdOutlineDownloadForOffline style={{fontSize:"32px" ,color:"#428545",position:"relative",right:"30px"}}/>
        </div>   
    
        <div style={{width:"90%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontFamily:"Poppins",fontSize:"15px"}}>
                {item.aciklama}
        </div>
        <div style={{display:"flex" ,flexDirection:"column" ,justifyContent:"flex-end"}}> 
           <h4 style={{fontFamily:"Montserrat",color:"#242F7F" ,fontWeight:"bold",margin:"25px 0px 7px 0px"}}>{item.kategori}</h4>

            <a style={{textDecoration:"none",color:"blue"}} href="">{item.etiketler.split(" ").map((etiket,etiketIndex)=>(
              <Tag key={etiketIndex} style={{backgroundColor:"#273AB5",color:"white"}} bordered={false}>{etiket}</Tag>
            ))}
            </a>
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",marginRight:"15px"}}>
          <Rate  style={{fontSize:"17px",marginRight:"0",color:"#273AB5"}} defaultValue={item.puan}/>
          <span style={{fontFamily:"Poppins",fontWeight:"600",fontSize:"15px",marginTop:"9px",color:"#5D5D5E"}}>Ekleyen: {item.ekleyen}</span>
        </div>
      
    </div>

      ))}
    </div>
  )
}

export default Main