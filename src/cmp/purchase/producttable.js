import React from 'react'
import Tablerows from "./tablerows"
export default function Producttable({vendor}) {
 
  return (
    <>
      <h1 style={{color:'black'}}>Add Items</h1>

      <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Product Description</th>
      <th scope="col">Qty</th>
      <th scope="col">Units</th>
      <th scope="col">Rate</th>
    </tr>
  </thead>
  <tbody>
    
  <Tablerows vendor={vendor}/>
  </tbody>
</table>

{/* <section style={{color:'black'}}>
  <label>Rate {200}</label>
  <label>SGST {200}</label>
  <label>CGST  {200}</label>
  <label>IGST {200}</label>
  <label>Grand Total {200}</label>
</section> */}
{/* <footer style={{color:'black'}}>Welcome</footer> */}
    </>
  )
}
