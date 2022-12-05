import React from "react";
import Tablerows from "./tablerows";
export default function Producttable({ vendor }) {
  return (
    <>
      <h1 style={{ color: "black" }}>Add Items</h1>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Product Description</th>
            <th scope="col">Qty</th>
            <th scope="col">Units</th>
            <th scope="col">Rate</th>
            <th scope="col">Discount %</th>
            <th scope="col">Total Discount</th>
          </tr>
        </thead>
        <tbody>
          <Tablerows vendor={vendor} />
        </tbody>
      </table>

     
    </>
  );
}
