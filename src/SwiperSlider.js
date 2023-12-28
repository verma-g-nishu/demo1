import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import james from './Images/james.jpeg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import './App.css'
// import required modules
import { Pagination } from "swiper";

export default function SwiperSlider() {
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
          <div class="card card-body remove-margin card-1-space" >
            <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/4.jpg' class="card-img-top bid-1" alt="..." /></div>
            <div class='author-img-bid'><img src={james}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
            <div class="card-body">
              <h4 class="card-title title-name-slide">Pascal Bernardan</h4>
              <div class='not-sale-slide'>Not for sale<span class='X1'>x1</span></div>
              <div class='buy-now-section'>
                <div class='buy-now'>Bid 3.4 wETH</div>
                <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide> <div class="card card-body remove-margin card-1-space" >
          <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/4.jpg' class="card-img-top bid-1" alt="..." /></div>
          <div class='author-img-bid'><img src={james}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
          <div class="card-body">
            <h4 class="card-title title-name-slide">Pascal Bernardan</h4>
            <div class='not-sale-slide'>Not for sale<span class='X1'>x1</span></div>
            <div class='buy-now-section'>
              <div class='buy-now'>Bid 3.4 wETH</div>
              <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
            </div>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div class="card card-body remove-margin card-1-space" >
          <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/4.jpg' class="card-img-top bid-1" alt="..." /></div>
          <div class='author-img-bid'><img src={james}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
          <div class="card-body">
            <h4 class="card-title title-name-slide">Pascal Bernardan</h4>
            <div class='not-sale-slide'>Not for sale<span class='X1'>x1</span></div>
            <div class='buy-now-section'>
              <div class='buy-now'>Bid 3.4 wETH</div>
              <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
            </div>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div class="card card-body remove-margin card-1-space" >
          <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/4.jpg' class="card-img-top bid-1" alt="..." /></div>
          <div class='author-img-bid'><img src={james}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
          <div class="card-body">
            <h4 class="card-title title-name-slide">Pascal Bernardan</h4>
            <div class='not-sale-slide'>Not for sale<span class='X1'>x1</span></div>
            <div class='buy-now-section'>
              <div class='buy-now'>Bid 3.4 wETH</div>
              <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
            </div>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div class="card card-body remove-margin card-1-space" >
          <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/4.jpg' class="card-img-top bid-1" alt="..." /></div>
          <div class='author-img-bid'><img src={james}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
          <div class="card-body">
            <h4 class="card-title title-name-slide">Pascal Bernardan</h4>
            <div class='not-sale-slide'>Not for sale<span class='X1'>x1</span></div>
            <div class='buy-now-section'>
              <div class='buy-now'>Bid 3.4 wETH</div>
              <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
            </div>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div class="card card-body remove-margin card-1-space" >
          <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/4.jpg' class="card-img-top bid-1" alt="..." /></div>
          <div class='author-img-bid'><img src={james}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
          <div class="card-body">
            <h4 class="card-title title-name-slide">Pascal Bernardan</h4>
            <div class='not-sale-slide'>Not for sale<span class='X1'>x1</span></div>
            <div class='buy-now-section'>
              <div class='buy-now'>Bid 3.4 wETH</div>
              <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
            </div>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div class="card card-body remove-margin card-1-space" >
          <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/4.jpg' class="card-img-top bid-1" alt="..." /></div>
          <div class='author-img-bid'><img src={james}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
          <div class="card-body">
            <h4 class="card-title title-name-slide">Pascal Bernardan</h4>
            <div class='not-sale-slide'>Not for sale<span class='X1'>x1</span></div>
            <div class='buy-now-section'>
              <div class='buy-now'>Bid 3.4 wETH</div>
              <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
            </div>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div class="card card-body remove-margin card-1-space" >
          <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/4.jpg' class="card-img-top bid-1" alt="..." /></div>
          <div class='author-img-bid'><img src={james}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
          <div class="card-body">
            <h4 class="card-title title-name-slide">Pascal Bernardan</h4>
            <div class='not-sale-slide'>Not for sale<span class='X1'>x1</span></div>
            <div class='buy-now-section'>
              <div class='buy-now'>Bid 3.4 wETH</div>
              <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
            </div>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div class="card card-body remove-margin card-1-space" >
          <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/4.jpg' class="card-img-top bid-1" alt="..." /></div>
          <div class='author-img-bid'><img src={james}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
          <div class="card-body">
            <h4 class="card-title title-name-slide">Pascal Bernardan</h4>
            <div class='not-sale-slide'>Not for sale<span class='X1'>x1</span></div>
            <div class='buy-now-section'>
              <div class='buy-now'>Bid 3.4 wETH</div>
              <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
            </div>
          </div>
        </div></SwiperSlide>
      </Swiper></div>
    </>
  );
}

