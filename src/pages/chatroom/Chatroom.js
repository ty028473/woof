import React from 'react'
import Conversation from '../../components/chat/Conversation'
import Message from '../../components/chat/Message'
import Footer from '../../components/golbal/Footer'
import NavBar from '../../components/golbal/NavBar'
import "../../styles/chat.scss"


function chatroom(props) {
  return (
    <>
      <NavBar />
      <div className="container ">
      <div className="messenger mb-4 mt-4">
      
        <div className="chatMenu">
          <div className="chatMenuWrapper">
          <h3>聊聊</h3>
            <input placeholder="搜尋你的朋友" className="chatMenuInput" />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="說點什麼"
              ></textarea>
              <button className="btn btn-primary btn-woof chatSubmitButton">送出</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default chatroom
