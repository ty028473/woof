import React from 'react'
import Conversation from '../../components/chat/Conversation'
import Message from '../../components/chat/Message'
import Footer from '../../components/golbal/Footer'
import NavBar from '../../components/golbal/NavBar'
import { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../components/context/AuthContext'
import axios from 'axios'
import { io } from 'socket.io-client'
import '../../styles/chat.scss'

function Chatroom() {
  const [conversations, setConversations] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessages, setnewMessages] = useState('')
  const [arrivalMessages, setArrivalMessages] = useState(null)
  const socket = useRef()
  const { user } = useContext(AuthContext)
  const scrollRef = useRef()
  useEffect(() => {
    socket.current = io('ws://localhost:8900')
    socket.current.on('getMessage', (data) => {
      setArrivalMessages({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      })
    })
  }, [])
  useEffect(() => {
    arrivalMessages &&
      currentChat?.members.includes(arrivalMessages.sender) &&
      setMessages((prev) => [...prev, arrivalMessages])
  }, [arrivalMessages, currentChat])

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get('/conversations/' + user._id)
        setConversations(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getConversations()
  }, [user._id])

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get('/messages/' + currentChat?._id)
        setMessages(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getMessages()
  }, [currentChat])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const message = {
      sender: user._id,
      text: newMessages,
      conversationId: currentChat._id,
    }
    //判斷朋友
    const receiverId = currentChat.members.find((member) => member !== user._id)
    socket.current.emit('sendMessage', {
      senderId: user._id,
      receiverId,
      text: newMessages,
    })
    try {
      const res = await axios.post('/messages', message)
      setMessages([...messages, res.data])
      setnewMessages('')
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])
  return (
    <>
      <NavBar />
      <div className="container ">
        <div className="messenger mb-4 mt-4">
          <div className="chatMenu">
            <div className="chatMenuWrapper">
              <h3>聊聊</h3>
              <input placeholder="搜尋你的朋友" className="chatMenuInput" />
              {conversations.map((c) => (
                <div onClick={() => setCurrentChat(c)}>
                  <Conversation conversations={c} currentUser={user} />
                </div>
              ))}
            </div>
          </div>
          <div className="chatBox">
            <div className="chatBoxWrapper">
              {currentChat ? (
                <>
                  <div className="chatBoxTop">
                    {messages.map((m) => (
                      <div ref={scrollRef}>
                        <Message message={m} own={m.sender === user._id} />
                      </div>
                    ))}
                  </div>
                  <div className="chatBoxBottom">
                    <textarea
                      className="chatMessageInput"
                      placeholder="說點什麼"
                      onChange={(e) => setnewMessages(e.target.value)}
                      value={newMessages}
                    ></textarea>
                    <button
                      className="btn btn-primary btn-woof chatSubmitButton"
                      onClick={handleSubmit}
                    >
                      送出
                    </button>
                  </div>{' '}
                </>
              ) : (
                <span className="noConversationText">選擇一個人聊天吧</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Chatroom
