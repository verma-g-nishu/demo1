import './App.css';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Card from 'react-bootstrap/Card';
import UncontrolledExample from './UncontrolledExample';
import olivia from './Images/olivia.jpeg';
import SwiperSlider from './SwiperSlider.js';
import smith from './Images/smith.png';
import henry from './Images/henry.webp';
import james from './Images/james.jpeg';
import DarkVariantExample from './DarkVariantExample.js';
import harry_robert from './Images/harry_robert.jpeg';
import george from './Images/george.jpeg';
import metthew from './Images/metthew.jpeg';
import adele from './Images/adele.jpeg';
import HotcollectionSlider from './HotcollectionSlider.js'
import NFT3 from './Images/NFT3.png';
import PeopleSaying from './PeopleSaying.js';
import how_work from './Images/how_work.jpeg';
import app_store from './Images/app_store.png'
import google_play_store from './Images/google_play_store.png'
import ItemDetails from './ItemDetails';
function Home() {
  return (
    <>
      <div class='section'>
        <div class='container'>
          <div class='row gy-5'>

            <div class='col-12 col-lg-6 align-self-center text-center text-lg-start'>
              <div><h2 class='heading-discover'>Discover, collect, and sell extraordinary NFTs</h2></div>
              <div><h4 class='heading-desc'>Metovo is the world's best and largest NFT marketplace</h4></div>
              <div class='button-explore'><span><button type="button" class="explore-btn-style ">Explore</button></span>
                <span><button type="button" class="create-btn-style btn-outline-dark shadow-none">Create</button></span>
                <div class='mt-5'><a class='youtube'><span class="glyphicon glyphicon-expand"></span>Learn more about Metovo</a></div>
              </div>

            </div>
            <div class='col-12 col-lg-6'>
              <UncontrolledExample />
            </div>

          </div>
        </div>



      </div>
      <div class='second-section'>

        <div class='container mt-5'>
          <h2 class='sell-NFT'>Create and sell your NFTs</h2>
          <p class='Here'>Here’s four easily steps to create and sell your NFTs in Metovo Market</p>

          <div class='row gy-5 mt-3'>
            <div class='col-sm-6 col-lg-3 mt-4'><div class="card col-width" >
              <span class="glyphicon glyphicon-book icon-size"></span>
              {/* <img class="card-img-top" src={collection} alt="Card image" style={{ width: '100%' }} /> */}
              <div class="card-body">
                <h4 class="card-title set-wallet">Set up your wallet</h4>
                <p class="card-text"> Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                <a href="#" class="learn-btn">Learn More</a>
              </div>
            </div>
            </div>
            <div class='col-sm-6  col-lg-3 mt-4'><div class="card col-width">
              <span class="glyphicon glyphicon-th-large icon-size"></span>
              {/* <img class="card-img-top" src={collection} alt="Card image" style={{ width: '100%' }} /> */}
              <div class="card-body">
                <h4 class="card-title">Create your collection</h4>
                <p class="card-text"> Persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                <a href="#" class="learn-btn">Learn More</a>
              </div>
            </div>
            </div>
            <div class='col-sm-6 col-lg-3 mt-4'><div class="card col-width">
              <span class="glyphicon glyphicon-picture icon-size"></span>
              {/* <img class="card-img-top" src={collection} alt="Card image" style={{ width: '100%' }} /> */}
              <div class="card-body">
                <h4 class="card-title">Add your NFTs</h4>
                <p class="card-text"> Essent lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                <a href="#" class="learn-btn">Learn More</a>
              </div>
            </div>
            </div>
            <div class='col-sm-6 col-lg-3 mt-4'><div class="card col-width">
              <span class="glyphicon glyphicon-tags icon-size"></span>
              {/* <img class="card-img-top" src={collection} alt="Card image" style={{ width: '100%' }} /> */}
              <div class="card-body">
                <h4 class="card-title">List them for sale</h4>
                <p class="card-text">Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                <a href="#" class="learn-btn">Learn More</a>
              </div>
            </div>
            </div>
          </div>
        </div>

      </div>
      <div>

        <div class='container'>
          <h2 class='top-sellers'>
            Top sellers in one 1 day
          </h2>
          <div class='row'>
            <div class='col-lg-3 col-sm-6'>
              <div class='author1'>
                <div class='author-sq1'>
                  <div class='sequence'>1</div>
                  <div class='author-img'><img src={olivia}></img> <span class="glyphicon glyphicon-ok-sign"></span></div>
                  <div>
                    <a class='author-name'> Olivia Samantha</a><div class='price'>$435768</div>
                  </div>
                </div>
                <div class='author-sq1'>
                  <div class='sequence'>2</div>
                  <div class='author-img'><img src={smith}></img> <span class="glyphicon glyphicon-ok-sign check-sign"></span></div>
                  <div >
                    <a class='author-name'> Smith Rhodes</a><div class='price'>$435768</div>
                  </div>
                </div>
                <div class='author-sq1'>
                  <div class='sequence'>3</div>
                  <div class='author-img'><img src={henry}></img> <span class="glyphicon glyphicon-ok-sign check-sign-new"></span></div>
                  <div >
                    <a class='author-name'>Don Carol</a><div class='price'>$995768</div>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-sm-6'>
              <div class='author1'>
                <div class='author-sq1'>
                  <div class='sequence'>4</div>
                  <div class='author-img'><img src={james}></img><span class="glyphicon glyphicon-ok-sign"></span></div>
                  <div >
                    <a class='author-name'>James Charlie</a><div class='price'>$235768</div>
                  </div>
                </div>
                <div class='author-sq1'>
                  <div class='sequence'> 5</div>
                  <div class='author-img'><img src={george}></img><span class="glyphicon glyphicon-ok-sign check-sign"></span></div>
                  <div >
                    <a class='author-name'>George Richard</a><div class='price'>$535768</div>
                  </div>
                </div>
                <div class='author-sq1'>
                  <div class='sequence'>6</div>
                  <div class='author-img'><img src={harry_robert}></img> <span class="glyphicon glyphicon-ok-sign check-sign-new"></span></div>
                  <div >
                    <a class='author-name'>Harry Robert</a><div class='price'>$665768</div>
                  </div>
                </div>
              </div></div>
            <div class='col-lg-3 col-sm-6'><div class='author1'>
              <div class='author-sq1'>
                <div class='sequence'>7</div>
                <div class='author-img'><img src={metthew}></img><span class="glyphicon glyphicon-ok-sign"></span></div>
                <div >
                  <a class='author-name'>Matthew Betty</a><div class='price'>$565768</div>
                </div>
              </div>
              <div class='author-sq1'>
                <div class='sequence'>8</div>
                <div class='author-img'><img src={adele}></img><span class="glyphicon glyphicon-ok-sign check-sign"></span></div>
                <div >
                  <a class='author-name'>Adele</a><div class='price'>$755768</div>
                </div>
              </div>
              <div class='author-sq1'>
                <div class='sequence'>9</div>
                <div class='author-img'><img src={olivia}></img><span class="glyphicon glyphicon-ok-sign check-sign-new"></span></div>
                <div >
                  <a class='author-name'> Olivia</a><div class='price'>$435768</div>
                </div>
              </div>
            </div></div>
            <div class='col-lg-3 col-sm-6'><div class='author1'>
              <div class='author-sq1'>
                <div class='sequence'>10</div>
                <div class='author-img'><img src={metthew}></img><span class="glyphicon glyphicon-ok-sign ok-sign-last"></span></div>
                <div >
                  <a class='author-name'>Matthew Betty</a><div class='price'>$565768</div>
                </div>
              </div>
              <div class='author-sq1'>
                <div class='sequence'>11</div>
                <div class='author-img'><img src={adele}></img><span class="glyphicon glyphicon-ok-sign check-sign-last"></span></div>
                <div >
                  <a class='author-name'>Adele</a><div class='price'>$755768</div>
                </div>
              </div>
              <div class='author-sq1'>
                <div class='sequence'>12</div>
                <div class='author-img'><img src={olivia}></img><span class="glyphicon glyphicon-ok-sign check-sign-new-last"></span></div>
                <div >
                  <a class='author-name'> Olivia </a><div class='price'>$435768</div>
                </div>
              </div>
            </div></div>
          </div>
        </div>

      </div>
      <div class='bid-section pb-5'>
        <div class='bid-heading'>Popular bids</div>
        <p class='Here'>Here’s Top popular bids items in Metovo NFTs market.</p>
        <div class='multiple-slides'><DarkVariantExample /></div>
      </div>
      <div class='bid-section-item'>
        <div class='bid-heading mb-5'>Item Details</div>

        <div class='multiple-slides mt-5'><ItemDetails /></div>
      </div>
      <div class='bid-section'>
        <div class='bid-heading'>Popular bids</div>
        <p class='Here'>Here’s Top popular bids items in Metovo NFTs market.</p>
        <div class='multiple-slides'><SwiperSlider /></div>
      </div>
      <div class='hot-collection'>
        <div class='bid-heading'>Hot collections</div>
        <p class='Here'>Here’s hot collection items in Metovo NFTs market.</p>
        <div class='multiple-slides'><HotcollectionSlider /></div>
      </div>
      <div class='hot-collection'>

        <div class='container'>
          <div class='bid-heading'>Browse by category</div>
          <p class='Here'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div class='row gy-4'>

            <div class='col-sm-6 col-lg-3 border-feature '>
              <div class='feature-box'>
                <div class='feature-icon'><span class="glyphicon glyphicon-picture icon-size"></span>
                </div>
                <h3 class='category'>Art</h3>
              </div>
            </div>
            <div class='col-sm-6 col-lg-3 border-feature'> <div class='feature-box'>
              <div class='feature-icon'><span class="glyphicon glyphicon-th icon-size"></span>
              </div>

              <h3 class='category'>Collections</h3>
            </div></div>
            <div class='col-sm-6 col-lg-3 border-feature '> <div class='feature-box'>
              <div class='feature-icon'><span class="glyphicon glyphicon-search icon-size"></span>
              </div>
              <h3 class='category'>Domain Names</h3>
            </div></div>
            <div class='col-sm-6 col-lg-3 border-feature '> <div class='feature-box'>
              <div class='feature-icon'><span class="glyphicon glyphicon-music icon-size"></span>
              </div>
              <h3 class='category'>Music</h3>
            </div></div>
          </div>
          <div class='row gy-4 mt-4'>

            <div class='col-sm-6 col-lg-3 border-feature '>
              <div class='feature-box'>
                <div class='feature-icon'><span class="glyphicon glyphicon-camera icon-size"></span>
                </div>
                <h3 class='category'>Photography</h3>
              </div>
            </div>
            <div class='col-sm-6 col-lg-3 border-feature'> <div class='feature-box'>
              <div class='feature-icon'><span class="glyphicon glyphicon-user icon-size"></span>
              </div>
              <h3 class='category'>Sports</h3>
            </div></div>
            <div class='col-sm-6 col-lg-3 border-feature '> <div class='feature-box'>
              <div class='feature-icon'><span class="glyphicon glyphicon-credit-card icon-size"></span>
              </div>
              <h3 class='category'>Trading Cards</h3>
            </div></div>
            <div class='col-sm-6 col-lg-3 border-feature '> <div class='feature-box'>
              <div class='feature-icon'> <span class="glyphicon glyphicon-globe icon-size"></span>
              </div>
              <h3 class='category'>Virtual Worlds</h3>
            </div></div>
          </div>
        </div>
        <div class='text-center mt-5 see-more'>
          <a href="https://harnishdesign.net/demo/html/metovo/explore.html" class="btn-link text-4">See more category<span class="glyphicon glyphicon-menu-right chevron"></span></a>
        </div>
        <div class='container mt-5'>
          <div class='row pb-5'>
            <div class='col-sm-12 col-lg-6 pb-4'><img src={how_work} class='work-img pb-4' />
              {/* <a class='video-icon'><span class="glyphicon center-img-style">&#xe158;</span></a> */}
            </div>
            <div class='col-sm-12 col-lg-6 pb-4'>
              <div class='ms-4'>
                <h2 class='does-work'>How does it work ?</h2>
                <div class='quidam'>
                  <p class='mb-2'>Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
                <ul class='list-unstyled text-3 mt-1 mb-5'>
                  <li> <div><span class="glyphicon glyphicon-ok pe-3 check-icon"></span><span class='list-items'>Sign Up Account</span>
                  </div></li>

                  <li> <div><span class="glyphicon glyphicon-ok pe-3 check-icon"></span><span class='list-items'>Create and sell your NFTs from worldwide</span>
                  </div></li>
                  <li> <div><span class="glyphicon glyphicon-ok pe-3 check-icon"></span><span class='list-items'>Your funds will be transferred to your wallet</span>
                  </div></li>
                </ul>

                <a class="btn-styles shadow-none free-account">Open a Free Account</a></div>

            </div>
          </div>
        </div>
        <div class='bid-section people-say'>
          <div class='bid-heading'>What people are saying about Metovo</div>
          <p class='Here'>A great experience people love to talk about us.</p>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-12'><PeopleSaying />
              </div>
            </div>
          </div>

          <div class='container-fluid remove-padding-awesome'>
            <div>

              <div class='col-12 col-lg-12 align-self-center text-center text-lg-start p-0 awesome-background'>

                <div class="bg_image">
                  <div class='padding-top'><h2 class='heading-discover-awesome'>Awesome Customer Support</h2>
                    <h4 class='heading-desc-awesome'>Have you any query? Don't worry. We have great people ready to help you whenever you need it.</h4>
                    <div class='find-out-btn'><button type="button" class="find-btn-style ">Find out more</button></div>
                  </div>
                </div>
              </div>


            </div>
          </div>
          {/* <div class='container'>
  <div class='row'>
  <div class='col-lg-6'>
    <div class='bg_image-form'>
    <div class='row'>
      <div> <div class='col-lg-9 mx-auto'>hi</div>
      <div class='col-lg-9 mx-auto'><h1 class='welcome'>Welcome back!</h1>
      <p class='glad'>We are glad to see you again! Discover, collect, and sell extraordinary NFTs by millions worldwide.</p></div></div>
     
    </div></div>
  </div>
  <div class='col-lg-6'>hi</div>
  </div>
</div> */}
          <div class='container'>
            <div class='bid-heading'>Get the app</div>
            <p class='Here'>Download our app for the fastest, most convenient way to buy and sell NFTs.</p>
            <div class='get-app'><a class="d-inline-flex mx-3" href=""><img alt="" width="168" height="49" src={app_store} /></a>
              <a class="d-inline-flex mx-3" href=""><img alt="" width="168" height="49" src={google_play_store} /></a></div>


          </div>
          <footer>
            <div class='container'>
              <div class='row mb-3'>
                <div class='col-sm-12 col-lg-6 col-md-12'>
                  <div class='link-display footer-links'>
                    <div> <a href="#">About Us</a></div>
                    <div> <a href="#">Support</a></div>
                    <div> <a href="#">Help</a></div>
                    <div> <a href="#">Careers</a></div>
                    <div> <a href="#">Affiliate</a></div>
                    <div> <a href="#">Fees</a></div>
                  </div>


                </div>
                <div class='col-sm-12 col-lg-6 footer-social-icon pe-3 col-md-12'>
                  <div class='bottom-i'><span class="glyphicon glyphicon-envelope pe-3"></span> <span class="glyphicon pe-3">&#xe104;</span> <span class="glyphicon glyphicon-thumbs-up pe-3"></span> </div>
                </div>

              </div>
            </div>

            <div class='container'>
              <div class='row border-above-style mb-5'>
                <div class='col-lg-6 col-sm-12 mt-3'><p class='copyright'>Copyright © 2022 <b class='metovo-color'>Metovo</b>. All Rights Reserved.</p></div>
                <div class='col-lg-6 col-sm-12 mt-3 terms'>
                  <span class='term-spacing'>Security</span>
                  <span class='term-spacing'>Terms</span>
                  <span class='term-spacing'>Privacy</span>
                </div>
              </div></div>
          </footer>


        </div>
      </div>
    </>
  )
}
export default Home;