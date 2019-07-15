import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import { RecommendWrapper, RecommendItem, RecommendDownload } from '../style'
import codePic from '../../../statics/code.png'

class Recommend extends PureComponent {
  showCode(code) {
    $(code).stop().fadeIn(200);
  };

  hideCode(code) {
    $(code).stop().fadeOut(200);
  };

  render() {
    return (
      <RecommendWrapper>
        {
          this.props.list.map((item) => {
            return <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
          })
        }
        <RecommendDownload 
          onMouseOver={() => this.showCode(this.code)} 
          onMouseOut={() => this.hideCode(this.code)}>
          <div className="image"></div>
          <div className="info">
            <div className="title">下载简书手机App ></div>
            <div className="description">随时随地发现和创作内容</div>
          </div>
          <div className="code" ref={code => this.code = code}>
            <img className="codeImg" src={codePic} alt=""/>
            <div className="codeArrow"></div>
          </div>
        </RecommendDownload>
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
});

export default connect(mapState, null)(Recommend);