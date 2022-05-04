import { Link } from "react-router-dom";
import axios from "axios";

function deleteuser(user: any) {
  axios
    .delete("http://localhost:3004/api/user/deleteuser", {
      data: { source: user },
    })
    .then((res) => {
      console.log(user._id);
      alert(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function SingleUser({ user }: { user: any }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3">
          <ul className="list-group">
            <li className="list-group-item">{user._id}</li>
            <li className="list-group-item">{user.name}</li>
            <li className="list-group-item">{user.email}</li>
            <li className="list-group-item">{user.telephone}</li>
          </ul>
          <Link to={`/edituser/${user._id}`}>
            <li key={user._id} className="btn btn-sucess">
              Editar
            </li>
          </Link>
          <button
            className="btn btn-success"
            onClick={() => {
              deleteuser(user);
            }}
          >
            Borrar
          </button>
          <hr className="mt-4"></hr>
        </div>
      </div>
    </div>
  );
}

export default SingleUser;
