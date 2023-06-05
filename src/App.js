import './App.css';
import Footer from './components/Footer/Footer';
// import Login from './components/Login/Login';
import NavigationBar from './components/NavigationBar/NavigationBar';
import NotFound404 from './components/NotFound404/NotFound404';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
function App() {
  
  return (
    <div className="App">

      <NavigationBar></NavigationBar>
      {/* <Login></Login> */}
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound404></NotFound404>}/>
      </Routes>
      {/* <Register></Register> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
