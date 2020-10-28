import React, {useState} from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css"
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import DataBaseKey from './Database/DataBaseKey'
import { UserContext } from "./Context/UserContext";
import Home from './Pages/Home'
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import PageNotFound from "./Pages/PageNotFound";
// import 'App.css';

// Import React Router
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//Import Toastify Package
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//FireBase
import firebase from "firebase/app";
import "firebase/auth";

//Initialize FireBase
firebase.initializeApp(DataBaseKey);

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="mainapp">
      <Router>
      <ToastContainer></ToastContainer>
      <UserContext.Provider value={{ user, setUser }}>
      <Header></Header>
        <Switch>
          <Route exact path="/" component={SignIn}></Route>
          <Route exact path="/sin" component={SignIn}></Route>
          <Route exact path="/sup" component={SignUp}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="*" component={PageNotFound}></Route>
        </Switch>
        <Footer></Footer>
      </UserContext.Provider>
    </Router>
    </div>
  );
}
export default App;
