import React, { useState } from "react";
import uniquid from "uniqid";
import axios from "axios";
import { addUser } from "./store/services/api";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelefphone] = useState("");
  const iduser = uniquid;

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3">
          <h2>Create new User</h2>
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
                setTelefphone(e.target.value);
              }}
            ></input>
          </div>
          <button
            onClick={() => addUser(name, email, telephone, iduser)}
            className="btn btn-success"
          >
            Save User
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
