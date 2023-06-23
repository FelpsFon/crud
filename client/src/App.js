import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Caronas from './pages/Caronas'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/caronas' element={<Caronas />}/>
      </Routes>
    </Router>

  );
}

export default App;
