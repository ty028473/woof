import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../../styles/golbal.scss'
import '../../styles/home.scss'
import NewNavBar from '../../components/golbal/NewNavBar'
import Footer from '../../components/golbal/Footer'
import Evaluation from '../../components/home/Evaluation'
import Advantage from '../../components/home/Advantage'
import ScrollToTop from 'react-scroll-to-top'
import { ReactComponent as MyArrow } from './myArrow.svg'
import MyComponent2 from '../../components/reserve/Map2'

function Home(props) {
  return (
    <>
      <NewNavBar />
      <ScrollToTop smooth component={<MyArrow />} />
      <div className="container relative">
        {/* 1-立即預約 */}
        <div className="col  intro-1 intro-height p-top">
          <h1>
            總是擔心毛小孩沒人照顧嗎？
            <br />
            Woof 提供您適合的寵物保母！
          </h1>
          <h3 className="mt-2">
            價格透明化、客戶真實評價回饋，
            <br />
            眾多優質寵物保母、即時查看自己毛孩的位置。
          </h3>
          <Link to="/ReserveMap">
            <button
              type="button"
              className="col-4 mt-4 btn btn-primary btn-lg btn-woof"
            >
              立即預約!!
            </button>
          </Link>
        </div>
        <img
          className="intro-1-img"
          src="../../../images/home/intro-1.png"
          alt="立即預約"
        />
        {/* 2-如何預約 */}
        <div className="col intro-1 intro-height ">
          <div className="row mt-5">
            <div className="col-6 ">
              <h2>馬上找附近的保母</h2>
              <div className="row mt-4">
                <select className=" col-5 form-control form-control-lg ">
                  <option selected>地區</option>
                  <option value="1">中正區</option>
                  <option value="2">中山區</option>
                </select>
                <input
                  type="date"
                  className=" col-6 form-control form-control-lg"
                  id="date"
                  name="date"
                />
                <button
                  type="button"
                  className="col-11 mt-4 btn btn-primary btn-lg btn-woof"
                >
                  找尋保母去!!
                </button>
              </div>
            </div>
            <div className="col-6">
              <h2>如何預約？</h2>
              <img
                className="mt-3 how-to-book-img"
                src="../../../images/home/how-to-book.png"
                alt="立即預約"
              />
            </div>
            <div className="map">
              <MyComponent2 />
            </div>
          </div>
        </div>
        <img
          className=" city-bg-img"
          src="../../../images/home/city-bg.png"
          alt="城市背景"
        />
        {/* 3-保母評價 */}
        <div className="col  intro-1 intro-height">
          <h2 className="text-center eva-margin">保母評價</h2>
          <Evaluation />

          <section className="text-center">
            <Link to="/ReserveMap">
              <button
                type="button"
                className="col-4 btn btn-primary btn-lg btn-woof eva-btn-margin"
              >
                找尋保母去!!
              </button>
            </Link>
          </section>
        </div>
        {/* 4-加入我們 */}
        <div className="col  intro-1 intro-height ">
          <h1>如何成為保母？</h1>
          <h3>
            填寫基本資料、提供收款帳號，個人簡介撰寫相關能力，
            <br />
            讓客戶更了解你，最後，擁有熱愛寵物的心！
          </h3>
          <h5>
            我們會對提出申請的用戶進行人工審核，
            <br />
            以確保客戶權益以及保母服務品質！
          </h5>
          <Link to="/joinus">
            <button
              type="button"
              className="col-4 mt-4 btn btn-primary btn-lg btn-woof"
            >
              成為保母
            </button>
          </Link>
        </div>
        <img
          className="join-us-img"
          src="../../../images/home/join-us.png"
          alt="加入我們"
        />
        {/* 5-預約日曆 */}
        <div className="col intro-1 intro-height p-top">
          <h2 className="align-right">
            <ul>
              <li>即時查看價格</li>
              <li>查看日曆</li>
              <li>檢視保母詳細資訊</li>
              <li>地圖快速找最近的保母</li>
            </ul>
          </h2>
          <Link to="/ReserveMap">
            <button
              type="button"
              className="col-4 mt-4 btn btn-primary btn-lg btn-woof align-right"
            >
              體驗看看！
            </button>
          </Link>
        </div>
        <img
          className="calendar-img"
          src="../../../images/home/calendar.png"
          alt="預約日曆"
        />
        {/* footprint-start */}
        <img
          className="footprint-1"
          src="../../../images/home/footprint.png"
          alt="狗狗腳印"
        />
        <img
          className="footprint-2"
          src="../../../images/home/footprint.png"
          alt="狗狗腳印"
        />
        <img
          className="footprint-3"
          src="../../../images/home/footprint.png"
          alt="狗狗腳印"
        />
        <img
          className="footprint-4"
          src="../../../images/home/footprint.png"
          alt="狗狗腳印"
        />
        <img
          className="footprint-5"
          src="../../../images/home/footprint.png"
          alt="狗狗腳印"
        />
        <img
          className="footprint-6"
          src="../../../images/home/footprint.png"
          alt="狗狗腳印"
        />
        <img
          className="footprint-7"
          src="../../../images/home/footprint.png"
          alt="狗狗腳印"
        />
        <img
          className="footprint-8"
          src="../../../images/home/footprint.png"
          alt="狗狗腳印"
        />
        <img
          className="footprint-9"
          src="../../../images/home/footprint.png"
          alt="狗狗腳印"
        />
        <img
          className="footprint-10"
          src="../../../images/home/footprint.png"
          alt="狗狗腳印"
        />
        <img
          className="footprint-11"
          src="../../../images/home/footprint.png"
          alt="狗狗腳印"
        />
        <img
          className="footprint-12"
          src="../../../images/home/footprint.png"
          alt="狗狗腳印"
        />
        <img
          className="footprint-13"
          src="../../../images/home/footprint.png"
          alt="狗狗腳印"
        />
        <img
          className="footprint-14"
          src="../../../images/home/footprint.png"
          alt="狗狗腳印"
        />
      </div>
      {/* container-end */}
      {/* 6-slide */}
      <div className="col intro-1 intro-height">
        <Advantage />
      </div>
      <img
        className="chat-bg-img"
        src="../../../images/home/chat-bg.png"
        alt="優勢背景"
      />
      <Footer />
    </>
  )
}

export default Home
