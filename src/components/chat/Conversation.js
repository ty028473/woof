import axios from 'axios'
import { useEffect, useState } from 'react'
import '../../styles/chat.scss'

export default function Conversation({ conversations, currentUser }) {
  const [user, setUser] = useState(null)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  // useEffect(() => {
  //   const friendId = conversations.members.find((m) => m !== currentUser._id)

  //   const getUser = async () => {
  //     try {
  //       const res = await axios('/users?userId=' + friendId)
  //       setUser(res.data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getUser()
  // }, [conversations, currentUser])
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={
          user?.profilePicture
            ? user.profilePicture
            : PF + 'person/noAvatar.Png'
        }
        alt=""
      />
      <span className="conversationName">123</span>
    </div>
  )
}
