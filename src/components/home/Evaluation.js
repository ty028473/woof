import React, { Component } from 'react'
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
          <div><br/>
            <div className="evaluation-card eva-shadow text-center">
              <div className="avrtor-circle">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  className="img_cover_sm"
                  alt="保母評價頭像"
                />
              </div>
              <div className="evaluation-content">
                <h6>
                  Julia 保母{' '}
                  <FontAwesomeIcon icon={faStar} className="star-color" />
                  4.3
                </h6>
                <section className="eva-content-text">隨時可以聯繫得到保母，會發照片告知狀況。雖離台北市區內較遠，但開車交通方便又好找。隨時可以聯繫得到保母，會發照片告知狀況。雖離台北市區內較遠，但開車交通方便又好找。</section>
                <button type="button" class="my-2 btn btn-secondary btn-woof">
                  查看此保母
                </button>
              </div>
            </div><br/>
          </div>
                  {/* 單個項目 */}
                  <div><br/>
            <div className="evaluation-card eva-shadow text-center">
              <div className="avrtor-circle">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  className="img_cover_sm"
                  alt="保母評價頭像"
                />
              </div>
              <div className="evaluation-content">
                <h6>
                  Julia 保母{' '}
                  <FontAwesomeIcon icon={faStar} className="star-color" />
                  4.3
                </h6>
                <section className="eva-content-text">隨時可以聯繫得到保母，會發照片告知狀況。雖離台北市區內較遠，但開車交通方便又好找。隨時可以聯繫得到保母，會發照片告知狀況。雖離台北市區內較遠，但開車交通方便又好找。</section>
                <button type="button" class="my-2 btn btn-secondary btn-woof">
                  查看此保母
                </button>
              </div>
            </div><br/>
          </div>        {/* 單個項目 */}
          <div><br/>
            <div className="evaluation-card eva-shadow text-center">
              <div className="avrtor-circle">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  className="img_cover_sm"
                  alt="保母評價頭像"
                />
              </div>
              <div className="evaluation-content">
                <h6>
                  Julia 保母{' '}
                  <FontAwesomeIcon icon={faStar} className="star-color" />
                  4.3
                </h6>
                <section className="eva-content-text">隨時可以聯繫得到保母，會發照片告知狀況。雖離台北市區內較遠，但開車交通方便又好找。隨時可以聯繫得到保母，會發照片告知狀況。雖離台北市區內較遠，但開車交通方便又好找。</section>
                <button type="button" class="my-2 btn btn-secondary btn-woof">
                  查看此保母
                </button>
              </div>
            </div><br/>
          </div>        {/* 單個項目 */}
          <div><br/>
            <div className="evaluation-card eva-shadow text-center">
              <div className="avrtor-circle">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  className="img_cover_sm"
                  alt="保母評價頭像"
                />
              </div>
              <div className="evaluation-content">
                <h6>
                  Julia 保母{' '}
                  <FontAwesomeIcon icon={faStar} className="star-color" />
                  4.3
                </h6>
                <section className="eva-content-text">隨時可以聯繫得到保母，會發照片告知狀況。雖離台北市區內較遠，但開車交通方便又好找。隨時可以聯繫得到保母，會發照片告知狀況。雖離台北市區內較遠，但開車交通方便又好找。</section>
                <button type="button" class="my-2 btn btn-secondary btn-woof">
                  查看此保母
                </button>
              </div>
            </div><br/>
          </div>        {/* 單個項目 */}
          <div><br/>
            <div className="evaluation-card eva-shadow text-center">
              <div className="avrtor-circle">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  className="img_cover_sm"
                  alt="保母評價頭像"
                />
              </div>
              <div className="evaluation-content">
                <h6>
                  Julia 保母{' '}
                  <FontAwesomeIcon icon={faStar} className="star-color" />
                  4.3
                </h6>
                <section className="eva-content-text">隨時可以聯繫得到保母，會發照片告知狀況。雖離台北市區內較遠，但開車交通方便又好找。隨時可以聯繫得到保母，會發照片告知狀況。雖離台北市區內較遠，但開車交通方便又好找。</section>
                <button type="button" class="my-2 btn btn-secondary btn-woof">
                  查看此保母
                </button>
              </div>
            </div><br/>
          </div>
        </Slider>
      </div>
    )
  }
}
