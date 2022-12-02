import React from 'react'
import Home from './home'
import { useNavigate } from 'react-router-dom'
export default function Dashboard() {
  const navigate=useNavigate()
  return (
    <>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <p class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sales
          </p>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><p class="dropdown-item" href="#">Action</p></li>
            <li><p class="dropdown-item" href="#">Another action</p></li>
            <li><p class="dropdown-divider"/></li>
            <li><p class="dropdown-item" href="#">Something else here</p></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <p class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Purchase
          </p>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><p class="dropdown-item" href="#" onClick={()=>navigate('/dashboard/purchaseform')}>New Purchase</p></li>
            <li><p class="dropdown-item" href="#">All Purchase</p></li>
            <li><p class="dropdown-divider"/></li>
            <li><p class="dropdown-item" href="#">Something else here</p></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <p class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            GST Report
          </p>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><p class="dropdown-item" href="#">Action</p></li>
            <li><p class="dropdown-item" href="#">Another action</p></li>
            <li><p class="dropdown-divider"/></li>
            <li><p class="dropdown-item" href="#">Something else here</p></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <p class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Create Vendor
          </p>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><p class="dropdown-item" href="#">Action</p></li>
            <li><p class="dropdown-item" href="#">Another action</p></li>
            <li><p class="dropdown-divider"/></li>
            <li><p class="dropdown-item" href="#">Something else here</p></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <p class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="" aria-expanded="false">
            Day Book
          </p>
          
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<Home/>
    </>
  )
}
