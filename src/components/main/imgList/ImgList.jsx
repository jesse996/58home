import React from 'react'
import './imgList.css'
import imgList1 from '../../../../src/assets/images/imgList1.png'
import imgList2 from '../../../../src/assets/images/imgList2.png'
import { Link } from 'react-router-dom'

function ImgList(props) {
  return (
    <div className="imgList-box">
      <div className="imgList-one">
        <Link to="/detail">
          <img src={imgList1} className="imgList-one__img" alt="" />
        </Link>
      </div>
      <div className="imgList-one">
        <Link to="/detail">
          <img src={imgList2} className="imgList-one__img" alt="" />
        </Link>
      </div>
    </div>
  )
}

export default ImgList
