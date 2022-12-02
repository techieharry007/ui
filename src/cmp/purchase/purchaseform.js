import React, { useEffect } from "react";
import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Modal, Button } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Producttable from "./producttable";
export default function Purchaseform() {
  const [vendors, setVendors] = useState([
    { name: "vendor1", address: "312-b BRS nagar",state:'Punjab' },
    { name: "vendor2", address: "312-b BRS nagar",state:'Chandigarh' },
    { name: "vendor3", address: "329-a BRS nagar",state:'Himachal' },
    { name: "vendor4", address: "300-c BRS nagar",state:'Up' },
  ]);
  const [modalState, setModalState] = useState(false);
  const [vendor, setVendor] = useState({name:'',address:'',state:''});
  const [search, setSearch] = useState(null);
  const [err, setErr] = useState(false);
  const [date, setDate] = useState({ currentDate: null, billDate: null });
  const toggleModal = () => {
    setModalState(true);
  };
  const toggleModal2 = () => {
    setModalState(false);
    setSearch("");
  };

  const getData = () => {
    
  };
  return (
    <>
      {err && (
        <div className="alert alert-primary" role="alert">
          Date Error
        </div>
      )}
      <Button onClick={() => getData()}>Click</Button>
      <Modal show={modalState}>
        <Modal.Header closeButton onClick={() => toggleModal2()}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="input-group mb-3" style={{ widt: "50%" }}>
            <span class="input-group-text" id="basic-addon1">
              Search
            </span>
            <input
              value={search}
              type="text"
              class="form-control"
              placeholder="search here...."
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>

          {search &&
            vendors &&
            vendors
              .filter((obj) => {
                if (obj.name.includes(search.toLowerCase())) {
                  return obj;
                }
              })
              .map((obj, index) => {
                return (
                  <div
                    style={{
                      display: "block",
                      background: "rgba(0,128,128,0.4)",
                    }}
                  >
                    <p
                      style={{ color: "black" }}
                      key={index}
                      onClick={() => {
                        setVendor({...vendor,name:obj.name,address:obj.address,state:obj.state});
                        toggleModal2();
                      }}
                    >
                      {obj.name}
                    </p>
                  </div>
                );
              })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => toggleModal2()}>
            Close
          </Button>
          {/* <Button
            variant="primary"
            onClick={() => {
              toggleModal2();
              getData();
            }}
          >
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

      <div>
        <h1 style={{ color: "black" }}>XYZ Store</h1>
        <div class="input-group mb-3" style={{ widt: "50%" }}>
          <span class="input-group-text" id="basic-addon1">
            Date
          </span>
          <input
            type="date"
            class="form-control"
            placeholder="date"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={date.currentDate}
            onChange={(e) => {
              setDate({ ...date, currentDate: e.target.value });
            }}
          />
          <span
            class="input-group-text"
            id="basic-addon2"
            style={{ marginLeft: "5px" }}
          >
            Bill Date
          </span>
          <input
            type="date"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={date.billDate}
            onChange={(e) => {
              setDate({ ...date, billDate: e.target.value });
            }}
          />
        </div>

        <div class="input-group mb-2" style={{ width: "80%" }}>
          <span class="input-group-text" id="basic-addon2">
            Party Name
          </span>
          <input
            onClick={() => toggleModal()}
            type="text"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            value={vendor.name}
          />

          <span
            class="input-group-text"
            id="basic-addon3"
            style={{ marginLeft: "5px" }}
          >
            Address
          </span>
          <input
          value={vendor.address}
            type="text"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
          <input
          value={vendor.state}
            type="text"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
        <Producttable vendor={vendor}/>
      </div>
    </>
  );
}
