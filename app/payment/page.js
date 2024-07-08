"use client";

import { Fullscreen } from "lucide-react";
import Image from "next/image";

// import { useSearchParams } from "next/navigation";
// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./CheckoutForm"; // Corrected import path

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);

function Payment() {
  // const searchParams = useSearchParams();
  // const amount = searchParams.get("amount");
  // const [clientSecret, setClientSecret] = useState("");

  // useEffect(() => {
  //   // Fetch the clientSecret from your backend
  //   fetch("/api/create-payment-intent", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ amount: Math.round(amount * 100) }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, [amount]);

  // const options = {
  //   clientSecret: clientSecret,
  //   appearance: { theme: "stripe" },
  // };

  return (
    // clientSecret && (
    //   <Elements stripe={stripePromise} options={options}>
    //     <CheckoutForm amount={amount} />
    //   </Elements>
    // )

    <div className="relative w-screen h-screen">
      <Image src="/error.jpg" alt="error" layout="fill" objectFit="cover" />
      <p className="absolute top-4 left-4 text-white text-4xl font-bold">
        The Payment Integration has not yet been implemented.
        <br /> Access is limited to free tier versions only.
      </p>
    </div>
  );
}
export default Payment;
