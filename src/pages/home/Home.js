import React from 'react'
import '../../styles/golbal.scss'
import '../../styles/home.scss'
import { Carousel } from 'react-bootstrap'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'

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
        <img
          className="intro-1-img"
          src="../../../images/home/intro-1.png"
          alt="立即預約"
        />
        {/* 2-如何預約 */}
        <div className="col  intro-1 intro-height ">
          <div className="row">
            <div className="col-6">
              <h2>馬上找附近的保母</h2>
              <select
                className="col-6 form-control-lg"
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
                className="col btn btn-primary btn-lg btn-woof"
              >
                找尋保母去!!
              </button>
            </div>
            <div className="col-6">
              <h2>如何預約？</h2>
              <img
                className="how-to-book-img"
                src="../../../images/home/how-to-book.png"
                alt="立即預約"
              />
            </div>
            <div className="mt-5 map"></div>
          </div>
        </div>
        <img
          className=" city-bg-img"
          src="../../../images/home/city-bg.png"
          alt="城市背景"
        />
        {/* 3-保母評價 */}
        <div className="col  intro-1 intro-height">
          <h2 className="text-center">保母評價</h2>
          保母評價 按鈕ＸＸ
          <section className="text-center">
            <button
              type="button"
              className="col-4 btn btn-primary btn-lg btn-woof "
            >
              找尋保母去!!
            </button>
          </section>
        </div>
        {/* 4-加入我們 */}
        <div className="col  intro-1 intro-height p-top">
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
            className="col-4 btn btn-primary btn-lg btn-woof"
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
            即時查看價格
            <br />
            查看日曆
            <br />
            檢視保母詳細資訊
            <br />
            地圖快速找最近的保母
          </h2>
          <button
            type="button"
            className="col-4 btn btn-primary btn-lg btn-woof align-right"
          >
            成為保母
          </button>
        </div>
        <img
          className="calendar-img"
          src="../../../images/home/calendar.png"
          alt="預約日曆"
        />
        {/* 6-slide */}
        <div className="col  intro-1 intro-height p-top">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../resources/AdobeStock_317438568.jpeg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../resources/AdobeStock_317438568.jpeg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../resources/AdobeStock_317438568.jpeg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <img
          className="chat-bg-img"
          src="../../../images/home/chat-bg.png"
          alt="優勢背景"
        />
        {/* 7-game */}
        <div className="col  intro-1 intro-height p-top"></div>
      </div>

      <Footer />
    </>
  )
}

export default Home
