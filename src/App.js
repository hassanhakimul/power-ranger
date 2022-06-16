import { Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import NotFound from './pages/Shared/NotFound';

function App() {
  return (
    <div className='back font-mono'>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/' element={<Home/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
