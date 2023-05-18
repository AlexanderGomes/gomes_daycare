import React, { useEffect, useState } from "react";
import "./InvoiceCard.css";
import axios from "axios";

const InvoiceCard = ({
  name,
  email,
  price,
  daycareName,
  numberOfKids,
  getUnpaidInvoices,
  activeCommand,
  invoiceId,
  userId,
}) => {
  const [update, setUpdate] = useState(false);
  const [message, setMessage] = useState(null);

  const DeleteInvoice = async () => {
    try {
      const res = await axios.delete(`/invoice/delete/${invoiceId}/${userId}`);
      if (res.status === 200) {
        setUpdate(true);
      }
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  useEffect(() => {
    if (update) {
      getUnpaidInvoices();
    }

    return () => {
      setUpdate(false);
    };
  }, [update]);

  return (
    <div className="invoice-card">
      <p onClick={DeleteInvoice}>delete</p>
      <h2>Invoice</h2>
      <div className="user-info">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </div>
      <div className="invoice-details">
        <p>
          <strong>Daycare Name:</strong> {daycareName}
        </p>
        <p>
          <strong>Number of Kids:</strong> {numberOfKids}
        </p>
        <p>
          <strong>Price:</strong> {price}
        </p>
      </div>
    </div>
  );
};

export default InvoiceCard;
