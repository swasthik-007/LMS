import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React from "react";
import { FaRupeeSign } from "react-icons/fa6";

function CheckoutForm({ amount }) {
  // const stripe=useStripe();
  // const elements=useElements();

  // const handleSubmit=async(event)=>{
  //   event.preventDefault();
  //   if(elements==null){
  //     return;
  //   }
  //   const{error:submitError}=await elements.submit();
  //   if(submitError){
  //     return;
  //   }

  //   const res = await fetch("/api/create-subscription",{
  //     method:'POST',
  //     body:JSON.stringify({
  //       amount:amount
  //     })
  //   });

  //   const secretKey=await res.json();
  //   console.log(secretKey);

  //   const {error} = await stripe.confirmPayment({
  //     clientSecret:secretKey,
  //     elements,
  //     confirmParams:{
  //       return_url:"http://localhost:3000/"
  //     }
  //   })
  // }
  return (
    <div className="flex flex-col justify-center items-center w-full mt-6">
      <h2 className="m-5 font-bold flex items-center">
        Amount to Pay :&nbsp;
        <FaRupeeSign className="text-sm" /> {amount}
      </h2>
      <form className="max-w-md">
        <PaymentElement />
        <button className="w-full bg-primary text-white p-2 rounded-lg mt-2">
          Pay
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
