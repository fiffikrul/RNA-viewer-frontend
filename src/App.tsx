import React, { useState, useEffect } from 'react';
import './App.css';
import { MainView } from './view/mainView'
import { Navbar } from './navbar/navbar';
import { MyModal } from './modal/modal';
import { LoginForm } from './loginForm/loginForm';
import axios from 'axios';
import { UploadForm } from './uploadForm/uploadForm';


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

    // axios.get(/*USTALIĆ URL*/"<MY_URL>:3900/login", {})
    //   .then((response) => {
    //     if (response.data == 1)
    //       setLogin(true);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     //setLogin(false);
    //     //setLoading(false);
    //   });
  }

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <div>
      <Navbar
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        handleAdd={handleAdd}
        user={name}
        isLoading={isLoading}
        isLogged={isLogged} />
      <MainView />
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
        {/* add insides = 2 buttons 2 labels for xml, pdb adding file, upload button */}
        <div className="title-bar"><label>Upload new structure to RNA Database</label></div>
        <UploadForm />
      </MyModal>
    </div>
  )
}

export default App;