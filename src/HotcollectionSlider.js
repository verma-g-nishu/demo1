import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import james from './Images/james.jpeg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import freesoul from './Images/freesoul.jpeg'

import './App.css'
// import required modules
import { Pagination } from "swiper";

export default function HotcollectionSlider() {
  return (
    <> <div class='container mb-4'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div class="card card-radius" >
            <div class='background-half'>

              <div class='image-top'>
                <div class='align-image'><img src={freesoul} class="card-img-top card-position" alt="..." />
                  {/* <span class="glyphicon glyphicon-ok-sign"></span> */}
                </div>
              </div>
            </div>
            {/* <img src={freesoul} class="card-img-top" alt="..." /> */}
            <div class="card-body card-text-center">
              <h5 class="card-title">FreeSoul</h5>
              <p class="card-text">$44566</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card card-radius" >
            <div class='background-half'>

              <div class='image-top'>
                <div class='align-image'><img src={freesoul} class="card-img-top card-position" alt="..." />
                  {/* <span class="glyphicon glyphicon-ok-sign"></span> */}
                </div>
              </div>
            </div>
            {/* <img src={freesoul} class="card-img-top" alt="..." /> */}
            <div class="card-body card-text-center">
              <h5 class="card-title">FreeSoul</h5>
              <p class="card-text">$44566</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card card-radius" >
            <div class='background-half'>

              <div class='image-top'>
                <div class='align-image'><img src={freesoul} class="card-img-top card-position" alt="..." />
                  {/* <span class="glyphicon glyphicon-ok-sign"></span> */}
                </div>
              </div>
            </div>
            {/* <img src={freesoul} class="card-img-top" alt="..." /> */}
            <div class="card-body card-text-center">
              <h5 class="card-title">FreeSoul</h5>
              <p class="card-text">$44566</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card card-radius" >
            <div class='background-half'>

              <div class='image-top'>
                <div class='align-image'><img src={freesoul} class="card-img-top card-position" alt="..." />
                  {/* <span class="glyphicon glyphicon-ok-sign"></span> */}
                </div>
              </div>
            </div>
            {/* <img src={freesoul} class="card-img-top" alt="..." /> */}
            <div class="card-body card-text-center">
              <h5 class="card-title">FreeSoul</h5>
              <p class="card-text">$44566</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card card-radius" >
            <div class='background-half'>

              <div class='image-top'>
                <div class='align-image'><img src={freesoul} class="card-img-top card-position" alt="..." />
                  {/* <span class="glyphicon glyphicon-ok-sign"></span> */}
                </div>
              </div>
            </div>
            {/* <img src={freesoul} class="card-img-top" alt="..." /> */}
            <div class="card-body card-text-center">
              <h5 class="card-title">FreeSoul</h5>
              <p class="card-text">$44566</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card card-radius" >
            <div class='background-half'>

              <div class='image-top'>
                <div class='align-image'><img src={freesoul} class="card-img-top card-position" alt="..." />
                  {/* <span class="glyphicon glyphicon-ok-sign"></span> */}
                </div>
              </div>
            </div>
            {/* <img src={freesoul} class="card-img-top" alt="..." /> */}
            <div class="card-body card-text-center">
              <h5 class="card-title">FreeSoul</h5>
              <p class="card-text">$44566</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card card-radius" >
            <div class='background-half'>

              <div class='image-top'>
                <div class='align-image'><img src={freesoul} class="card-img-top card-position" alt="..." />
                  {/* <span class="glyphicon glyphicon-ok-sign"></span> */}
                </div>
              </div>
            </div>
            {/* <img src={freesoul} class="card-img-top" alt="..." /> */}
            <div class="card-body card-text-center">
              <h5 class="card-title">FreeSoul</h5>
              <p class="card-text">$44566</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card card-radius" >
            <div class='background-half'>

              <div class='image-top'>
                <div class='align-image'><img src={freesoul} class="card-img-top card-position" alt="..." />
                  {/* <span class="glyphicon glyphicon-ok-sign"></span> */}
                </div>
              </div>
            </div>
            {/* <img src={freesoul} class="card-img-top" alt="..." /> */}
            <div class="card-body card-text-center">
              <h5 class="card-title">FreeSoul</h5>
              <p class="card-text">$44566</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card card-radius" >
            <div class='background-half'>

              <div class='image-top'>
                <div class='align-image'><img src={freesoul} class="card-img-top card-position" alt="..." />
                  {/* <span class="glyphicon glyphicon-ok-sign"></span> */}
                </div>
              </div>
            </div>
            {/* <img src={freesoul} class="card-img-top" alt="..." /> */}
            <div class="card-body card-text-center">
              <h5 class="card-title">FreeSoul</h5>
              <p class="card-text">$44566</p>

            </div>
          </div>
        </SwiperSlide>
      </Swiper></div>
    </>
  );
}

