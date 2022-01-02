import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getFromLS, setToLs } from "../utils/storage";


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    const allUsers = getFromLS("allUsers");

    const addUser = () => {

      if (password.trim() !== confirmPassword.trim()) {
        setError("Passwords do not match!!!");
        setConfirmPassword('')
      } else {
        const newList = allUsers
          ? allUsers.concat({ name, email, password })
          : [{ name, email, password }];
        setToLs("allUsers", newList);
        navigate("/login");
      }
    }

    const userExists = allUsers ? allUsers.filter((eachUser) => eachUser.email === email) : []

    if (userExists.length > 0) {
      setError("Email already exists!!");
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setName('')
    } else {
      addUser()
    }
  };

  return (
    <React.Fragment>
      <div className="signup">
        <h2>Sign up</h2>
        {error && error.length > 0 && <p>{error}</p>}
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label>Name:<br /></label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              name="name"
              value={name}
              required
            />
          </div>
          <div>
            <label>Email:<br /></label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
              required
            />
          </div>
          <div>
            <label>Password:<br /></label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
              required
              minLength={3}
            />
          </div>
          <div>
            <label>Confirm Password:<br /></label>
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              name="confirmPassword"
              required
              minLength={3}
            />
          </div>
          <button className="btn" type="submit">
            SIGN UP
          </button>
        </form>

        <div className="toSignIn">
          <p> Already signed up?</p>
          <Link className="btn-link" to="/login">
            login
          </Link>
        </div>

      </div>
    </React.Fragment>
  );
};

export default Signup;
