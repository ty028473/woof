import React from 'react'
import '../../styles/calender.scss'
import { faStar, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import evaluation from '../../local-json/evaluation.json'
function Evalution(props) {
  const [evaluationData, setEvaluationState] = React.useState(evaluation)
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between my-2">
          <div className="col-12  ">
            <h3>評價</h3>
          </div>
        </div>
      </div>
      <div className="container calendar-bg mt-2">
        <div className="row d-flex justify-content-center ">
          {evaluationData &&
            evaluationData.map(
              ({ img, name, create_time, content, score, id }) => (
                <div className="container" key={id}>
                  <div className="row  m-4 ">
                    <div className="col-2  my-2  ">
                      <img
                        src={img}
                        className="evaluation-img-cover"
                        alt="保母頭像"
                      />
                    </div>
                    <div className="col-9  my-2  ">
                      <div className="container">
                        <div className="row d-flex justify-content-start ">
                          <div className="col-3 pl-0 ">
                            <h5> {name}</h5>
                          </div>
                          <div className="col-3  ">
                            <h5> {create_time}</h5>
                          </div>
                        </div>
                      </div>

                      <FontAwesomeIcon
                        icon={faStar}
                        color="#fac42e"
                        size="lg"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        color="#fac42e"
                        size="lg"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        color="#fac42e"
                        size="lg"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        color="#fac42e"
                        size="lg"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        color="#fac42e"
                        size="lg"
                      />
                      <br />
                      <p>{content}</p>
                    </div>
                  </div>
                </div>
              )
            )}

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
