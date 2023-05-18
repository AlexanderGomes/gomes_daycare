import React from "react";
import { InvoiceCard } from "../../components";
import "./Profile.css";

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

export default Profile;
