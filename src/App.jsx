import logo from './logo.svg';

import MyNavBar from './Components/MyNavbar';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyFooter from './Components/MyFooter';

import HarryPotter from './Components/HarryPotter';
import './style.css'



function App() {
  return (
    <div className="App">
      <MyNavBar />
     
      <HarryPotter Lista="batman"/>
      <HarryPotter Lista="Star Wars"/>
      <HarryPotter Lista="Lord of the Rings"/>
      <MyFooter/>
    </div>
  );
}

export default App;
