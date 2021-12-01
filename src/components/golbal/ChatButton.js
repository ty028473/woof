import React from 'react'
import '../../styles/golbal.scss'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function ChatButton(props) {
  return (
    <Link to="/chatroom">
      <button className="chat-button btn">
        <h5>
          <FontAwesomeIcon icon={faCommentDots} size="m" className="mr-3" />
          聊聊
        </h5>
      </button>
    </Link>
  )
}

export default ChatButton
