import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import { RegisterWrapper, RegisterBox, RegisterTitle, RegisterContainer, RegisterMore } from './style'

class Register extends PureComponent {
  render() {
    return (
      <RegisterWrapper>
        <RegisterBox>
          <RegisterTitle>
            <Link to="/login"><span className="login">登录</span></Link>
            <span className="spot">~</span>
            <span className="register">注册</span>
          </RegisterTitle>
          <RegisterContainer>
            <div className="ipt-content">
              <i className="iconfont">&#xe613;</i>
              <input className="name-ipt" type="text" placeholder="你的昵称" />
            </div>
            <div className="ipt-content">
              <i className="iconfont">&#xe6aa;</i>
              <input className="tel-ipt" type="text" placeholder="手机号" />
            </div>
            <div className="ipt-content">
              <i className="iconfont">&#xe69a;</i>
              <input className="pwd-ipt" type="password" placeholder="设置密码" />
            </div>
            <button className="btn">注册</button>
            <p className="prompt">点击 “注册” 即表示您同意并愿意遵守简书</p>
            <p className="links"><span>用户协议</span> 和 <span>隐私政策</span></p>
        </RegisterContainer>
          <RegisterMore>
            <h6 className="more-title">社交账号直接注册</h6>
            <ul>
              <li><i className="iconfont icon-weibo">&#xe63d;</i></li>
              <li><i className="iconfont icon-weixin">&#xe715;</i></li>
              <li><i className="iconfont icon-qq">&#xe60f;</i></li>
              <li><i className="iconfont icon-zhihu">&#xe62c;</i></li>
            </ul>
          </RegisterMore>
        </RegisterBox>
      </RegisterWrapper>
    )
  }
};




export default Register;