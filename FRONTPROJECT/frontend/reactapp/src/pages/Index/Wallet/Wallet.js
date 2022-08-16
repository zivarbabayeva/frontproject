
import React from "react";
import { useState, useEffect } from "react";
import UserList from "./UserList/UserList";

const Wallet = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = "https://backend-wallet-api.simplexcc.com/wallet/merchant/v2";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.users);
        setUsers(json.users);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <section className="wallet__page__intro"></section>
      <UserList users={users} />
    </div>
  );
};

export default Wallet;