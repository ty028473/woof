import React from 'react'
import personal from '../../local-json/personal.json'
import '../../styles/calender.scss'
import { faStar, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SitterDetail(props) {
  const [personalData, setPersonalState] = React.useState(personal)
  return (
    <>
      {personalData &&
        personalData.map(({ img, name, district, evaluation, starnum, id }) => (
          <table className=" list-styled">
            <tr key={id}>
              <td>
                <img className="profile-img-cover" src={img} alt="img" />
              </td>

              <td className="proflie-width ">
                <h3>{name}</h3>
                <FontAwesomeIcon icon={faStar} className="sitter-icon mr-1" />
                {starnum}
                <br />
                <p className="evaluation-font">{evaluation}</p>
                <br />
                <FontAwesomeIcon icon={faMapMarker} className="mr-1" />
                {district}
              </td>
            </tr>
          </table>
        ))}

      <button
        type="button"
        className="col-6 mt-3 btn btn-secondary btn-sm btn-woof"
      >
        聊聊
      </button>
    </>
  )
}

export default SitterDetail
