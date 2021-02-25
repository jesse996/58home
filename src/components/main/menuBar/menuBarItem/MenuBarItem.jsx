import React from 'react'
import { withRouter } from 'react-router-dom'
import './MenuBarItem.css'
// import Swiper from 'swiper';
// import "swiper/css/swiper.min.css";
// import {menuBarData} from '../../../../Data/mainData/index'

const MenuBarItem = (props) => {
  const menuBarData = props.menuBarData || []
  function handleclick(id) {
    props.history.push(`/detail?data=${encodeURIComponent(id)}`)
  }
  return (
    <div className="menu-item__box">
      {menuBarData.map((item, index) => {
        return (
          <div
            className="item-box"
            key={index}
            onClick={() => {
              handleclick(item.type)
            }}
          >
            <img src={item.picUrl} alt="" className="item-box__img" />
            <div className="item-box__text">{item.type}</div>
          </div>
        )
      })}
    </div>
  )
}
export default withRouter(MenuBarItem)
