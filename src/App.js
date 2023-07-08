import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import AllProducts from './AllProducts';

function App() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
         <Route path='/Login' element={<Login/>}/>
         <Route path="/Login" element={<Navigate to="/login" />}/>
         <Route path='/AllProducts' element={<AllProducts/>}/>


          {/* <Route path='/Login' element={<Login/>}/> */}
         </Routes>
      </BrowserRouter>
      r
    </div>
  );
}


export default App;
