import React from 'react';
import FooterCanifa from '../../components/FooterCanifa';
import HeaderCanifa from '../../components/HeaderCanifa';
import ListnewProductHomepage from '../../components/ListnewProductHomepage';
import Carousel_layout from '../../components/Carousel/Carousel_layout';
const HomeCanifa = () => {
  return (
    <section>
      <HeaderCanifa/>
      <div className="mx-20">
        <Carousel_layout/>
        <ListnewProductHomepage/>
        <FooterCanifa/>
      </div>
    </section>
  );
}

export default HomeCanifa;
