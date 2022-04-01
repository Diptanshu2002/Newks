
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";


//importing pages
import Home from "./pages/home/Home";
import About from "./pages/about/About"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"

//importing components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Switch>

          <Route  exact path='/'>
            <Home/>
          </Route>

          <Route  path='/about'>
            <About/>
          </Route>

          <Route  path='/login'>
            <Login/>
          </Route>

          <Route  path='/signup'>
            <Signup/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App
