import './App.css';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Register from './components/Register/Register';
function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      {/* <Login></Login> */}
      <Register></Register>
      <Footer></Footer>
    </div>
  );
}

export default App;
