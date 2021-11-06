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
import Calendar from './pages/reserve_calendar/Reserve'

// 購物車
import ProductCheck from './pages/cart/ProductCheck'
import ProductList from './pages/cart/ProductList'

// 會員
import Member from './pages/member/Member'
import Password from './pages/member/Password'
import Pets from './pages/member/Pets'
import PetsAdd from './pages/member/PetsAdd'
import Collection from './pages/member/Collection'
import Record from './pages/member/Record'

//保母會員
import Album from './pages/petSitter/Album'
import Schedule from './pages/petSitter/Schedule'
//預約系統
import ReserveMap from './pages/reserve_map/ReserveMap'

import PetSitter from './pages/petSitter/PetSitter'
import PetSitterRecord from './pages/petSitter/PetSitterRecord'
import Chatroom from './pages/chatroom/Chatroom'

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
        <Route path="/Reservecalendar">
          <Calendar />
        </Route>
        <Route path="/ReserveMap">
          <ReserveMap />
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
        <Route path="/member/pets/add">
          <PetsAdd />
        </Route>
        <Route path="/member/pets">
          <Pets />
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
        <Route path="/petSitter">
          <PetSitter />
        </Route>
        <Route path="/petSitterRecord">
          <PetSitterRecord />
        </Route>
        <Route path="/chatroom">
          <Chatroom />
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
