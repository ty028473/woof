import "../../styles/chat.scss"


export default function Message({own}) {
  return (
    <div className={own ? "message own":"message"}>
      <div className="messageTop">
        <img src="https://i.ppfocus.com/2020/9/317d08b.jpg" alt="" className="messageImg" />
        <p className="messageText">在德國有一條克林德街，紀念被清朝團練兵刺殺的德意志帝國駐華公使克林德。當時，德王威廉二世決定向清國報復，「要讓未來的一千年，沒有一個中國人膽敢斜視德國人」。</p>
      </div>
      <div className="messageBottom">1 小時前</div>
    </div>
  )
}
