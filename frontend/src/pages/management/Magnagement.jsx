import React, { useEffect, useState } from "react";
import { InvoiceCard, UserCard, SearchBar, Check } from "../../components";
import "./Management.css";
import axios from "axios";

const Magnagement = () => {
  const [activeCommand, setActiveCommand] = useState("check-in");
  const [unpaidInvoices, setUnpaidInvoices] = useState([]);

  const handleCommandClick = (command) => {
    setActiveCommand(command);
  };

  const getUnpaidInvoices = async () => {
    try {
      const res = await axios.get("/invoices/unpaid");
      setUnpaidInvoices(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (activeCommand === "invoices") {
      getUnpaidInvoices();
    }
  }, [activeCommand]);

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
        <div>
          <SearchBar />
          {unpaidInvoices.map((invoices) => (
            <div className="invoice__management" key={invoices._id}>
              <InvoiceCard
                name={invoices.name}
                email={invoices.email}
                price={invoices.price}
                daycareName={invoices.daycareName}
                numberOfKids={invoices.kids}
                invoiceId={invoices._id}
                getUnpaidInvoices={getUnpaidInvoices}
                activeCommand={activeCommand}
                userId={invoices.userId}
              />
            </div>
          ))}
        </div>
      )}
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
