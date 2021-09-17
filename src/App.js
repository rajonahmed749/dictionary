import React from "react";
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch as ChangePath,
  Route,
  Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';

function App() {
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
    <Router>
      <div style={{
        minHeight: "100vh",
        backgroundColor: LightMode ? "#fff" : '#282c34',
        color: LightMode ? "black" : 'white',
        transition: "all 0.5s linear"
      }}>
        <div className="menubar" style={{ top: 0, paddingTop: 10 }}>
          <div>
            <Link to="/"><i style={{ color: LightMode ? "black" : "white" }} className="fas fa-home icons fa-lg"></i></Link>
            <Link to="/profile"><i style={{ color: LightMode ? "black" : "white" }} className="fas fa-chalkboard-teacher icons fa-lg"></i></Link>
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
          <Route path="/profile">
            <Profile />
          </Route>
        </ChangePath>
      </div>
    </Router>
  );
}

export default App;
