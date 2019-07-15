import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { LoginWrapper, LoginBox, LoginTitle, LoginContainer, LoginMore } from './style'
import { actionCreators } from './store'

class Login extends PureComponent {
  render() {
    const { isLog, login} = this.props;
    if (!isLog) {
       return (
        <LoginWrapper>
          <LoginBox>
            <LoginTitle>
              <span className="login">登录</span>
              <span className="spot">~</span>
              <Link to="/register"><span className="register">注册</span></Link>
            </LoginTitle>
            <LoginContainer>
              <div className="ipt-content">
                <i className="iconfont">&#xe613;</i>
                <input className="tel-ipt" type="text" placeholder="手机号或邮箱" ref={(input) => {this.account = input}} />
              </div>
              <div className="ipt-content">
                <i className="iconfont">&#xe69a;</i>
                <input className="pwd-ipt" type="password" placeholder="密码" ref={(input) => {this.password = input}} />
              </div>
              <div className="rem-content">
                <input type="checkbox"/>
                <span className="remember">记住我</span>
                <span className="forget">登录遇到问题?</span>
              </div>
              <button className="btn" onClick={() => login(this.account, this.password)}>登录</button>
          </LoginContainer>
            <LoginMore>
              <h6 className="more-title">社交账号登录</h6>
              <ul>
                <li><i className="iconfont icon-weibo">&#xe63d;</i></li>
                <li><i className="iconfont icon-weixin">&#xe715;</i></li>
                <li><i className="iconfont icon-qq">&#xe60f;</i></li>
                <li><i className="iconfont icon-zhihu">&#xe62c;</i></li>
              </ul>
            </LoginMore>
          </LoginBox>
        </LoginWrapper>
      )
    }else {
      return <Redirect to='/' />
    }
  }
};

const mapState = (state) => ({
  isLog: state.getIn(['login', 'isLog'])
});

const mapDispatch = (dispatch) => ({
  login(account, password) {
    dispatch(actionCreators.toLogin(account.value, password.value))
  }
});

export default connect(mapState, mapDispatch)(Login);