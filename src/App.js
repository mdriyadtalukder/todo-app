import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Add from './components/Add/Add';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import RequireAuth from './components/RequireAuth';
import Header from './components/Header/Header';

function App() {
  return (
    <div  style={{ minHeight: '90vh' }}>
      <Header></Header>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>}></Route>
        <Route path='/add' element={
          <RequireAuth>
            <Add></Add>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
