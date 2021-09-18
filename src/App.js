import React, { createContext } from "react";
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch as ChangePath,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';
import Footer from "./components/Footer/Footer";
import Learning from "./components/Learning/Learning";
import Login from "./components/Login/Login";
export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [LightMode, setLightMode] = useState(false);
  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div style={{
          minHeight: "100vh",
          backgroundColor: LightMode ? "#fff" : '#0a192f',
          color: LightMode ? "black" : 'white',
          transition: "all 0.5s linear"
        }}>
          <div className="menubar" style={{ top: 0, paddingTop: 10 }}>
            {/* Navbar */}
            <div>
              <Link to="/">
                <i style={{ color: LightMode ? "black" : "white" }} className="fas fa-home icons fa-lg"></i>
              </Link>
              <Link to="/addWord">
                <i style={{ color: LightMode ? "black" : "white" }} className="fas fa-chalkboard-teacher icons fa-lg"></i>
              </Link>
              <Link to="/learning">
                <i style={{ color: LightMode ? "black" : "white" }} className="fab fa-leanpub icons fa-lg"></i>
              </Link>
            </div>
            <div>
              <span>{LightMode ? "Dark" : "Light"} Mode</span>
              <DarkMode
                checked={LightMode} onChange={() => setLightMode(!LightMode)}
              />
            </div>
          </div>
          <ChangePath>
            <Route exact path="/">
              <Home LightMode={LightMode} />
            </Route>
            <Route path="/addWord">
              <Profile />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/learning">
              <Learning LightMode={LightMode} />
            </Route>
          </ChangePath>
          <Footer LightMode={LightMode} />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
