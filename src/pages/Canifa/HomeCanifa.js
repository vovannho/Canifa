import React from 'react';
import FooterCanifa from '../../components/FooterCanifa';
import HeaderCanifa from '../../components/HeaderCanifa';
import ListnewProductHomepage from '../../components/ListnewProductHomepage';
import SlideHomeCanifa from '../../components/SlideHomeCanifa';
const HomeCanifa = () => {
  return (
    <div>
      <HeaderCanifa/>
      <div className="mx-20 px-2">
        <SlideHomeCanifa/>
        <ListnewProductHomepage/>
        <FooterCanifa/>
      </div>
    </div>
  );
}

export default HomeCanifa;
