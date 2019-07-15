import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 10;
`;

export const HeaderWidth = styled.div`
  height: 56px;
  min-width: 1200px;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  
  @media (max-width: 1220px) {
    width: 660px;
  }
  @media (min-width: 1220px) {
    width: 760px;
  }
  @media (min-width: 1320px) {
    width: 860px;
  }
  @media (min-width: 1420px) {
    width: 960px;
  }
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  & .active {
    color: #ea6f5a !important;
  }
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 15px;
  color: #333;
  cursor: pointer;
  position: relative;
  &:hover {
    background: #eee;
  }
  &.left {
    float: left;
    font-size: 16px;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
  & .iconfont {
    font-size: 20px;
    margin-right: 5px;
    &.arrow {
      font-size: 12px;
      margin-right: 0;
      margin-left: 5px;
    }
  }
  .avatar {
    vertical-align: middle;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .user-menu {
    position: absolute;
    top: 55px;
    left: 0;
    display: none; 
    width: 160px;
    background: #fff;
    border-radius: 4px;
    margin: 2px 0 0;
    list-style: none;
    font-size: 16px;
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
    li {
      height: 48px;
      line-height: 48px;
      color: #333;
      padding-left: 15px;
      box-sizing: border-box;
      &:hover {
        background: #eee;
      }
      .iconfont {
        font-size: 18px;
        color: #ea6f5a;
        margin-right: 10px;
      }
    }
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 24px;
    line-height: 24px;
    border-radius: 15px;
    text-align: center;
     &.focused {
      background-color: #777;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 260px;
  height: 36px;
  padding: 0 35px 0 20px;
  margin: 9px 0 0 20px;
  box-sizing: border-box;
  border: none;
  border-radius: 19px;
  color: #666;
  background: #eee;
  font-size: 14px;
  outline: none;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 320px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 320px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 260px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background: #fff;
`;

export const SearchInfoIcon = styled.div`
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom-color: #fff;
  left: 20px;
  bottom: 99%;
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.div`
  cursor: pointer;
  float: right;
  font-size: 13px;
  .spin {
    display: block;
    font-size: 12px;
    margin-right: 3px;
    float: left;
    transition: all .3s ease-in;
    transform-origin: center center;
  }
`;

export const SearchInfoList = styled.span`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  margin: 0 10px 10px 0;
  border: 1px solid #ddd;
  color: #969696;
  border-radius: 3px;
  cursor: pointer;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 18px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background:  #ec6149;
  }
  & .iconfont {
    font-size: 20px;
    margin-right: 5px;
  }
`;