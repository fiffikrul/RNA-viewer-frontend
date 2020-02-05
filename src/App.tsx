import React, { useState } from 'react';
import './App.css';
import './css/LiteMol-plugin.css';
import MainView, { MainViewProps } from './view/mainView';
import StatsView from './view/statsView';
import Navbar from './navbar/navbar';
import { Row } from './table/compare'

var globalRows = [
  {
    url: 'https://files.rcsb.org/view/1ATV.cif',
    format: 'cif',
    molecule_id: '1ATV',
    sequence: "AAAAAGGUUGA",
    angle: "",
    type: 2
  },
  {
    url: 'https://files.rcsb.org/view/1ATW.cif',
    format: 'cif',
    molecule_id: '1ATW',
    sequence: "AAAAAGGUUGA",
    angle: "",
    type: 2
  }
]

const App = () => {
  const [isMain, setIsMain] = useState(true);
  const [isStats, setIsStats] = useState(false);
  const [sequence, setSequence] = useState('');
  const [type, setType] = useState('');
  const [minAngle, setMinAngle] = useState('');
  const [maxAngle, setMaxAngle] = useState('');
  const [isCompare, setCompare] = useState();
  const [comparison, setComparison] = useState();

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
    setCompare(false);
    setIsStats(true);
  }

  const handleCompare = () => {
    setAllIsClosed();
    setCompare(true);
    setIsStats(true);
  }

  const handleAddComparison = (row: Row) => {
    if (typeof (comparison) !== 'undefined') {
      if (comparison.length == 2) {
        comparison.shift();
      }
      comparison.push(row);
    } else {
      const newComparisonList: Row[] = [];
      newComparisonList.push(row);
      setComparison(newComparisonList);
    }
  }

  const mainViewProps: MainViewProps = {
    sequence,
    type,
    minAngle,
    maxAngle,
    setSequence,
    setType,
    setMinAngle,
    setMaxAngle,
    handleAddComparison
  }


  return (
    <div id="app">
      <Navbar
        handleMain={handleMain}
        handleStats={handleStats}
        handleCompare={handleCompare}
      />
      {isMain ? <MainView {...mainViewProps} /> : null}
      {isStats ? <StatsView compare={isCompare} comparison={comparison} /> : null}
    </div>
  )
}

export default App;