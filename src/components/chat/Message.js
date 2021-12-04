import "../../styles/chat.scss"
import { format } from 'timeago.js'



export default function Message({own,message}) {
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className="messageTop">
        <img
          src="https://i.ppfocus.com/2020/9/317d08b.jpg"
          alt=""
          className="messageImg"
        />
        <p className="messageText">123</p>
      </div>
      <div className="messageBottom">123</div>
    </div>
  )
}