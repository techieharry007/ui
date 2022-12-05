import React from 'react'
import "./vendor.css"

export default function Addvendor() {
  return (
    <>
      <form>
  <div className="mb-3" id="main-form">
    <label  className="form-label">Type</label>
    <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  
  
    <label className="form-label">Name</label>
    <input type="text" className="form-control-vendor-name" id="vendor-name"/>


  <label className="form-label" for="exampleCheck1">Address</label>
    <input type="text" className="form-control vendor-address" id="vendor-address"/>
    
  </div>
  <div className="mb-3" id="main-form">
    <label  className="form-label">Contact Person</label>
    <input type="text" className="contact-name" id="contact-person-name"/>
    <label className="form-label">Contact Number</label>
    <input type="text" className="form-control-vendor-name" id="vendor-name"/>

  {/* <label className="form-label" >Address</label> */}
    <input type="text" palceholder="Address line one" className="form-control vendor-address" id="vendor-address"/>
  </div>
  {/* <button type="submit" className="btn btn-primary">Submit</button> */}
</form>
    </>
  )
}
