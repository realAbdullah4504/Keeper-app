import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = process.env.REACT_APP_BASE_URL;
function Loginpage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([{}]);

  function handleChange(e) {
    const val = e.target.value;
    const nam = e.target.name;

    setUser({
      ...user,
      [nam]: val,
    });

    // name === "title" ? setNote({ title: val }, { content: note.content } ):
    //    name === "content" && setNote({ title: note.title }, { content: val })
  }

  // function onSubmit(e) {
  //   e.preventDefault();

  //   axios.post('http://localhost:5000/users', user)
  //     .then(function (response) {

  //       if(response.data)
  //       //window.location.href = '/notes';
  //       navigate('/notes');
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //}
  useEffect(() => {
    axios
      .get(`${url}/users`)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
        //console.log(exercises);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    const isUserValid = users.some(
      (u) => u.username === user.username && u.password === user.password
    );
    if (isUserValid) navigate("/notes");
  }

  return (
    <div onSubmit={onSubmit} className="text-center container my-5">
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

        <label for="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={user.email}
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required="true"
          autofocus=""
        />

        <label for="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={user.password}
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required="true"
        />

        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Loginpage;
