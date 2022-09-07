import React from "react";

import { useState, useEffect } from "react";

import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    axios({
      method: "get",
      url: `/api/admin/finduser/${id}`,
    }).then((res) => setFormData(res.data));
  }, []);

  const { name, email } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = await axios.post(`/api/admin/editUser/${id}`, { name, email });

    navigate("/admin");
  };

  return (
    <>
      <section className="heading">
        <h1>Edit User</h1>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
export default EditUser;
