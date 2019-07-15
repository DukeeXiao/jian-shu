import styled from 'styled-components'

export const RegisterWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 56px;
  bottom: 0;
  background: #eee;
`;

export const RegisterBox = styled.div`
  width: 400px;
  margin: 100px auto;
  padding: 50px 50px 30px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .1);
  box-sizing: border-box;
`;

export const RegisterTitle = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 50px;
  overflow: hidden;
  .login {
    display: inline-block;
    color: #969696;
    padding: 10px;
    &:hover {
      border-bottom: 2px solid #ea6f5a;
    }
  }
  .spot{
    padding: 10px;
  }
  .register {
    display: inline-block;
    color: #ea6f5a;
    padding: 10px;
    border-bottom: 2px solid #ea6f5a;
  }
`;

export const RegisterContainer = styled.div`
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
      &.name-ipt {
        border-bottom: none;
        border-radius: 4px 4px 0 0;
      }
      &.tel-ipt {
        border-bottom: none;
        border-radius: 0 0 0 0;
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
  .btn {
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3db922;
    cursor: pointer;
    outline: none;
    display: block;
    margin-top: 20px;
  }
  .prompt {
    margin-top: 10px;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #969696;
  }
  .links {
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #969696;
    span {
      cursor: pointer;
      color: #3194d0;
    }
  }
`;

export const RegisterMore = styled.div`
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





