import React from 'react'
import '../../styles/about.scss'

function AboutTop(props) {
  return (
    <>
      <div className="abTop">
        <div className="abToptext">
          <h1 className="mb-4" >狗的脚印與心相連</h1>
          <p className="abtopp">查找並預訂您所在城市的當地寵物保姆、遛狗者和寵物服務者</p>
        </div>
        <div className="abImgcover">
          <img className="abImg" src="../images/about/1.png" alt="" />
        </div>
      </div>
   
        
      <h3 className="mt-3 mb-3 text-center">關於woof</h3>
      
    </>
  )
}

export default AboutTop
