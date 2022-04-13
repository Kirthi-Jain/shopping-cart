import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const handleDelete = async _id => {
  const res = await fetch(`http://localhost:7000/delete/${_id}`, {
    method: "DELETE",
    // , headers: {
    //   "Content-Type": "application/json",
    // },
  });
  alert(await res.json());
};

export default () => {
  const [getUserData, setUserData] = useState([]),
    getdata = async () => {
      const res = await fetch("http://localhost:7000/getdata", {
          method: "GET",
          // ,headers: {
          //   "Content-Type": "application/json",
          // },
        }),
        { status, json } = res;
      if (status == 422) {
        alert(await json());
      } else if (status == 201) {
        setUserData(await json());
      }
    };
  useEffect(getdata, []);
  return (
    <div className="mt-5 container">
      <div className="add_btn mb-2">
        <NavLink className="btn btn-primary" to="/register">
          Add Data
        </NavLink>
      </div>

      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">DOB</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Photo URL</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {getUserData.map((element, i) => (
            <tr key={element._id}>
              <th scope="row">{i + 1}</th>
              <td>{element.name}</td>
              <td>{element.date}</td>
              <td>{element.email}</td>
              <td>{element.address}</td>
              <td>{element.photoURL}</td>
              <td className="d-flex justify-content-around">
                <NavLink
                  className="btn btn-warning"
                  to={`/edit/${element._id}`}
                >
                  Edit
                </NavLink>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(element._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
