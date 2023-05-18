import React, { useEffect, useState } from "react";
import "./UserCard.css";

const UserCard = ({
  name,
  email,
  paidBalance,
  unpaidBalance,
  userId,
  CheckFc,
  getList,
  activeCommand,
}) => {
  const [update, setUpdate] = useState(false);
  const [message, setMessage] = useState(null);
  const [popUp, setPopUp] = useState(false);
  const [kids, setKids] = useState(1);

  const data = {
    name,
    email,
    userId,
    kids: kids,
  };

  const Click = async () => {
    try {
      const res = await CheckFc(data);
      if (res.status === 200) {
        setUpdate(true);
      }
    } catch (error) {
      setPopUp(false)
      setMessage(error.response.data.message);
    }
  };

  useEffect(() => {
    if (update) {
      getList();
    }

    return () => {
      setUpdate(false);
    };
  }, [update]);

  return (
    <div>
      {popUp && (
        <div>
          <div className="overlay"></div>
          <div className="popup">
            <h3>Number of Kids:</h3>
            <input
              type="number"
              min="1"
              value={kids === 0 ? "" : kids}
              onChange={(e) => setKids(Number(e.target.value))}
            />
            <button onClick={Click}>Check</button>
          </div>
        </div>
      )}
      <div className="user-card">
        <p className="error size">{message}</p>
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
        {activeCommand === "check-in" ? (
          <>
            <button className="check__btn" onClick={() => setPopUp(true)}>
              check
            </button>
          </>
        ) : (
          <button className="check__btn" onClick={Click}>
            check
          </button>
        )}
      </div>
    </div>
  );
};

export default UserCard;
