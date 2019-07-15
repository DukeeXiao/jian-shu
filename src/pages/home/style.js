import styled from 'styled-components'
import codePic from '../../statics/code.png'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
  padding-top: 30px;
  margin-top: 56px;
`;

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;


export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px
  line-height: 32px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-left: 18px;
  margin-bottom: 18px;
  cursor: pointer;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const TopicMore = styled.div`
  float: left;
  height: 32px
  line-height: 32px;
  font-size: 14px;
  color: #787878;
  margin-left: 18px;
  margin-bottom: 18px;
  cursor: pointer;
`;


export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    boder-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
    margin-bottom: 8px;
  }
  .author {
    font-size: 12px;
    color: #b4b4b4;
    margin-right: 10px;
    &:hover {
      color: #666;
    }
  }
`;


export const RecommendWrapper = styled.div`
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl}) no-repeat center;
  background-size: contain;
  margin-bottom: 6px;
  cursor: pointer;
`;

export const RecommendDownload = styled.a`
  display: block;
  width: 280px;
  height: 82px;
  padding: 10px 22px;
  box-sizing: border-box;
  margin: 10px 0 30px 0;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  .image {
    float: left;
    width: 60px;
    height: 60px;
    background: url(${codePic});
    background-size: 100% 100%;
  }
  .info {
    float: left;
    width: 143px;
    font-size: 15px;
    color: #333;
    margin: 10px;
  }
  .title {
    font-size: 15px;
    color: #333;
  }
  .description {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
    margin-top: 8px;
  }
  .code {
    display: none;
    position: absolute;
    height: 150px;
    width: 150px;
    border: 1px solid #ccc;
    border-radius: 3px;
    background: #fff;
    padding: 5px;
    top: -170px;
    left: 53px;
    .codeImg {
      width: 150px;
      height: 150px;
    }
    .codeArrow {
      position: absolute;
      background: #fff;
      width: 13px;
      height: 13px;
      left: 50%;
      transform: rotate(45deg) translateX(-50%);
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      bottom: -13px;
    }
  }
`;


export const WriterWrapper = styled.div`
  width: 280px;
`;

export const WriterTitle = styled.div`
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 14px;
  color: #969696;
  overflow: hidden;
`;

export const WriterWords = styled.div`
  float: left;
`;

export const WriterSwitch = styled.div`
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

export const WriterItem = styled.div`
  width: 280px;
  height: 47px;
  margin-top: 15px;
  .pic {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    display: block;
    float: left;
    cursor: pointer;
  }
  .content {
    width: 220px;
    padding-top: 10px;
    font-size: 13px;
    float: right;
    .author {
      float: left;
      color: #333;
      font-size: 14px;
      cursor: pointer;
    }
    .focus {
      float: right;
      color: #42c02e;
      cursor: pointer;
    }
    .detail {
      margin-top: 20px;
      font-size: 12px;
      color: #969696;
    }
  }
`;

export const WriterAll = styled.div`
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 13px;
  color: #787878;
  margin-top: 30px;
  cursor: pointer;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  box-sizing: border-box;
`;


export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  text-align: center;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;


export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 30px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background-color: #ea6f5a;
  & .iconfont {
    font-size: 28px;
  }
`;


export const BannerWrapper = styled.div`
  width: 625px;
  cursor: pointer;
  & .swiper-container {
    border-radius: 6px;
  }
  & .swiper-pagination-bullet {
    width: 25px;
    height: 3px;
    background-color: #000;
    opacity: .3;
  }
  & .swiper-pagination-bullet-active {
    width: 25px;
    height: 3px;
    background-color: #fff;
    transition: all .5s ease-in
  }
  & .swiper-button-next, .swiper-button-prev {
    transition: all .3s ease-in;
    visibility:hidden;
    opacity: 0;
    background-size: 40% 40%;
    background-color: rgba(0,0,0,.4);
    height: 50px;
    width: 40px;
    &.show {
      visibility: visible;
      opacity: 1;
    }
  }
  & .swiper-button-prev {
    left: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  & .swiper-button-next {
    right: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
`;


