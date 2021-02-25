import React from 'react'
import './serverrightimg.css'

const ServerRightImg = (props) => {
  const { title_item_src, title_item_name } = props
  return (
    <div className="server-right__img">
      <img src={title_item_src} alt="" className="server-right-img__img" />
      <div className="server-right__text">{title_item_name}</div>
    </div>
  )
}

export default ServerRightImg
