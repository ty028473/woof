import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Home from './pages/home/Home'
import NotFoundPage from './pages/NotFoundPage'
import Login from './pages/login/Login'
import Signup from './pages/login/Signup'
import About from './pages/about/About'
import Joinus from './pages/joinus/Joinus'
import Map2 from './pages/maplist/Map2'

// 購物車
import ProductCheck from './pages/cart/ProductCheck'
import ProductList from './pages/cart/ProductList'

// 會員
import Member from './pages/member/Member'
import Password from './pages/member/Password'
import Pets from './pages/member/Pets'
import Collection from './pages/member/Collection'
import Record from './pages/member/Record'

//保母會員
import Album from './pages/petSitter/Album'
import Schedule from './pages/petSitter/Schedule'
import PetSitter from './pages/petSitter/PetSitter'
import PetSitterRecord from './pages/petSitter/PetSitterRecord'

function App() {
  return (
    <Router>
      <Switch>
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
        <Route path="/pets">
          <Pets />
        </Route>
        <Route path="/record">
          <Record />
        </Route>
        <Route path="/petSitter">
          <PetSitter />
        </Route>
        <Route path="/petSitterRecord">
          <PetSitterRecord />
        </Route>
        <Route path="/album">
          <Album />
        </Route>
        <Route path="/schedule">
          <Schedule />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
