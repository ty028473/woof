import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import '../../styles/home.scss'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      // adaptiveHeight: true,
      // variableWidth:true,
    }
    return (
      <div>
        <Slider {...settings}>
          {/* 單個項目 */}
          <div>
            <br />
            <div className="evaluation-card eva-shadow text-center">
              <div className="avrtor-circle">
                <img
                  src="../../../images/sitter/user_1.jpeg"
                  className="img_cover_sm"
                  alt="保母評價頭像"
                />
              </div>
              <div className="evaluation-content">
                <h6>
                  金祐賢
                  <FontAwesomeIcon icon={faStar} className="star-color" />
                  4.3
                </h6>
                <section className="eva-content-text">
                  觀察毛小孩細微細膩，出門散步會記載過程，照片中的孩子
                  玩的笑不攏嘴巴，會主動告知主人 孩子狀況，讓人放心（非常推薦喔
                </section>
                <a href="http://localhost:3000/ReserveMap/1">
                  <button type="button" class="my-2 btn btn-secondary btn-woof">
                    查看此保母
                  </button>
                </a>
              </div>
            </div>
            <br />
          </div>
          {/* 單個項目 */}
          <div>
            <br />
            <div className="evaluation-card eva-shadow text-center">
              <div className="avrtor-circle">
                <img
                  src="../../../images/sitter/user_3.jpeg"
                  className="img_cover_sm"
                  alt="保母評價頭像"
                />
              </div>
              <div className="evaluation-content">
                <h6>
                  黃阿鬼
                  <FontAwesomeIcon icon={faStar} className="star-color" />
                  4.3
                </h6>
                <section className="eva-content-text">
                  保姆接待前會詳細了解狗的狀況及主人需求，會注重散步環境，讓家長放心，保姆也非常熱心傳狗狗照片讓主人了解。非常推薦～保母非常有經驗及耐心。謝謝保姆的用心～
                </section>
                <a href="http://localhost:3000/ReserveMap/3">
                  <button type="button" class="my-2 btn btn-secondary btn-woof">
                    查看此保母
                  </button>
                </a>
              </div>
            </div>
            <br />
          </div>
          {/* 單個項目 */}
          <div>
            <br />
            <div className="evaluation-card eva-shadow text-center">
              <div className="avrtor-circle">
                <img
                  src="../../../images/sitter/user_7.jpeg"
                  className="img_cover_sm"
                  alt="保母評價頭像"
                />
              </div>
              <div className="evaluation-content">
                <h6>
                  陳敲鐘
                  <FontAwesomeIcon icon={faStar} className="star-color" />
                  4.6
                </h6>
                <section className="eva-content-text">
                  Aky訓練師很有耐心的教會我怎麼做才能讓幽幽不要在散步時爆衝以及隨意更換方向不跟隨我,我會努力讓幽幽可以好好學會，讓她開開心心地散步～謝謝寶貝ok讓我有機會學習到很多訓練方法～這是一個很棒的經驗。
                </section>
                <a href="http://localhost:3000/ReserveMap/7">
                  <button type="button" class="my-2 btn btn-secondary btn-woof">
                    查看此保母
                  </button>
                </a>
              </div>
            </div>
            <br />
          </div>{' '}
          {/* 單個項目 */}
          <div>
            <br />
            <div className="evaluation-card eva-shadow text-center">
              <div className="avrtor-circle">
                <img
                  src="../../../images/sitter/user_9.jpeg"
                  className="img_cover_sm"
                  alt="保母評價頭像"
                />
              </div>
              <div className="evaluation-content">
                <h6>
                  林樂事
                  <FontAwesomeIcon icon={faStar} className="star-color" />
                  4.2
                </h6>
                <section className="eva-content-text">
                  保姆接待前會詳細了解狗的狀況及主人需求，會注重散步環境，讓家長放心，保姆也非常熱心傳狗狗照片讓主人了解。非常推薦～保母非常有經驗及耐心。謝謝保姆的用心～
                </section>
                <a href="http://localhost:3000/ReserveMap/9">
                  <button type="button" class="my-2 btn btn-secondary btn-woof">
                    查看此保母
                  </button>
                </a>
              </div>
            </div>
            <br />
          </div>
          {/* 單個項目 */}
          <div>
            <br />
            <div className="evaluation-card eva-shadow text-center">
              <div className="avrtor-circle">
                <img
                  src="../../../images/sitter/user_11.jpeg"
                  className="img_cover_sm"
                  alt="保母評價頭像"
                />
              </div>
              <div className="evaluation-content">
                <h6>
                  天人仁
                  <FontAwesomeIcon icon={faStar} className="star-color" />
                  4.5
                </h6>
                <section className="eva-content-text">
                  超推每天帶毛孩出去散步，定期會發送照片影片讓我們很放心，還有可愛小狗狗陪伴，保母時間也很好配合，可以客製化供餐，超細心照顧，推推
                </section>
                <a href="http://localhost:3000/ReserveMap/11">
                  <button type="button" class="my-2 btn btn-secondary btn-woof">
                    查看此保母
                  </button>
                </a>
              </div>
            </div>
            <br />
          </div>
        </Slider>
      </div>
    )
  }
}
