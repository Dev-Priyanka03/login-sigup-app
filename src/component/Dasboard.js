import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { removeItemFromLS } from '../utils/storage';

const Dashboard = () => {
  const userCtx = useContext(UserContext);
  const [user, setUser] = userCtx;
  const { name } = user;

  const navigate = useNavigate();

  const logout = () => {
    setUser(null)
    removeItemFromLS('activeUser')
    navigate('/login')
  }
  return (
    <div className='navbar'>
      <h4>Dashboard</h4>
      <ul className='nav-right'>
        <li>
          <h4 className='link'>Hi {name} </h4>
        </li>
        <li>
          <button className='btn' onClick={logout}> Logout</button>
        </li>
      </ul>
    </div>
  )
}

export default Dashboard;  