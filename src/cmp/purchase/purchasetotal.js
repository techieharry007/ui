import React, { useEffect, useState } from 'react'

export default function Purchasetotal(props) {
    const[amount,setAmount]=useState({sgst:null,cgst:null,grandtotal:null})
    

    let {sgst,cgst,grandtotal}=amount
    
    
  return (
    <>
      <div className='grand-total' style={{display:'grid'}}>
        <label>SGST{"     "+sgst}</label>
        <label>CGST{"   "+cgst}</label>
        <label>IGST{"   "+100}</label>
        <label>Grand Total{"   "+grandtotal}</label>
      </div>
    </>
  )
}
