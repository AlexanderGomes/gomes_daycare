import React, { useState } from "react";
import { InvoiceCard } from "../../components";
import "./Management.css";

const Magnagement = () => {
  const [activeCommand, setActiveCommand] = useState("check-in");

  const handleCommandClick = (command) => {
    setActiveCommand(command);
  };

  return (
    <div>
      <MagnagementBar
        activeCommand={activeCommand}
        handleCommandClick={handleCommandClick}
      />
      {(activeCommand === "check-in" && (
        <Check activeCommand={activeCommand} />
      )) ||
        (activeCommand === "check-out" && (
          <Check activeCommand={activeCommand} />
        ))}
      {activeCommand === "invoices" && (
        <div className="invoice__management">
          <SearchBar />
          <InvoiceCard />
          <InvoiceCard />
          <InvoiceCard />
          <InvoiceCard />
          <InvoiceCard />
        </div>
      )}
    </div>
  );
};

const Check = ({ activeCommand }) => {
  return (
    <div>
      {activeCommand === "check-in" ? (
        <UserCard
          name="alex"
          email={"sander@gmail.com"}
          paidBalance={30}
          unpaidBalance={402}
        />
      ) : (
        <UserCard
          name="alex"
          email={"check-out@gmail.com"}
          paidBalance={30}
          unpaidBalance={402}
        />
      )}
    </div>
  );
};

const UserCard = ({ name, email, paidBalance, unpaidBalance }) => {
  return (
    <>
      <SearchBar />
      <div className="user-card">
        <h2 className="user-card__name">{name}</h2>
        <p className="user-card__email">{email}</p>
        <div className="user-card__balances">
          <div className="user-card__balance user-card__balance--paid">
            <span className="user-card__balance-label">Paid Balance:</span>
            <span className="user-card__balance-amount">${paidBalance}</span>
          </div>
          <div className="user-card__balance user-card__balance--unpaid">
            <span className="user-card__balance-label">Unpaid Balance:</span>
            <span className="user-card__balance-amount">${unpaidBalance}</span>
          </div>
        </div>
      </div>
    </>
  );
};

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        className="search-bar__input"
      />
      <button className="search-bar__button">Search</button>
    </div>
  );
};

const MagnagementBar = ({ activeCommand, handleCommandClick }) => {
  return (
    <div className="management-bar">
      <button
        className={`management-bar__button ${
          activeCommand === "check-in" && "active"
        }`}
        onClick={() => handleCommandClick("check-in")}
      >
        Check-in
      </button>
      <button
        className={`management-bar__button ${
          activeCommand === "check-out" && "active"
        }`}
        onClick={() => handleCommandClick("check-out")}
      >
        Check-out
      </button>
      <button
        className={`management-bar__button ${
          activeCommand === "code" && "active"
        }`}
        onClick={() => handleCommandClick("code")}
      >
        Code
      </button>
      <button
        className={`management-bar__button ${
          activeCommand === "invoices" && "active"
        }`}
        onClick={() => handleCommandClick("invoices")}
      >
        Invoices
      </button>
    </div>
  );
};

export default Magnagement;
