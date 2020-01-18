import React, { useState, useEffect } from 'react';
import './App.css';
import { MainView } from './view/mainView'
import { Navbar } from './navbar/navbar';
import { MyModal } from './modal/modal';
import { LoginForm } from './loginForm/loginForm';
import axios from 'axios';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const App = () => {
  const [isLogged, setLogin] = useState();
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  }

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  }

  const handleLogin = () => {
    setModalIsOpen(true);
  }

  const handleLogout = () => {
    setLogin(false);
  }

  const afterOpenModal = () => {
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const tryLogin = () => {
    setLoading(true);
    setLogin(true);
    setLoading(false);
    closeModal();

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
      user={name} 
      isLoading={isLoading} 
      isLogged={isLogged} />
      <MainView />
      <MyModal 
      styles={customStyles} 
      modalIsOpen={modalIsOpen} 
      afterOpenModal={afterOpenModal} 
      closeModal={closeModal}>
        <LoginForm
          name={name}
          password={password}
          nameChange={handleNameChange}
          passwordChange={handlePasswordChange}
          submit={tryLogin}
          disabled={isLoading}
        />
      </MyModal>
    </div>
  )
}

export default App;