import React, { useEffect, useState } from "react";
import DumbApi from "./DumbApi";

export default function SmartApi() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("https://api.github.com/users")
        .then((response) => response.json())
        .then((data) => setUser(data));
    };
    fetchUser();
  }, []);

  return <DumbApi users={users}></DumbApi>;
}
