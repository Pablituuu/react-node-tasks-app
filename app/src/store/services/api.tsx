import axios from "axios";
import uniquid from "uniqid";

export function addUser(name: any, email: any, telephone: any, iduser: any) {
  var user = {
    name,
    email,
    telephone,
    iduser,
  };

  axios
    .post("http://localhost:3004/api/user/adduser", user)
    .then((res: any) => {
      alert(res.data);
    })
    .then((err: any) => {
      console.log(err);
    });
}
