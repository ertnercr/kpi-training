import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({setSecilen}) {
  return (
    <div>
        <div style={{backgroundColor:"#F5F5F5",display:"flex",width:"800px",height:"40px",margin:"0 auto"}}>
            <div style={{display:"flex",alignItems:"center",width:"100%"}}>
                <ul style={{listStyle:"none",display:"flex",fontWeight:"bold",width:"100%",justifyContent:"space-evenly"}}>
                    <li><Link style={{textDecoration:"none",color:"black"}} onClick={() => setSecilen("1")}>Müşteri Tanımlama</Link></li>
                    <li><Link style={{textDecoration:"none",color:"black"}} onClick={() => setSecilen("2")}>Lisans Tanımlama</Link></li>
                    <li><Link style={{textDecoration:"none",color:"black"}} onClick={() => setSecilen("3")}>Müşteri ve Lisans Yönetimi</Link></li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar