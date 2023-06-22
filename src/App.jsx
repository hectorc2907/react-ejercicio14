import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Principal from './components/views/Principal';
import Login from './components/views/Login';
import Administrador from './components/views/Administrador';
import Error404 from './components/views/Error404';
import { useState } from 'react';

function App() {
  const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('usuario')) || {}
  const [usuarioLogueado, setUsuarioLogueado] = useState({usuarioSessionStorage});

  return (
    <BrowserRouter>
      <Header usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Header>
        <Routes>
          <Route exact path='/' element={<Principal></Principal>}></Route>
          <Route exact path='/login' element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
          <Route exact path='/administrador' element={<Administrador></Administrador>}></Route>
          <Route exact path='*' element={<Error404></Error404>}></Route>
        </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
