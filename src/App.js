import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/login/Signup'
import About from './pages/about/About'
import Map2 from './pages/maplist/Map2'
import ProductCheck from './pages/cart/ProductCheck'
import ProductList from './pages/cart/ProductList'
import Joinus from './pages/joinus/Joinus'
import Collection from './pages/member/Collection'
import Member from './pages/member/Member'
import Password from './pages/member/Password'
import Record from './pages/member/Record'
import Album from './pages/petSitter/Album'
import Schedule from './pages/petSitter/Schedule'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/map2">
          <Map2 />
        </Route>
        <Route path="/productCheck">
          <ProductCheck />
        </Route>
        <Route path="/productList">
          <ProductList />
        </Route>
        <Route path="/joinus">
          <Joinus />
        </Route>
        <Route path="/collection">
          <Collection />
        </Route>
        <Route path="/member">
          <Member />
        </Route>
        <Route path="/password">
          <Password />
        </Route>
        <Route path="/record">
          <Record />
        </Route>
        <Route path="/album">
          <Album />
        </Route>
        <Route path="/schedule">
          <Schedule />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
