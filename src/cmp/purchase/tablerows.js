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
    finalDiscountPer:null,
    finalDiscount:null,
    grandtotal: null,
  });
  const [itemDetail, setItem] = useState([
    { id: null, productDes: null, Qty: null, Unit: null, price: null,discountPer:null,discount:null},
  ]);
  const [finalAmt, setFinalAmt] = useState(null);
  const [subTotal, setSubTotal] = useState(null);
  let { sgst, cgst, igst,finalDiscountPer,finalDiscount,grandtotal } = amount;
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
        discountPer: null,
        discount: null,
      });
      setItem([...items]);
      // console.log("row  count increase");
    }
  };

  const handleChange = (e, index) => {
    let clone = itemDetail[index];
    clone[e.target.name] = e.target.value;
    itemDetail[index] = clone;
    setItem([...itemDetail]);
    // console.log(itemDetail[0].className)
  };
  let { id, productDes, Qty, Unit, price,discountPer,discount} = itemDetail;

  const calculateAmount = () => {
    // console.log (itemDetail)
    let sum = 0;
    let disc = 0;
    let index=null;
    let tdiscount=0
    

    for (let i = 0; i <= itemDetail.length - 1; i++) {
      //  console.log(itemDetail[i].price,"  ",itemDetail[i].Qty,"  ",i)
      sum += itemDetail[i].price * itemDetail[i].Qty;
      if(itemDetail[i].discountPer!==null || itemDetail[i].dicount!==undefined)
      {
        disc=(itemDetail[i].discountPer*(itemDetail[i].price * itemDetail[i].Qty))/100
        
        let clone=itemDetail
        clone[i].discount=disc
        setItem([...clone])
        console.log(itemDetail,"filter discount amount")
      }
      tdiscount+=disc
      
    }
    setSubTotal(sum);
    // console.log(sum,"finally")
    // console.log('clicked')
    // console.log(vendor,"props")
    if (vendor.state === "Punjab") {
      let sumAfterDisc=sum-tdiscount
      let stateGst = (sumAfterDisc * 6) / 100;
      let CenterGst = (sumAfterDisc * 6) / 100;
      let grandTotal = sumAfterDisc + stateGst + CenterGst;

      // console.log(itemDetail,"item deltails")
      // let classNameAmt=(sum*className)/100

      setAmount({
        ...amount,
        sgst: stateGst,
        cgst: CenterGst,
        igst: null,
        finalDiscount:tdiscount,
        grandtotal: grandTotal,
      });
    } else {
      // console.log(itemDetail,"item deltails")
      let sumAfterDisc=sum-tdiscount
      let integratedGst = (sumAfterDisc * 12) / 100;
      let grandTotal = sumAfterDisc + integratedGst
     

      // setTimeout(()=>{
      //   console.log(classNameAmt,"total className")
      // },2000)

      setAmount({
        ...amount,
        sgst: null,
        cgst: null,
        finalDiscount:tdiscount,
        igst: integratedGst,
        
        grandtotal: grandTotal,
      });
    }
  };
  

  return (
    <>
      {/* <button onClick={()=>console.log(itemDetail,"item details")}>Try</button> */}
      {/* <div className="main" > */}
      {rowCount &&
        rowCount.map((obj, index) => {
          return (
            <tr style={{ backgroundColor: "#c2c9d7" }} key={index}>
              {!flag ? (
                <td>
                  <input
                    style={{width:"60px"}}
                    placeholder="id"
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
                style={{width:"100%"}}
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
                style={{width:"60px"}}
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
                 style={{width:"60px"}}
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
                   style={{width:"90px"}}
                  name="price"
                  value={price}
                  placeholder=" Price"
                  onChange={(e) => {
                    handleChange(e, index);
                    calculateAmount();
                  }}
                />
              </td>
              <td>
                <input
                 style={{width:"60px"}}
                 value={discountPer}
                 name="discountPer"
                  placeholder=" discount %"
                  onChange={(e) => {
                    handleChange(e, index);
                    calculateAmount();
                  }}
                />
              </td>
              <td>
                <input
                 style={{width:"100px"}}
                  // name="className"
                  value={itemDetail[index].discount}
                  placeholder="total discount"
                  onChange={(e) => {
                  //  setAmount({...amount,discount:e.target.value})

                  }}
                />
              </td>
            </tr>
          );
        })}

      {/* </div> */}

      <div className="grand-total" style={{ display: "grid" }}>
        <label>Sub-Total{"     " + subTotal}</label>
        {/* <label>Discount %{"     " + finalDiscountPer}</label> */}
        <label>Discount{"     " + finalDiscount}</label>
        <label>SGST{"     " + sgst}</label>
        <label>CGST{"   " + cgst}</label>
        <label>IGST{"   " + igst}</label>
        <label>Grand Total{"   " +grandtotal}</label>
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
        }}
      >
        Final Amount
      </button>
      <button onClick={() =>calculateAmount()}>Submit</button>
    </>
  );
}
