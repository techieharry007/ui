import React, { useEffect } from "react";
import { useState } from "react";
import Purchasetotal from "./purchasetotal";
export default function Tablerows({ vendor }) {
  const [option, setOption] = useState(["item1", "item2", "item3", "item4"]);
  const [rowCount, setRowCount] = useState([1]);
  const [flag, setFlag] = useState(false);
  const [amount, setAmount] = useState({
    sgst: null,
    cgst: null,
    igst: null,
    grandtotal: null,
  });
  const [itemDetail, setItem] = useState([
    { id: null, productDes: null, Qty: null, Unit: null, price: null },
  ]);
  const [finalAmt, setFinalAmt] = useState(null);
  let { sgst, cgst, igst, grandtotal } = amount;
  const increaseRowCount = () => {
    let clone = rowCount;
    if (
      itemDetail[itemDetail.length - 1].price !== null ||
      itemDetail[itemDetail.length - 1].price === undefined
    ) {
      clone.push(1);
      setRowCount([...clone]);
      let items = itemDetail;
      items.push({
        id: null,
        productDes: null,
        Qty: null,
        Unit: null,
        price: null,
      });
      setItem([...items]);
      console.log("row count increase");
    }
  };

  const handleChange = (e, index) => {
    let clone = itemDetail[index];
    clone[e.target.name] = e.target.value;
    itemDetail[0] = clone;
    setItem([...itemDetail]);
  };
  let { id, productDes, Qty, Unit, price } = itemDetail;

  const calculateAmount = () => {
    console.log(vendor.state,"#############################")
    let sum = 0;
    for (let i = 0; i < itemDetail.length; i++) {
      let num = itemDetail[i].Qty * itemDetail[i].price;
      sum += num;
    }
    if (vendor.state.includes("Punjab")) {
      let s = (sum * 6) / 100;
      let c = (sum * 6) / 100;
      let grand = s + c + sum;
      setAmount({ sgst: s, cgst: c,igs:null,grandtotal: grand });
     
    } else {
       let ig = (sum * 12) / 100;
      let total = ig + sum;
      setAmount({ sgst: null, cgst: null, igst: ig, grandtotal: total });
    }
  };

  return (
    <>
      {/* <div className="main" > */}
      {rowCount &&
        rowCount.map((obj, index) => {
          return (
            <tr style={{ backgroundColor: "#c2c9d7" }} key={index}>
              {!flag ? (
                <td>
                  <input
                    placeholder=" product id"
                    name="id"
                    value={id}
                    onChange={(e) => {
                      handleChange(e, index);
                    }}
                  />
                </td>
              ) : (
                <td>{id}</td>
              )}
              <td>
                <select
                  value={productDes}
                  class="form-select"
                  aria-label="Default select example"
                  name="productDes"
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                >
                  <option selected> select item</option>
                  {option &&
                    option.map((obj, i) => {
                      return (
                        <option value={obj} key={i}>
                          {obj}
                        </option>
                      );
                    })}
                </select>
              </td>
              <td>
                <input
                  name="Qty"
                  placeholder=" quantity"
                  id="Qty"
                  value={Qty}
                  onChange={(e) => {
                    handleChange(e, index);
                    // calculateAmount()
                  }}
                />
              </td>
              <td>
                <input
                  placeholder="unit"
                  value={Unit}
                  name="Unit"
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                />
              </td>
              <td>
                <input
                  name="price"
                  value={price}
                  placeholder=" Price"
                  onChange={(e) => {
                    handleChange(e, index);
                    // calculateAmount()
                  }}
                />
              </td>
            </tr>
          );
        })}

      {/* </div> */}

      <div className="grand-total" style={{ display: "grid" }}>
        <label>SGST{"     " + sgst}</label>
        <label>CGST{"   " + cgst}</label>
        <label>IGST{"   " + igst}</label>
        <label>Grand Total{"   " + grandtotal}</label>
      </div>
      {/* <Purchasetotal finaleamt={finalAmt}/> */}
      <button
        onClick={() => {
          increaseRowCount();
          // console.log(finalAmt)
        }}
      >
        Add Item
      </button>
      <button
        onClick={() => {
          // console.log(finalAmt,"###############");
          calculateAmount();
          if (flag === false) {
            setFlag(true);
          } else {
            setFlag(false);
          }
        }}
      >
        Final Amount
      </button>
      {/* <button onClick={() => console.log(itemDetail)}>Try</button> */}
    </>
  );
}
