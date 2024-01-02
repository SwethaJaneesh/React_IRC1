// import logo from "./logo.svg";
// import "./Components/Home";
// import Login from "./pages/Login";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Dashboard from "./pages/Dashboard"
// import Home from './Components/Home.js';
import Homepage from './Components/Homepage.js';
import './assets/Css/Homepage.css';
// import  './assets/Css/Home.css';
// import Home1 from './Components/Home1.js';
// import './assets/Home1.css';
function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Route exact path="/login" component={Login} />
		<Route exact path="/" component={Dashboard} />
      </BrowserRouter> */}
      <Homepage/>
      {/* <Home/>  */}
      {/* <Home1/> */}
     

    </div>
  );
}

export default App;