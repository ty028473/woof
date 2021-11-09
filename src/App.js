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
import Calendar from './pages/reserve_calendar/calendar'

// 購物車
import OrderCheck from './pages/cart/OrderCheck'
import OrderList from './pages/cart/OrderList'

// 會員
import Member from './pages/member/Member'
import ChangePwd from './pages/member/ChangePwd'
// 會員 --> 寵物頁面
import Pets from './pages/member/Pets'
import PetsAdd from './pages/member/PetsAdd'
// 會員 --> 訂單紀錄頁面
import RecordCarryOut from './pages/member/RecordCarryOut'
import RecordComplete from './pages/member/RecordComplete'
import RecordCancel from './pages/member/RecordCancel'
// 會員 --> 保母收藏頁面
import Collection from './pages/member/Collection'

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
        <Route path="/orderCheck">
          <OrderCheck />
        </Route>
        <Route path="/orderList">
          <OrderList />
        </Route>
        <Route path="/joinus">
          <Joinus />
        </Route>
        <Route path="/member/pets/add">
          <PetsAdd />
        </Route>
        <Route path="/member/pets">
          <Pets />
        </Route>
        <Route path="/member/record/carryout">
          <RecordCarryOut />
        </Route>
        <Route path="/member/record/complete">
          <RecordComplete />
        </Route>
        <Route path="/member/record/cancel">
          <RecordCancel />
        </Route>
        <Route path="/member/collection">
          <Collection />
        </Route>
        <Route path="/member/changepwd">
          <ChangePwd />
        </Route>
        <Route path="/member">
          <Member />
        </Route>
        <Route path="/petsitter/schedule">
          <Schedule />
        </Route>
        <Route path="/petsitter/album">
          <Album />
        </Route>
        <Route path="/petsitter">
          <PetSitter />
        </Route>
        <Route path="/petsitterrecord">
          <PetSitterRecord />
        </Route>
        <Route path="/chatroom">
          <Chatroom />
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
