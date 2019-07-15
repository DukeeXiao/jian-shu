import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import $ from 'jquery'
import { animateScroll } from "react-scroll";
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import Banner from './components/Banner'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import { actionCreators } from './store'

class Home extends PureComponent {
  handleScrollTop() {
    //一步到位
    // $('html, body').animate({'scrollTop': 0}, 600);

    //定时器实现
    // const timer = setInterval(function() {
    //   const osTop = document.documentElement.scrollTop || document.body.scrollTop;
    //   const speed = Math.floor(-osTop / 6);
    //   document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
    //   console.log(osTop);
    //   if (osTop === 0) {
    //     clearInterval(timer);
    //     }
    //   }, 30);
    // };

  // scrollToAnchor = (anchorName) => {
  //   if (anchorName) {
  //       let anchorElement = document.getElementById(anchorName);
  //       if(anchorElement) { anchorElement.scrollIntoView(); }
  //       // if (anchorElement) { anchorElement.scrollIntoView({ behavior: 'smooth' }); }//加上smooth字段，会有平滑滚动动画    无效？？？？？
  //   }

    animateScroll.scrollToTop();
  };

  render() {
    return (
      <HomeWrapper id="pageTop">
        <HomeLeft>
          <Banner />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}><i className='iconfont'>&#xe600;</i></BackTop> : ''}
        {/* { this.props.showScroll ? <BackTop onClick={() => this.scrollToAnchor('pageTop')}><i className='iconfont'>&#xe600;</i></BackTop> : ''} */}
      </HomeWrapper>
    )
  };

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  };

  componentWillMount() {
    window.removeEventListener('scroll', this.props.changeShowScroll);
  };

  bindEvents() {
    window.addEventListener('scroll', this.props.changeShowScroll);
  };
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeShowScroll() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleShowScroll(true))
    } else {
      dispatch(actionCreators.toggleShowScroll(false))
    }
  }
});

export default connect(mapState, mapDispatch)(Home);