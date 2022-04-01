import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";


import { useAuthContext } from "./hooks/useAuthContext";

//importing pages
import Home from "./pages/home/Home";
import About from "./pages/about/About"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Feed from "./pages/feed/Feed";

//importing components
import Footer from "./components/footer/Footer";

function App() {
  const {user, authIsReady} = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
      <BrowserRouter>
        <Switch>

          <Route  exact path='/'>
            {user && <Home/>}
            {!user && <Redirect to='/login' />}
          </Route>

          <Route  path='/about'>
            {user && <About/>}
            {!user && <Redirect to='/login' />}
          </Route>

          <Route  path='/feed'>
            {user && <Feed/>}
            {!user && <Redirect to='/login' />}
          </Route>

          <Route  path='/login'>
            {!user && <Login/>}
            {user && <Redirect to='/' />}
          </Route>

          <Route  path='/signup'>
            {!user && <Signup/>}
            {user && <Redirect to='/' />}
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App
