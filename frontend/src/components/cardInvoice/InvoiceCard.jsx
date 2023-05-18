import React from 'react'
import './InvoiceCard.css'

const InvoiceCard = ({ userName, email, price, daycareName, numberOfKids }) => {
  return (
    <div className="invoice-card">
      <h2>Invoice</h2>
      <div className="user-info">
        <p>
          <strong>Name:</strong> {userName}
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


export default InvoiceCard