import React from 'react'
import { Head } from './HeadComponent.style.js'
// import add from '../../assets/images/加号.png';

const HeadComponent = (props) => {
  const { title, handleback } = props
  return (
    <Head>
      <svg className="leftimg icon" aria-hidden="true" onClick={handleback}>
        <use xlinkHref="#iconleft"></use>
      </svg>
      <span>{title}</span>
      <svg className="share icon" aria-hidden="true">
        <use xlinkHref="#iconshare"></use>
      </svg>
    </Head>
  )
}
export default HeadComponent
