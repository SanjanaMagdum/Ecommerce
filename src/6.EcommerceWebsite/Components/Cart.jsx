
import { useState } from "react";
import "./Cart.css"

import { useEffect } from "react";
import GooglePayButton from "@google-pay/button-react";
import { Link } from "react-router-dom";
const Cart = ({cart,setCart}) => {
  const[price,setPrice]=useState(0)
  
  
  function handlePrice(){
    let ans=0
    cart.map((item)=>ans+=item.price*item.amount);
    setPrice(ans)
  }

  useEffect(()=>{
    handlePrice();
  })

  function handleAdd(id){
    const newData=cart.map((item)=>{
      if(item.id==id){
        return {...item,amount:item.amount+1};
      }
      return item;
    })
    setCart(newData);
  }

  function handleSub(id){
    const newData=cart.map((item)=>{
      if(item.id==id){
        return {...item,amount:item.amount-1};
      }
      return item;
    })
    setCart(newData);
  }

 


  function handleRemove(id){
    const del = cart.filter(i=>id!==i.id)
    setCart(del);
    
  }
  
  async function checkout(e){
    e.preventDefault();
    console.log("work");
    try{
      const res=await fetch("http://localhost:8000/checkout",{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body:JSON.stringify({
          item: [
            {
              id:'1',
              quantity:1,
              price:1000,
              name:'Laptop'
            }
          ]
        })
      })
      const data=await res.json();
      window.location=data.url;
    } catch(err) {
      console.log(err);
    }
  }
  

  return (
    <div className='cart'>
      
      <table>
        <thead>
          <tr>
            <td><b>Image</b></td>
            <td><b>Name</b></td>
            <td><b>Incre</b></td>
            <td><b>Qty</b></td>
            <td><b>Decr</b></td>
            <td><b>TotalPrice</b></td>
            <td><b>Remove</b></td>


          </tr>

        </thead>
        <tbody>
          {cart.map((item)=>{

            return(
              
              <tr key={item.id}>
              <td className="th2"><Link to={`/about/${item.id}`}><img src={item.image} height={'50px'} width={'50px'}></img></Link></td>
              <td className="th2"><b>{item.title}</b></td>
              <td className="th2"><button onClick={() => handleAdd(item.id)}>+</button></td>
              <td className="th2">{item.amount>=1?item.amount:0}</td>
              <td className="th2" onClick={() => handleSub(item.id)}><button>-</button></td>
              <td className="th2">{item.price*item.amount>0?item.price*item.amount:0}</td>
              <td className="th2"><button onClick={()=>handleRemove(item.id)}>Delete</button></td>
              
            </tr>
            
            
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total Amount</td>
            <td colSpan={5}>{price>0?price:0} Rs</td>
            <td></td> 
            <td></td>
            <td></td>
             <td></td> 
            <td><button>
            <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/>
</button> </td>
          </tr>
        </tfoot>
      </table>
      </div>
    
  )
}

export default Cart
