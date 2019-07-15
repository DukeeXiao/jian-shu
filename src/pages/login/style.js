import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 56px;
  bottom: 0;
  background: #eee;
`;

export const LoginBox = styled.div`
  width: 400px;
  margin: 100px auto;
  padding: 50px 50px 30px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .1);
  box-sizing: border-box;
`;

export const LoginTitle = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 50px;
  overflow: hidden;
  .login {
    display: inline-block;
    color: #ea6f5a;
    padding: 10px;
    border-bottom: 2px solid #ea6f5a;
  }
  .spot{
    padding: 10px;
  }
  .register {
    display: inline-block;
    color: #969696;
    padding: 10px;
    &:hover {
      border-bottom: 2px solid #ea6f5a;
    }
  }
`;

export const LoginContainer = styled.div`
  .ipt-content {
    position: relative;
    input {
      width: 300px;
      height: 50px;
      margin-bottom: 0;
      outline: none;
      padding: 4px 12px 4px 35px;
      border: 1px solid #c8c8c8;
      border-radius: 0 0 4px 4px;
      background-color: hsla(0,0%,71%,.1);
      vertical-align: middle;
      box-sizing: border-box;
      &.tel-ipt {
        border-bottom: none;
        border-radius: 4px 4px 0 0;
      }
    }
  }
  .iconfont {
    position: absolute;
    top: 14px;
    left: 10px;
    font-size: 18px;
    color: #969696;
  }
  .rem-content {
    margin: 15px 0;
    font-size: 15px;
    color: #969696;
    vertical-align: middle;
    .remember {
      margin-left: 5px;
    }
    .forget {
      float: right;
      font-size: 14px;
      color: #999;
      &:hover {
        color: #000;
        cursor: pointer;
      }
    }
  }
  .btn {
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
  }
`;

export const LoginMore = styled.div`
  margin-top: 50px;
  .more-title {
    position: relative;
    margin: 0 0 10px;
    font-size: 12px;
    color: #b5b5b5;
    text-align: center;
    &:before, &:after {
      content: "";
      border-top: 1px solid #b5b5b5;
      display: block;
      position: absolute;
      width: 60px;
      top: 5px;
    }
    &:before {
      left: 30px;
    }
    &:after {
      right: 30px;
    }
  }
  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
    li {
      cursor: pointer;
    }
  }
  .iconfont {
    font-size: 28px;
    &.icon-weibo {
      color: #e05244;
    }
    &.icon-weixin {
      font-size: 36px;
      color: #00bb29;
    }
    &.icon-qq{
      color: #498ad5;
    }
    &.icon-zhihu {
      color: #0084ff;
    }
  }
`;





