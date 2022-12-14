
import React from 'react'
import SiteImage from '../components/SiteImage'

import Link from 'next/link'

import logo from "../public/bri.jpeg"

function VerifikasiBerhasil() {
  return (
    <div className="container">
      <h2 className='msg'>Pesan Terkirim</h2>
      <div className='container-flex'>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', maxWidth:'30em'}}>  
      <SiteImage logo={logo}/>   
          {/* <p style={{wordWrap:'break-word', fontSize:'1rem', marginLeft:12}}>πΊπππππππ πͺπππ/πΊππππ πΊπ΄πΊ ππππ π¨πππ π»πππππ π°πππ ππ π·ππππ/π»πππππ ππ π²ππππ π²πππππππππ ππππ πππ ππ π©ππππ πππ</p> */}
        </div>   
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', marginLeft:12}}>  
          <h3 className='msg'>Pesan Terkirim (
            <Link href="/login">
                <a style={{color:'#0693e3'}}>kembali</a>
              </Link>
            )
          </h3>
          <p style={{fontSize:'1rem'}}>Login proses</p>
        </div> 
      </div>
    </div>
  )
}

export default VerifikasiBerhasil