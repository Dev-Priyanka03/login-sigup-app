import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { getFromLS, setToLs } from '../utils/storage';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const userCtx = useContext(UserContext);
  const [user, setUser] = userCtx;

  const navigate = useNavigate()


  const onSubmit = (e) => {
    e.preventDefault();
    setError('');
    const userList = getFromLS('allUsers');
    const userExists = userList && userList.find(eachUser => eachUser.email === email);

    console.log(userExists);

    const loginUser = () => {
      if (userExists.password === password) {
        setUser({ name: userExists.name, email, password })
        setToLs('activeUser', { name: userExists.name, email, password })
        navigate('/dashboard');
      } else {
        setError('Incorrect Password!!')
      }
    }

    if (!userExists) {
      setError("User does not exists! Please Sign up")
    } else {
      loginUser()
    }
  }
  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <div className='signup'>
          <h2>Sign In</h2>
          {error.length > 0 && <p>{error}</p>}
          <div className='form'>
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
                name="password"
                value={password}
                required
              />
            </div>
            <button className='btn' type='submit'>
              Sign In
            </button>
          </div>
          <div className='toSignUp'>
            <p>New User</p>
            <Link className='btn-link' to="/signup">Sign up</Link>
          </div>
        </div>
      </form>
    </React.Fragment>
  )
}

export default Login;