import logo from './logo.svg';

import MyNavBar from './Components/MyNavbar';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyFooter from './Components/MyFooter';
import ListaSaghe from './Components/ListaSaghe'

import './style.css'



function App() {
  return (
    <div className="App">
      <MyNavBar />
     
      <ListaSaghe Lista="batman"/>
      <ListaSaghe Lista="Star Wars"/>
      <ListaSaghe Lista="Lord of the Rings"/>
      <MyFooter/>
    </div>
  );
}

export default App;
