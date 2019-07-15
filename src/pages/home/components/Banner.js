import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import $ from 'jquery'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import { BannerWrapper } from '../style'

class Banner extends PureComponent {
  showButton(pre, next) {

    // pre.style.opacity = 1;
    // next.style.opacity = 1;

    // pre.setAttribute('style','opacity:1; transition: all .3s');
    // next.setAttribute('style','opacity:1; transition: all .3s');

    pre.classList.add('show');
    next.classList.add('show');

    // $(pre).stop().fadeIn(300);
    // $(next).stop().fadeIn(300);
  }
  hideButton(pre, next) {

    pre.classList.remove('show');
    next.classList.remove('show');

    // $(pre).stop().fadeOut(300);
    // $(next).stop().fadeOut(300);
  }


  render() {
    return (
      <BannerWrapper 
        onMouseOver={() => {this.showButton(this.prevEl, this.nextEl)}} 
        onMouseOut={() => {this.hideButton(this.prevEl, this.nextEl)}}>
        <div className="swiper-container" ref={self => this.swiperID = self}>
            <ul className="swiper-wrapper">
              {
                this.props.list.map((item, index) => {
                  return (
                    <li className="swiper-slide" key={item.get('id')}>
                      <img className="banner-img" src={item.get('imgUrl')} alt=""/>
                    </li>
                  )
                })
              }  
            </ul>
            <div className="swiper-pagination swiper-pagination-clickable" ref={self => this.paginateID = self}></div>
            <div className="swiper-button-prev swiper-button-white" ref={self => this.prevEl = self}></div> 
            <div className="swiper-button-next swiper-button-white" ref={self => this.nextEl = self}></div>           
        </div>
      </BannerWrapper>
    )
  };

  componentDidMount() {
    setTimeout(() => {
      new Swiper(this.swiperID, {
        observer: true,
        observeParents: true,
        loop: true,
        speed: 600,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        pagination: {
          el: this.paginateID,
          clickable: true,
          clickableClass : 'swiper-pagination-clickable',
        },
        navigation: {
          prevEl: this.prevEl,
          nextEl: this.nextEl
        },
      });
    }, 0);
  };
}

const mapState = (state) => ({
  list: state.getIn(['home', 'bannerList'])
});

export default connect(mapState, null)(Banner);