import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './css/LiteMol-plugin.css';
import MainView from './view/mainView';
import StatsView from './view/statsView';
import Navbar from './navbar/navbar';


const App = () => {
  const [isMain, setIsMain] = useState(true);
  const [isStats, setIsStats] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const setAllIsClosed = () => {
    setIsMain(false);
    setIsStats(false);
  }

  const handleMain = () => {
    setAllIsClosed();
    setIsMain(true);
  }

  const handleStats = () => {
    setAllIsClosed();
    setIsStats(true);
  }

  // const tryLogin = () => {
  //   setLoading(true);
  //   setLogin(true);
  //   setLoading(false);
  //   closeLoginModal();

  //   // ZMIENIĆ URL NA IP/domene serwera
  //   axios.get(`localhost:8080/login?username=${name}&password=${password}`, {})
  //     .then((response) => {
  //       if (response.data == 1)
  //         setLogin(true);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       //setLogin(false);
  //       //setLoading(false);
  //     });
  // }

  return (
    <div id="app">
      <Navbar
      handleMain={handleMain}
      handleStats={handleStats}
      />
      {isMain ? <MainView /> : null}
      {isStats ? <StatsView/> : null}
    </div>
  )
}

export default App;