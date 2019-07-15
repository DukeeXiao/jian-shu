import styled from 'styled-components'
import background from '../../statics/app-background.png'
import logo from '../../statics/app-logo.png'
import phone from '../../statics/app-phone.png'
import pic1 from '../../statics/app-pic1.png'
import pic2 from '../../statics/app-pic2.png'
import pic3 from '../../statics/app-pic3.png'
import pic4 from '../../statics/app-pic4.png'
import codePic from '../../statics/code.png'

export const DownloadWrapper = styled.div`
  margin-top: 56px;
`;
 
export const TopWrapper = styled.div`
  width: 100%
  height: 504px;
  background: #fff;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background-image: linear-gradient(0deg,hsla(0,0%,59%,.15),hsl(0, 0%, 100%));
  }
`;
 
export const TopContent = styled.div`
  width: 960px;
  margin: 0 auto;
  .top-logo {
    width: 312px;
    padding-top: 50px;
    margin: 0 auto 40px;
    overflow: hidden;
    .logo {
      float: left;
      width: 100px;
      height: 100px;
      background: url(${logo}) center center no-repeat;
      background-size: 100% 100%;
    }
    .info {
      float: left;
      margin: 10px 0 0 20px;
      .title {
        font-size: 30px;
        color: #333;
        line-height: 42px;
        margin-bottom: 10px;
      }
      .slogan {
        font-size: 24px;
        font-weight: 300;
      }
    }
  }

  .back-image {
    width: 765px;
    height: 172px;
    margin: 0 auto;
    margin-top: -100px;
    background: url(${background}) center top no-repeat;
    background-size: 100% 100%;
  }

  .top-image {
    margin-top: -70px;
    overflow: hidden;
    .image {
      float: left;
      width: 410px;
      height: 314px;
      margin-left: 160px;
      background: url(${phone}) center top no-repeat;
      background-size: 100% 100%;
    }
    .top-code {
      float: left;
      margin: 65px 0 0 45px;
      .code {
        width: 140px;
        height: 140px;
        background: url(${codePic}) center top no-repeat;
        background-size: 100% 100%;
      }
      .title {
        margin-top: 4px;
        font-size: 24px;
        line-height: 40px;
        color: #333;
      }
      .description {
        margin-top: 4px;
        font-size: 16px;
        font-weight: 300;
      }
    }
  }
`;
 
export const PicWrapper = styled.div`
  width: 960px;
  height: 377px;
  margin: 100px auto 50px;
  background: url(${pic1}) center top no-repeat;
  background-size: 100% 100%;
  .title {
    margin: 0 0 20px 80px;
    font-size: 28px;
    font-weight: 400;
    color: #333;
  }
  .description {
    width: 450px;
    margin-left: 80px;
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;
  }
`;

export const ClubWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
  padding: 30px 0;
  .image {
    float: left;
    width: 410px;
    height: 390px;
    margin-left: 50px;
    background: url(${pic2}) center top no-repeat;
    background-size: 100% 100%;
  }
  .info {
    float: left;
    width: 410px;
    margin: 80px 0 0 40px;
    padding: 0 15px;
    .title {
      margin: 20px 0;
      font-size: 28px;
    }
    .description {
      line-height: 30px;
    }
  }
`;

export const EditorWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
  padding: 30px 0;
  .image {
    float: right;
    width: 450px;
    height: 310px;
    padding: 0 15px;
    background: url(${pic3}) center top no-repeat;
    background-size: 100% 100%;
  }
  .info {
    float: left;
    width: 370px;
    margin: px 0 0 80px;
    padding: 0 15px;
    .title {
      margin: 20px 0;
      font-size: 28px;
    }
    .description {
      line-height: 30px;
    }
  }
`;

export const ExchangeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
  padding: 30px 0;
  .image {
    float: left;
    width: 410px;
    height: 330px;
    margin-left: 50px;
    background: url(${pic4}) center top no-repeat;
    background-size: 100% 100%;
  }
  .info {
    float: left;
    width: 410px;
    margin: 80px 0 0 40px;
    padding: 0 15px;
    .title {
      margin: 20px 0;
      font-size: 28px;
    }
    .description {
      line-height: 30px;
    }
  }
`;

export const BottomWrapper = styled.div`
  width: 960px;
  margin: 50px auto;
  overflow: hidden;
  .back-image {
    width: 765px;
    height: 172px;
    margin: 0 auto;
    background: url(${background}) center center no-repeat;
    background-size: 100% 100%;
  }
  .code-image {
    width: 140px;
    height: 140px;
    margin: -170px auto 10px;
    background: url(${codePic}) center center no-repeat;
    background-size: 100% 100%;
  }
  .description {
    text-align: center;
    font-size: 24px;
  }
  .bottom-logo {
    margin-top: 30px;
    text-align: center;
    .logo {
      display: inline-block;
      width: 56px;
      height: 56px;
      background: url(${logo}) center center no-repeat;
      background-size: 100% 100%;
    }
  }
  .info {
    display: inline-block;
    margin-left: 8px;
    text-align: left;
    vertical-align: top;
    .title {
      font-size: 17px;
      margin: 10px 0;
    }
    .slogan {
      font-size: 14px;
    }
  }
`;