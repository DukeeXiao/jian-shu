import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { WriterWrapper, WriterTitle, WriterSwitch, WriterWords, WriterItem, WriterAll } from '../style'

class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        <WriterTitle>
          <WriterWords>推荐作者</WriterWords>
          <WriterSwitch><i className='iconfont spin'>&#xe851;</i>换一批</WriterSwitch>
        </WriterTitle>
        {
          this.props.list.map((item) => {
            return (
              <WriterItem key={item.get('id')}>
                <img className="pic" src={item.get('imgUrl')} alt=""/>
                <div className="content">
                  <span className="author">{item.get('author')}</span>
                  <span className="focus">+ 关注</span>
                  <p className="detail">{item.get('detail')}</p>
                </div>
              </WriterItem>
            )
          })
        }
        <WriterAll>查看全部 ></WriterAll>
      </WriterWrapper>
    )
  };
}


const mapState = (state) => ({
  list: state.getIn(['home', 'writerList'])
});

export default connect(mapState, null)(Writer);