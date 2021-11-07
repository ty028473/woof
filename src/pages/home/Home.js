import React from 'react'
import '../../styles/golbal.scss'
import '../../styles/home.scss'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'
import Evaluation from '../../components/home/Evaluation'
import Advantage from '../../components/home/Advantage'

function Home(props) {
  return (
    <>
      <NavBar />
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
          <button
            type="button"
            className="col-4 mt-4 btn btn-primary btn-lg btn-woof"
          >
            立即預約!!
          </button>
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
              <select
                className="col-5 mt-3 mr-4 form-control-lg"
                id="exampleFormControlSelect1"
              >
                <option>地區</option>
                <option>2</option>
              </select>
              <input
                type="date"
                className="col-6 form-control-lg"
                id="date"
                name="date"
              />
              <button
                type="button"
                className="col mt-4 btn btn-primary btn-lg btn-woof"
              >
                找尋保母去!!
              </button>
            </div>
            <div className="col-6">
              <h2>如何預約？</h2>
              <img
                className="mt-3 how-to-book-img"
                src="../../../images/home/how-to-book.png"
                alt="立即預約"
              />
            </div>
            <div className="mt-5 map text-center">
              <h1>我是MAP</h1>
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
            <button
              type="button"
              className="col-4 btn btn-primary btn-lg btn-woof eva-btn-margin"
            >
              找尋保母去!!
            </button>
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
          <button
            type="button"
            className="col-4 mt-4 btn btn-primary btn-lg btn-woof"
          >
            成為保母
          </button>
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
          <button
            type="button"
            className="col-4 mt-4 btn btn-primary btn-lg btn-woof align-right"
          >
            成為保母
          </button>
        </div>
        <img
          className="calendar-img"
          src="../../../images/home/calendar.png"
          alt="預約日曆"
        />
      </div>
      {/* container-end */}
      {/* 6-slide */}
      <div className="col intro-1 intro-height ">
        <Advantage />
      </div>
      <img
        className="chat-bg-img"
        src="../../../images/home/chat-bg.png"
        alt="優勢背景"
      />
      {/* footprint-start */}
      {/* <img
        className="footprint-1"
        src="../../../images/home/footprint.png.png"
        alt="優勢背景"
      /> */}

      <Footer />
    </>
  )
}

export default Home
