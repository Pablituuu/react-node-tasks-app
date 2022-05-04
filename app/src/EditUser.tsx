import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditUser() {
  const params = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:3004/api/user/getdatauser", {
        iduser: params.iduser,
      })
      .then((res) => {
        const datauser = res.data[0];
        setName(datauser.name);
        setEmail(datauser.email);
        setTelephone(datauser.telephone);
      });
  }, []);

  function editUser() {
    const updateuser = {
      name: name,
      email: email,
      telephone: telephone,
      iduser: params.iduser,
    };
    axios
      .put("http://localhost:3004/api/user/updateuser", updateuser)
      .then((res) => {
        alert(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3">
          <h2>Edit User</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="nane" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="from-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="from-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="telephone" className="form-label">
              Telephone
            </label>
            <input
              type="text"
              className="from-control"
              value={telephone}
              onChange={(e) => {
                setTelephone(e.target.value);
              }}
            ></input>
          </div>
          <button onClick={editUser} className="btn btn-success">
            Save User
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
