import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signup';
import Dashboard from './component/Dasboard';
import Navbar from './component/Navbar';
import { getFromLS } from './utils/storage';
import { UserContext } from './context/userContext';

const App = () => {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    const activeUser = getFromLS('activeUser');
    if (activeUser) {
      console.log(activeUser);
      setUser(activeUser)
    }
  }, [])

  return (
    <Router>
      <UserContext.Provider value={[user, setUser]}>
        {!user
          ? <React.Fragment>
            <Navbar />
            <div className="content">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Navigate to='/login' />} />
              </Routes>
            </div>
          </React.Fragment>
          : <React.Fragment>
            <Routes>
              <Route path={"/dashboard"} element={<Dashboard />} />
              <Route path="*" element={<Navigate to='/dashboard' />} />
            </Routes>

          </React.Fragment>
        }
      </UserContext.Provider>
    </Router>
  );
}


export default App;
