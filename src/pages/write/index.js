import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'
import { WriteWrapper } from './style'

class Write extends PureComponent {
  render() {
    return (
      <WriteWrapper>写文章呢~~~~</WriteWrapper>
    )
    // const { isLog } = this.props;
    // if (isLog) {
    //    return (
    //     <WriteWrapper>写文章呢~~~~</WriteWrapper>
    //   )
    // }else {
    //   alert("请先登录！");
    //   return <Redirect to='/login' />
    // }
  }
};

const mapState = (state) => ({
  isLog: state.getIn(['login', 'isLog'])
});

export default connect(mapState, null)(Write);