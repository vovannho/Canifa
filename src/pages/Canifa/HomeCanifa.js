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
        <div className="h-16 bg-yellow-300 flex items-center">
                {/* <img
                    className=" cursor-pointer w-12/12 h-14 mx-auto " 
                    src="/assets/images/Top-banner.png" alt="noload">
                </img> */}
                <div className="max-w-screen-2xl mx-20 flex items-center">
                <picture>
			    	<source media="(max-width: 991px)" srcSet="https://media.canifa.com/wysiwyg/09-17Jul-Fixtop-Mobile.png"/>
			       <img src="https://media.canifa.com/wysiwyg/Mask_Group.png" alt="" />
			    </picture>
                </div>
            </div>
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
