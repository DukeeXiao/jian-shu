import React, { PureComponent } from 'react';
import { DownloadWrapper, TopWrapper, TopContent, PicWrapper, ClubWrapper, 
         EditorWrapper, ExchangeWrapper, BottomWrapper } from './style'

class Download extends PureComponent {
  render() {
    return (
      <DownloadWrapper>
        <TopWrapper>
          <TopContent>
            <div className="top-logo">
              <div className="logo"></div>
              <div className="info">
                <div className="title">创作你的创作</div>
                <div className="slogan">一个优质创作社区</div>
              </div>
            </div>
            <div className="back-image"></div>
            <div className="top-image">
              <div className="image"></div>
              <div className="top-code">
                <div className="code"></div>
                <div className="title">扫码下载简书App</div>
                <div className="description">随时随地发现和创作内容</div>
              </div>
            </div>
          </TopContent>
        </TopWrapper>
        <PicWrapper>
          <h3 className="title">轻松创作精美图文</h3>
          <h6 className="description">简单优雅的设计，可以一次上传多张图片、实时保存、多端同步，使创作分享更方便快捷</h6>
        </PicWrapper>
        <ClubWrapper>
          <div className="image"></div>
          <div className="info">
            <h3 className="title">多元化的创作社区</h3>
            <h6 className="description">一篇短文、一首诗、一幅画，在这里，你的创作将得到全世界的赞赏</h6>
          </div>
        </ClubWrapper>
        <EditorWrapper>
          <div className="image"></div>
          <div className="info">
            <h3 className="title">百万创作者在简书相遇</h3>
            <h6 className="description">在简书，仍有数百万创作者在坚持产出优质创作，有数千万读者在用心交流创作；众多精彩创作，只在简书看得到</h6>
          </div>
        </EditorWrapper>
        <ExchangeWrapper>
          <div className="image"></div>
          <div className="info">
            <h3 className="title">自由地交流和沟通</h3>
            <h6 className="description">你可以发表评论、沟通想法。觉得不够？还能给创作者发简信，和无数传遍中文互联网的创作者直接交流</h6>
          </div>
        </ExchangeWrapper>
        <BottomWrapper>
          <div className="back-image"></div>
          <div className="code-image"></div>
          <div className="description">扫码下载简书App</div>
          <div className="bottom-logo">
            <div className="logo"></div>
            <div className="info">
              <div className="title">扫码下载简书App</div>
              <div className="slogan">一个优质创作社区</div>
            </div>
          </div>
        </BottomWrapper>
      </DownloadWrapper>
    )
  }
};

export default Download;