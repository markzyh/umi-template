import React from 'react';

import { Carousel, WingBlank } from 'antd-mobile';

class App extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  };
  render() {
    // console.log(this.props);
    const { bannerList } = this.props;
    return (
      <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {bannerList
            ? bannerList.map(val => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={val.images}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))
            : ''}
        </Carousel>
      </WingBlank>
    );
  }
}

export default App;
