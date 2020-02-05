import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './css/LiteMol-plugin.css';
import MainView, { MainViewProps } from './view/mainView';
import StatsView from './view/statsView';
import Navbar from './navbar/navbar';

const App = () => {
  const [isMain, setIsMain] = useState(true);
  const [isStats, setIsStats] = useState(false);
  const [sequence, setSequence] = useState('');
  const [type, setType] = useState('');
  const [minAngle, setMinAngle] = useState('');
  const [maxAngle, setMaxAngle] = useState('');
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

  const mainViewProps: MainViewProps = {
    sequence,
    type,
    minAngle,
    maxAngle,
    setSequence,
    setType,
    setMinAngle,
    setMaxAngle
  }


  return (
    <div id="app">
      <Navbar
      handleMain={handleMain}
      handleStats={handleStats}
      />
      {isMain ? <MainView {...mainViewProps} /> : null}
      {isStats ? <StatsView/> : null}
    </div>
  )
}

export default App;