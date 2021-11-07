import '../../styles/calender.scss'
import { faStar, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Evalution(props) {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between my-2">
          <div className="col-12  ">
            <h3>評價</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center mb-4 calendar-bg">
          <div className="container">
            <div className="row  ">
              <div className="col-2  my-2  ">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  className="evaluation-img-cover"
                  alt="保母頭像"
                />
              </div>
              <div className="col-9  my-2  ">
                <div className="container">
                  <div className="row d-flex justify-content-start ">
                    <div className="col-3 pl-0 ">
                      <h5> 陳寶詩</h5>
                    </div>
                    <div className="col-3  ">
                      <h5> 2021/1/12</h5>
                    </div>
                  </div>
                </div>

                <FontAwesomeIcon icon={faStar} color="#fac42e" size="lg" />
                <FontAwesomeIcon icon={faStar} color="#fac42e" size="lg" />
                <FontAwesomeIcon icon={faStar} color="#fac42e" size="lg" />
                <FontAwesomeIcon icon={faStar} color="#fac42e" size="lg" />
                <FontAwesomeIcon icon={faStar} color="#fac42e" size="lg" />
                <br />
                <p>
                  已經是第二次預訂，我家貓咪還記得Linda，絲毫不陌生，很細心照顧我的貓小孩，真的非常非常感謝，之後也多多指教了
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row ">
              <div className="col-2  my-2  ">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  className="evaluation-img-cover"
                  alt="保母頭像"
                />
              </div>
              <div className="col-9  my-2  ">
                <div className="container">
                  <div className="row d-flex justify-content-start ">
                    <div className="col-3 pl-0 ">
                      <h5> 陳寶詩</h5>
                    </div>
                    <div className="col-3  ">
                      <h5> 2021/1/12</h5>
                    </div>
                  </div>
                </div>
                <FontAwesomeIcon icon={faStar} color="#fac42e" size="lg" />
                <FontAwesomeIcon icon={faStar} color="#fac42e" size="lg" />
                <FontAwesomeIcon icon={faStar} color="#fac42e" size="lg" />
                <FontAwesomeIcon icon={faStar} color="#fac42e" size="lg" />
                <FontAwesomeIcon icon={faStar} color="#fac42e" size="lg" />
                <br />
                <p>
                  已經是第二次預訂，我家貓咪還記得Linda，絲毫不陌生，很細心照顧我的貓小孩，真的非常非常感謝，之後也多多指教了
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="col-1 my-3 btn btn-primary btn-sm btn-woof"
          >
            查看更多
          </button>
        </div>
      </div>
    </>
  )
}

export default Evalution
