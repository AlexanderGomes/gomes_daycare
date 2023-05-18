import React, { useState } from "react";
import { InvoiceCard } from "../../components";
import "./Checkout.css";

const Checkout = () => {
  const [invoice, setInvoice] = useState();

  return (
    <div className="check__main">
      <div className="check__top">
        <p>Total: $182</p>
        <PayBtn />
      </div>
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
    </div>
  );
};

const PayBtn = () => {
  return <button className="btn__pay">checkout</button>;
};

export default Checkout;
