import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './css/LiteMol-plugin.css';
import MainView from './view/mainView';
import StatsView from './view/statsView';
import { Navbar } from './navbar/navbar';
import { MyModal } from './modal/modal';
import { LoginForm } from './loginForm/loginForm';
import { UploadForm } from './uploadForm/uploadForm';


const App = () => {
  const [isLogged, setLogin] = useState();
  const [isMain, setIsMain] = useState(true);
  const [isStats, setIsStats] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [uploadModalIsOpen, setUploadModalIsOpen] = useState(false);

  let rows = [
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 3
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 4
    }
]

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  }

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  }

  const handleLogin = () => {
    setLoginModalIsOpen(true);
  }

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

  const handleLogout = () => {
    setName("");
    setPassword("");
    setLogin(false);
  }

  const handleAdd = () => {
    setUploadModalIsOpen(true);
  }

  const afterOpenLoginModal = () => {
  }

  const afterOpenUploadModal = () => {
  }

  const closeLoginModal = () => {
    setLoginModalIsOpen(false);
  }

  const closeUploadModal = () => {
    setUploadModalIsOpen(false);
  }

  const tryLogin = () => {
    setLoading(true);
    setLogin(true);
    setLoading(false);
    closeLoginModal();

    // ZMIENIĆ URL NA IP/domene serwera
    axios.get(`localhost:8080/login?username=${name}&password=${password}`, {})
      .then((response) => {
        if (response.data == 1)
          setLogin(true);
        setLoading(false);
      })
      .catch((err) => {
        //setLogin(false);
        //setLoading(false);
      });
  }

  useEffect(() => {
    // console.log(isLoading);
  }, [isLoading]);

  return (
    <div id="app">
      <Navbar
      handleMain={handleMain}
      handleStats={handleStats}
      // handleLogin={handleLogin}
      // handleLogout={handleLogout}
      // handleAdd={handleAdd}
      // user={name}
      // isLoading={isLoading}
      // isLogged={isLogged}
      />
      {isMain ? <MainView rows={rows}/> : null}
      {isStats ? <StatsView/> : null}
      <MyModal
        modalIsOpen={loginModalIsOpen}
        afterOpenModal={afterOpenLoginModal}
        closeModal={closeLoginModal}>
        <div className="title-bar"><label>Login to RNA Database</label></div>
        <LoginForm
          name={name}
          password={password}
          nameChange={handleNameChange}
          passwordChange={handlePasswordChange}
          submit={tryLogin}
          disabled={isLoading}
        />
      </MyModal>
      <MyModal
        modalIsOpen={uploadModalIsOpen}
        afterOpenModal={afterOpenUploadModal}
        closeModal={closeUploadModal}>
        {}
        <div className="title-bar"><label>Upload new structure to RNA Database</label></div>
        <UploadForm />
      </MyModal>
    </div>
  )
}

export default App;