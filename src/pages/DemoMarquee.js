import Marquee from 'react-marquee-line'
import React, { Component }  from 'react';

const DemoMarquee = () => {
  
// create an react element that has onClick handler, sorry for the long name
// const someReactElemYouCanClick =  <span>
// <a href="https://codesandbox.io">Click me </a> for more details
// </span>

// set a list your want it to run
const list = [
'Thêm vào giỏ 499.000₫ để miễn phí vận chuyển',
// someReactElemYouCanClick,
'ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 30 ngày',

]
  return (
<Marquee 
list={list} direction='vertical'lines={1}/>

  )
}
export default DemoMarquee