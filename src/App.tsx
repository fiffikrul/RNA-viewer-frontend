import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './css/LiteMol-plugin.css';
import { MainView } from './view/mainView'
import { Navbar } from './navbar/navbar';
import { MyModal } from './modal/modal';
import { LoginForm } from './loginForm/loginForm';
import { UploadForm } from './uploadForm/uploadForm';
import LiteMol from 'litemol';

class LiteMolPlugin extends React.Component<{}, {}> {
  target: string;
  constructor(props: any) {
    super(props);
  this.target = "#litemol";
  }


  componentDidMount() {
    const plugin = LiteMol.Plugin.create({ target: this.target, layoutState: { hideControls: true, collapsedControlsLayout: LiteMol.Bootstrap.Components.CollapsedControlsLayout.Landscape }, viewportBackground: '#F1F1F1' });
    plugin.loadMolecule({
      id: '1tqn',
      url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
      format: 'cif' // default
    })
  }

  render() {
    return <div id={this.target.substring(1,)} style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0 }} />
  }
}


const App = () => {
  // const [isLogged, setLogin] = useState();
  // const [isLoading, setLoading] = useState(false);
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');
  // const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  // const [uploadModalIsOpen, setUploadModalIsOpen] = useState(false);

  // let plugin = LiteMol.Plugin.create({
  //   target: '#app',
  //   viewportBackground: '#fff',
  //   layoutState: {
  //     hideControls: true,
  //     isExpanded: true
  //   }})

  //   let id = '1tqn';
  //   plugin.loadMolecule({
  //     id,
  //     format: 'cif', // or pdb, sdf, binarycif/bcif
  //     url: `https://www.ebi.ac.uk/pdbe/static/entry/${id.toLowerCase()}_updated.cif`,
  //     moleculeRef: id + '-molecule',
  //     modelRef: id + '-model',
  //   }).then(() => {
  //     console.log('Molecule loaded');
  //   }).catch(e => {
  //     console.error(e);
  //   });

  // const handleNameChange = (event: any) => {
  //   setName(event.target.value);
  // }

  // const handlePasswordChange = (event: any) => {
  //   setPassword(event.target.value);
  // }

  // const handleLogin = () => {
  //   setLoginModalIsOpen(true);
  // }

  // const handleLogout = () => {
  //   setName("");
  //   setPassword("");
  //   setLogin(false);
  // }

  // const handleAdd = () => {
  //   setUploadModalIsOpen(true);
  // }

  // const afterOpenLoginModal = () => {
  // }

  // const afterOpenUploadModal = () => {
  // }

  // const closeLoginModal = () => {
  //   setLoginModalIsOpen(false);
  // }

  // const closeUploadModal = () => {
  //   setUploadModalIsOpen(false);
  // }

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

  // useEffect(() => {
  //   console.log(isLoading);
  // }, [isLoading]);

  return (
    <div id="app">
      {/* <Navbar
      handleLogin={handleLogin}
      handleLogout={handleLogout}
      handleAdd={handleAdd}
      user={name}
      isLoading={isLoading}
      isLogged={isLogged}
      /> */}
      {/* <MainView> */}
      <LiteMolPlugin />
      {/* </MainView> */}
      {/* <MyModal
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
      </MyModal> */}
    </div>
  )
}

export default App;