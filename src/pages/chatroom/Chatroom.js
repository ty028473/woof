import React from 'react'
import Conversation from '../../components/chat/Conversation'
import Message from '../../components/chat/Message'
import Footer from '../../components/golbal/Footer'
import { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { io } from 'socket.io-client'
import '../../styles/chat.scss'
import NewNavBar from '../../components/golbal/NewNavBar'
import '../../styles/chat.scss'
import { format, render, cancel, register } from 'timeago.js'
import { PUBLIC_URL } from '../../configs/Config'
import ScrollToBottom from 'react-scroll-to-bottom'
import '../chatroom/chat.css'
import moment from "moment"

function Chatroom() {
  
  const socket = useRef()
  useEffect(() => {
    socket.current = io('http://localhost:8801')
  }, [])
  const PF ="http://localhost:3000/images/"
  const NF ="http://localhost:8801"


  const [currentMessage, setCurrentMessage] = useState('')
  const [messageList, setMessageList] = useState([
    {
      author: 'Woof 汪汪管理員',
      avatar: '/memberImg/woof_administrator.png',
      message: '歡迎來到Woof聊天室',
      time: moment().format('YYYY/MM/DD HH:mm:ss'),
    },
    {
      author: 'Woof 汪汪管理員',
      avatar: '/memberImg/woof_administrator.png',
      message: '預防詐騙請勿私下匯款 ... ',
      time: moment().format('YYYY/MM/DD HH:mm:ss'),
    },
  ])
  let user = JSON.parse(localStorage.getItem('id'))
  const sendMessage = async () => {
    let user = JSON.parse(localStorage.getItem('id'))
    // let user = await axios.get('http://localhost:3001/api/users/userInfo');
    if (currentMessage !== '' && user !== null) {
      const messageData = {
        author: user.name,
        avatar:(user.image ? user.image  :  +"person/noAvatar.png"),
        message: currentMessage,
        time: moment().format('YYYY/MM/DD HH:mm:ss'),
      }
      await socket.current.emit('send_message', messageData)
      
      setMessageList((list) => [...list, messageData])
      setCurrentMessage('')
    }
  }

  useEffect(() => {
    // cb 的 data 為 後端廣播出來的 data
    socket.current.on('receive_message', (data) => {
      // 接到訊息後塞進 messageList
      setMessageList((list) => [...list, data])
    })
  }, [])

  return (
    <>
      <NewNavBar />
      <div className="container ">
        {/* <div className="messenger mb-4 mt-4">
          <div className="chatMenu">
            <div className="chatMenuWrapper">
              <h3>聊聊</h3>
              <input placeholder="搜尋你的朋友" className="chatMenuInput" />
              <Conversation />
            </div>
          </div>
          <div className="chatBox">
            <div className="chatBoxWrapper">
              <div className="chatBoxTop">
                <Message />
              </div>
              <div className="chatBoxBottom">
                <textarea
                  className="chatMessageInput"
                  placeholder="說點什麼"
                ></textarea>
                <button className="btn btn-primary btn-woof chatSubmitButton">
                  送出
                </button>
              </div>{' '}
            </div>
          </div>
        </div> */}

        <div className="chat-window">
          <div className="chat-header">
            <p className="text-center">WOOF聊天室</p>
          </div>
          <div className="chat-body">
            <ScrollToBottom className="message-container">
              {messageList.map((messageContent, id) => {
                return (
                  <div
                    className="message d-flex"
                    id={
                      user && user.name === messageContent.author
                        ? 'you'
                        : 'other'
                    }
                    key={id}
                  >
                    <div>
                      <div className="message-content">
                        <p>{messageContent.message}</p>
                      </div>
                      <div className="message-meta">
                        <p className="me-1" id="author">
                          {messageContent.author}
                        </p>
                        <p className="ml-2" id="time">{messageContent.time}</p>
                      </div>
                    </div>
                    <div className="chatAvatar">
                      <img src={(messageContent.avatar? NF+messageContent.avatar: PF +"person/noAvatar.png")} alt="" />
                    </div>
                  </div>
                )
              })}
            </ScrollToBottom>
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={currentMessage}
              placeholder={
                user ? '來說點什麼 ...' : '請先登入才能傳送訊息喔 ...'
              }
              onChange={(event) => {
                setCurrentMessage(event.target.value)
              }}
              onKeyPress={(e) => {
                e.key === 'Enter' && sendMessage()
              }}
              disabled={user ? false : true}
            />
            <button onClick={sendMessage}>送出</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Chatroom
