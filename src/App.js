import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Link, Route, Router} from "react-router-dom";


function App(props) {
  return (

    <div className="app-wrapper">
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <switch>
            <Route path='/Dialogs' component={Dialogs}/>
            <Route path='/Profile' component={Profile}/>
          </switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
