import { Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import MsgForm from './pages/Shared/MsgForm';
import NotFound from './pages/Shared/NotFound';

function App() {
  return (
    <div className='back font-mono'>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/message' element={<MsgForm/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
