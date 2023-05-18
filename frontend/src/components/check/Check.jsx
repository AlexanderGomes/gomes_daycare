import React, { useEffect, useState } from "react";
import { SearchBar, UserCard } from "../";
import axios from "axios";
import "./Check.css";

const Check = ({ activeCommand }) => {
  const [checkInList, setCheckInList] = useState([]);
  const [checkOutList, setCheckOutList] = useState([]);


  const getCheckInList = async () => {
    try {
      const res = await axios.get("/users/checkin");
      setCheckInList(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getCheckOutList = async () => {
    try {
      const res = await axios.get("/users/checkout");
      setCheckOutList(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (activeCommand === "check-in") {
      getCheckInList();
    } else {
      getCheckOutList();
    }
  }, [activeCommand]);

  const CheckIn = async (data) => {
    const res = await axios.post("/check-in", data);
    return res;
  };

  const CheckOut = async (data) => {
    const res = await axios.put("/check-out", data);
    return res;
  };

  return (
    <div>
      <SearchBar />
      {activeCommand === "check-in" ? (
        <>
          {checkInList?.map((users) => (
            <div key={users._id}>
              <UserCard
                name={users.name}
                email={users.email}
                paidBalance={users.paidBalance}
                unpaidBalance={users.unpaidBalance}
                userId={users._id}
                CheckFc={CheckIn}
                getList={getCheckInList}
                activeCommand={activeCommand}
              />
            </div>
          ))}
        </>
      ) : (
        <>
          {checkOutList.map((users) => (
            <div key={users._id}>
              <UserCard
                name={users.name}
                email={users.email}
                paidBalance={users.paidBalance}
                unpaidBalance={users.unpaidBalance}
                userId={users._id}
                CheckFc={CheckOut}
                getList={getCheckOutList}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Check;
