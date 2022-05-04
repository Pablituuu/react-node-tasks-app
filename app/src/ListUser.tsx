import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";

function ListUser() {
  const [datauser, setDatauser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/api/user/listuser")
      .then((res) => {
        setDatauser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const listusers = datauser.map((user) => {
    return (
      <div>
        <SingleUser user={user}></SingleUser>
      </div>
    );
  });

  return <div>{listusers}</div>;
}

export default ListUser;
