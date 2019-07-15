import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import {CSSTransition} from 'react-transition-group'
import 
  { HeaderWrapper, HeaderWidth, Logo, Nav, NavItem, SearchInfo, SearchInfoTitle, SearchInfoSwitch,
  SearchInfoIcon, SearchInfoList, SearchInfoItem, SearchWrapper, NavSearch, Addition, Button } from './style'
import avatar from '../../statics/avatar.jpg'
import {actionCreators} from './store'
import {actionCreators as loginActionCreators} from '../../pages/login/store'



class Header extends PureComponent {
  getListArea() {
    const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    // 数据分页处理
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (i < newList.length) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoIcon />
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.icon)}>
              <i ref={(icon) => {this.icon = icon}} className='iconfont spin'>&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList} 
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  };

  userEnter(menu) {
    $(menu).show();
  };

  userLeave(menu) {
    $(menu).hide();
  };

  render() {
    const {  navIndex, navClick, focused, list, handleInputFocus, handleInputBlur, isLog, logout } = this.props;
    return (
      <HeaderWrapper>
        <HeaderWidth>
          <Link to='/' >
            <Logo/>
          </Link>
          <Nav>
            <Link to='/'>
              <NavItem className={navIndex === 0 ? 'left active' : 'left'}
                onClick={() => navClick(0)}>
                <i className='iconfont'>&#xe60c;</i>首页
              </NavItem>
            </Link>
            <Link to='/download'>
              <NavItem className={navIndex === 1 ? 'left active' : 'left'}
                onClick={() => navClick(1)}>
                <i className='iconfont'>&#xe604;</i>下载App
              </NavItem>
            </Link>
            {
              isLog ? 
                <NavItem className='right'
                  onMouseEnter={() => {this.userEnter(this.userMenu)}}
                  onMouseLeave={() => {this.userLeave(this.userMenu)}}
                  >
                  <img className='avatar' src={avatar} alt=""/>
                  <i className='iconfont arrow'>&#xe601;</i>
                  <ul className='user-menu' ref={(userMenu) => {this.userMenu = userMenu}}>
                    <li><i className='iconfont'>&#xe613;</i>我的主页</li>
                    <li><i className='iconfont'>&#xe625;</i>收藏的文章</li>
                    <li><i className='iconfont'>&#xe602;</i>喜欢的文章</li>
                    <li><i className='iconfont'>&#xe603;</i>已购内容</li>
                    <li onClick={logout}><i className='iconfont'>&#xe650;</i>退出</li>
                  </ul>
                </NavItem>
                : 
                <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
            }
            
            <NavItem className='right'>
              <i className='iconfont'>&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition in={focused} timeout={200} classNames='slide'>
                <NavSearch 
                  className={focused ? 'focused' : '' }
                  onFocus={()  => handleInputFocus(list)}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className={focused ? 'iconfont focused zoom' : 'iconfont zoom' }>&#xe64d;</i>
              {this.getListArea()}
            </SearchWrapper>
          </Nav>
          <Addition>
            {
              isLog ? 
                <Link to='/write'>
                  <Button className='writting'>
                    <i className='iconfont'>&#xe6a4;</i>
                    写文章
                  </Button>
                </Link>
                :
                <Link to='/login'>
                  <Button className='writting'>
                    <i className='iconfont'>&#xe6a4;</i>
                    写文章
                  </Button>
                </Link>
            }
            
            {
              isLog ? '' : <Link to='/register'><Button className='reg'>注册</Button></Link>
            }
          </Addition>
        </HeaderWidth>
      </HeaderWrapper>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    navIndex: state.getIn(['header', 'navIndex']),
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    isLog: state.getIn(['login', 'isLog']),
    
    // focused: state.get('header').get('focused')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    navClick(i) {
      dispatch(actionCreators.changeIndex(i));
    },
    handleInputFocus(list) {
      // if (list.size === 0) {
      //   dispatch(actionCreators.getList());
      // }
      //避免重复发送请求，  代替条件判断
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, icon) {
      // 取出数字
      let originAngle = icon.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      // icon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      // 模板字符串
      icon.style.transform = `rotate(${originAngle + 360}deg)`;
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.toLogout());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);