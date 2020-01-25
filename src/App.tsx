import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './css/LiteMol-plugin.css';
import { MainView } from './view/mainView'
import { Navbar } from './navbar/navbar';
import { MyModal } from './modal/modal';
import { LoginForm } from './loginForm/loginForm';
import { UploadForm } from './uploadForm/uploadForm';
import LiteMolPlugin from './litemolPlugin/litemolPlugin';


const App = () => {
  const [isLogged, setLogin] = useState();
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [uploadModalIsOpen, setUploadModalIsOpen] = useState(false);

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  }

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  }

  const handleLogin = () => {
    setLoginModalIsOpen(true);
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
    console.log(isLoading);
  }, [isLoading]);

  return (
    <div id="app">
      <Navbar
      handleLogin={handleLogin}
      handleLogout={handleLogout}
      handleAdd={handleAdd}
      user={name}
      isLoading={isLoading}
      isLogged={isLogged}
      />
      <MainView/>
      {/* <LiteMolPlugin /> */}
      {/* </MainView> */}
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