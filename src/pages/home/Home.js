import React from 'react'
import '../../styles/golbal.scss'
import '../../styles/home.scss'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'
import { Button } from 'react-bootstrap'

function Home(props) {
  return (
    <>
      <NavBar />
      <div className="container">
        {/* 立即預約 */}
        <div className="row intro-1 intro-height relative">
          <div className="col-7 intro-title-1">
            <h1>
              總是擔心毛小孩沒人照顧嗎？
              <br />
              Woof 提供您適合的寵物保母！
            </h1>
            <h3>
              價格透明化、客戶真實評價回饋，
              <br />
              眾多優質寵物保母、即時查看自己毛孩的位置。
            </h3>
            <button
              type="button"
              className="col-4 btn btn-primary btn-lg btn-woof"
            >
              立即預約!!
            </button>
          </div>
          <div className="col-4"></div>
          <img
            className="absolute intro-1-img"
            src="../../../images/home/intro-1.png"
            alt="intro-1"
          />
        </div>

        {/* 馬上找保母 */}
        <div className="row intro-height relative">
          <div className="col-5 ">
            <h2>馬上找附近的保母</h2>
            <select
              className="col-6 form-control-lg"
              id="exampleFormControlSelect1"
            >
              <option>地區</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <input
              type="date"
              className="col-6 form-control-lg"
              id="date"
              name="date"
            />
            <button
              type="button"
              className="col btn btn-primary btn-lg btn-woof"
            >
              找尋保母去!!
            </button>
          </div>
          <div className="col-7">
            <h2>如何預約？</h2>
            <div className="box-step">預約項目</div>
          </div>
          <div className="col-10 mx-auto">
            {/* <!--Google map--> */}
            <div
              id="map-container-google-1"
              className="z-depth-1-half map-container map-height"
            >
              <iframe
                src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="map-ifram map-height"
              ></iframe>
            </div>
          </div>
          <img
            className="absolute city-bg-img"
            src="../../../images/home/city-bg.png"
            alt="city-bg"
          />
        </div>
        {/* 立即預約 */}
        <div className="row intro-height relative">
          <div className="col-12 text-center">
            <h2>保母評價</h2>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
