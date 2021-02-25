import React, { useState, useEffect, memo } from 'react'
// memo 缓存组件
import { connect } from 'react-redux'
import * as actionTypes from '../Main/store/actionCreators'
import ServerSearchInput from './serverhead/serversearchinput/ServerSearchInput'

import ServerContent from './servercontent/ServerContent'
import ServerPopup from '../../components/serverPopup/ServerPopup'

function Server(props) {
  const { index } = props
  const { changeIndexData } = props

  const [serverDisplay, setServerDisplay] = useState(false)

  useEffect(() => {
    changeIndexData(1)
  }, [index, changeIndexData])

  const handleClickIcon = () => {
    setServerDisplay(!serverDisplay)
  }
  return (
    <div>
      <ServerSearchInput
        handleClickIcon={handleClickIcon}
        SearchBoxhandleOnclick={() => props.history.push('/search')}
      />
      <ServerContent />
      <ServerPopup display={serverDisplay} handleOnClick={handleClickIcon} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  index: state.main.index,
})
const mapDispatchToProps = (dispatch) => {
  return {
    changeIndexData(newIndex) {
      dispatch(actionTypes.changeIndexData(newIndex))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Server))
