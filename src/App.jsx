import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Principal from './components/views/Principal';
import Login from './components/views/Login';
import Administrador from './components/views/Administrador';
import Error404 from './components/views/Error404';

function App() {

  return (
    <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route exact path='/' element={<Principal></Principal>}></Route>
          <Route exact path='/login' element={<Login></Login>}></Route>
          <Route exact path='/administrador' element={<Administrador></Administrador>}></Route>
          <Route exact path='*' element={<Error404></Error404>}></Route>
        </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
