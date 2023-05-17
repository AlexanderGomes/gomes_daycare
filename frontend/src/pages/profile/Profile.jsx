import React from "react";
import "./Profile.css";

// past paid invoices - sort by date
// current unpaid balance
// current unpaid invoices
// design of the invoices

const Profile = () => {
  return (
    <div className="container">
      <Search />
      <div className="content">
        <InvoiceCard
          userName="John Doe"
          email="john@example.com"
          price="$100"
          daycareName="Gomes Daycare"
          numberOfKids={2}
        />
        <InvoiceCard
          userName="John Doe"
          email="john@example.com"
          price="$100"
          daycareName="Gomes Daycare"
          numberOfKids={2}
        />
        <InvoiceCard
          userName="John Doe"
          email="john@example.com"
          price="$100"
          daycareName="Gomes Daycare"
          numberOfKids={2}
        />
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search by date (YYYY-MM-DD)" />
      <div className="bottom__group">
        <select>
          <option value="all">All</option>
          <option value="paid">Paid</option>
          <option value="unpaid">Unpaid</option>
        </select>
        <button className="btn__search">Search</button>
      </div>
    </div>
  );
};

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

export default Profile;
