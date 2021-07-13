import React from 'react';
import FooterCanifa from '../../components/FooterCanifa';
import HeaderCanifa from '../../components/HeaderCanifa';
import ListnewProductHomepage from '../../components/ListnewProductHomepage';
import Carousel_layout from '../../components/Carousel/Carousel_layout';
import axios from "axios";
import Cookies from "universal-cookie";
const HomeCanifa = () => {
  const cookies = new Cookies();
  return (
    <section className="max-w-screen-2xl mx-auto">
      <HeaderCanifa/>
      <div className="px-20">
        <Carousel_layout/>
        <ListnewProductHomepage/>
      </div>
      <FooterCanifa/>
    </section>
  );
}

export default HomeCanifa;
