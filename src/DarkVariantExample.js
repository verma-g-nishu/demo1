
import './App.css'
import card from './Images/card.jpeg'
import Carousel from 'react-bootstrap/Carousel';
import popular from './Images/popular.jpeg'
import bid2 from './Images/bid2.jpeg'
import bid3 from './Images/bid3.avif'
import bid4 from './Images/bid4.avif'
import bid5 from './Images/bid5.jpeg'
import bid6 from './Images/bid6.jpeg'
import bid7 from './Images/bid7.jpeg'
import bid8 from './Images/bid8.jpeg'
import bid9 from './Images/bid9.jpeg'
import olivia from './Images/olivia.jpeg'
import james from './Images/james.jpeg'
function DarkVariantExample() {
  return (
    <div class='container'>
    <Carousel>
      <Carousel.Item>
        <div class='row gy-3'>
            <div class='col-lg-3 col-sm-6 mb-2'>
            <div class="card card-body remove-margin" >
                <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/4.jpg' class="card-img-top bid-1" alt="..." /></div>
            <div class='author-img-bid'><img src={james}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
                <div class="card-body">
                  <h4 class="card-title title-name">Pascal Bernardan</h4>
                  <div class='not-sale'>Not for sale<span class='X1'>x1</span></div>
                  <div class='buy-now-section'>
                 <div class='buy-now'>Bid 3.4 wETH</div>
               <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
               </div>
                </div>
              </div>
                {/* <img src={popular} className="d-block w-100"/> */}
            </div>
            <div class='col-lg-3 col-sm-6 mb-2'>
            <div class="card card-body remove-margin" >
                <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/5.jpg' class="card-img-top bid-1" alt="..." /></div>
            <div class='author-img-bid'><img src={olivia}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
                <div class="card-body">
                  <h4 class="card-title title-name">Pascal Bernardan</h4>
                  <div class='not-sale'>Not for sale<span class='X1'>x1</span></div>
                  <div class='buy-now-section'>
                 <div class='buy-now'>Bid 3.4 wETH</div>
               <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
               </div>
                </div>
              </div>
                {/* <img src={bid2} className="d-block w-100"/> */}
            </div>
            <div class='col-lg-3 col-sm-6 mb-2'>
            <div class="card card-body remove-margin" >
                <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/7.jpg' class="card-img-top bid-1" alt="..." /></div>
            <div class='author-img-bid'><img src={james}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
                <div class="card-body">
                  <h4 class="card-title title-name">Pascal Bernardan</h4>
                  <div class='not-sale'>Not for sale<span class='X1'>x1</span></div>
                  <div class='buy-now-section'>
                 <div class='buy-now'>Bid 3.4 wETH</div>
               <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
               </div>
                </div>
              </div>
                {/* <img src={bid3} className="d-block w-100"/> */}
            </div>
            <div class='col-lg-3 col-sm-6 mb-2'>
            <div class="card card-body remove-margin" >
                <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/7.jpg' class="card-img-top bid-1" alt="..." /></div>
            <div class='author-img-bid'><img src={james}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
                <div class="card-body">
                  <h4 class="card-title title-name">Pascal Bernardan</h4>
                  <div class='not-sale'>Not for sale<span class='X1'>x1</span></div>
                  <div class='buy-now-section'>
                 <div class='buy-now'>Bid 3.4 wETH</div>
               <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
               </div>
                </div>
              </div>
                {/* <img src={bid3} className="d-block w-100"/> */}
            </div>
        </div>
       
       
      </Carousel.Item>
      <Carousel.Item>
      <div class='row'>
            <div class='col-lg-3 col-sm-6 mb-2'>
            <div class="card card-body remove-margin" >
                <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/3.jpg' class="card-img-top bid-1" alt="..." /></div>
            <div class='author-img-bid'><img src={olivia}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
                <div class="card-body">
                  <h4 class="card-title title-name">Pascal Bernardan</h4>
                  <div class='not-sale'>Not for sale<span class='X1'>x1</span></div>
                  <div class='buy-now-section'>
                 <div class='buy-now'>Bid 3.4 wETH</div>
               <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
               </div>
                </div>
              </div>
                {/* <img src={bid7} className="d-block w-100"/> */}
            </div>
            <div class='col-lg-3 col-sm-6 mb-2'>
            <div class="card card-body remove-margin" >
                <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/2.jpg' class="card-img-top bid-1" alt="..." /></div>
            <div class='author-img-bid'><img src={james}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
                <div class="card-body">
                  <h4 class="card-title title-name">Pascal Bernardan</h4>
                  <div class='not-sale'>Not for sale<span class='X1'>x1</span></div>
                  <div class='buy-now-section'>
                 <div class='buy-now'>Bid 3.4 wETH</div>
               <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
               </div>
                </div>
              </div>
                {/* <img src={bid5} className="d-block w-100"/> */}
            </div>
            <div class='col-lg-3 col-sm-6 mb-2'>
            <div class="card card-body remove-margin" >
                <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/1.jpg' class="card-img-top bid-1" alt="..." /></div>
            <div class='author-img-bid'><img src={olivia}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
                <div class="card-body">
                  <h4 class="card-title title-name">Pascal Bernardan</h4>
                  <div class='not-sale'>Not for sale<span class='X1'>x1</span></div>
                  <div class='buy-now-section'>
                 <div class='buy-now'>Bid 3.4 wETH</div>
               <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
               </div>
                </div>
              </div>
                {/* <img src={bid6} className="d-block w-100"/> */}
            </div>
            <div class='col-lg-3 col-sm-6 mb-2'>
            <div class="card card-body remove-margin" >
                <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/2.jpg' class="card-img-top bid-1" alt="..." /></div>
            <div class='author-img-bid'><img src={james}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
                <div class="card-body">
                  <h4 class="card-title title-name">Pascal Bernardan</h4>
                  <div class='not-sale'>Not for sale<span class='X1'>x1</span></div>
                  <div class='buy-now-section'>
                 <div class='buy-now'>Bid 3.4 wETH</div>
               <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
               </div>
                </div>
              </div>
                {/* <img src={bid5} className="d-block w-100"/> */}
            </div>
        </div>
       
      </Carousel.Item>
      <Carousel.Item>
      <div class='row'>
            <div class='col-lg-3 col-sm-6 mb-2'>
            <div class="card card-body remove-margin" >
                <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/8.jpg' class="card-img-top bid-1" alt="..." /></div>
            <div class='author-img-bid'><img src={james}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
                <div class="card-body">
                  <h4 class="card-title title-name">Pascal Bernardan</h4>
                  <div class='not-sale'>Not for sale<span class='X1'>x1</span></div>
                  <div class='buy-now-section'>
                 <div class='buy-now'>Bid 3.4 wETH</div>
               <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
               </div>
                </div>
              </div>
                {/* <img src={bid4} className="d-block w-100"/> */}
            </div>
            <div class='col-lg-3 col-sm-6 mb-2'>
            <div class="card card-body remove-margin" >
                <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/4.jpg' class="card-img-top bid-1" alt="..." /></div>
            <div class='author-img-bid'><img src={olivia}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
                <div class="card-body">
                  <h4 class="card-title title-name">Pascal Bernardan</h4>
                  <div class='not-sale'>Not for sale<span class='X1'>x1</span></div>
                  <div class='buy-now-section'>
                 <div class='buy-now'>Bid 3.4 wETH</div>
               <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
               </div>
                </div>
              </div>
                {/* <img src={bid8} className="d-block w-100"/> */}
            </div>
            <div class='col-lg-3 col-sm-6 mb-2'>
            <div class="card card-body remove-margin" >
                <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/1.jpg' class="card-img-top bid-1" alt="..." /></div>
            <div class='author-img-bid'><img src={james}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
                <div class="card-body">
                  <h4 class="card-title title-name">Pascal Bernardan</h4>
                  <div class='not-sale'>Not for sale<span class='X1'>x1</span></div>
                  <div class='buy-now-section'>
                 <div class='buy-now'>Bid 3.4 wETH</div>
               <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
               </div>
                </div>
              </div>
                {/* <img src={bid9} className="d-block w-100"/> */}
            </div>
            <div class='col-lg-3 col-sm-6 mb-2'>
            <div class="card card-body remove-margin" >
                <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/4.jpg' class="card-img-top bid-1" alt="..." /></div>
            <div class='author-img-bid'><img src={olivia}></img><span class="glyphicon glyphicon-ok-sign bid-corner-icon"></span></div>
                <div class="card-body">
                  <h4 class="card-title title-name">Pascal Bernardan</h4>
                  <div class='not-sale'>Not for sale<span class='X1'>x1</span></div>
                  <div class='buy-now-section'>
                 <div class='buy-now'>Bid 3.4 wETH</div>
               <div ><button class='bid-button'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button></div>
               </div>
                </div>
              </div>
                {/* <img src={bid8} className="d-block w-100"/> */}
            </div>
        </div>
     
      </Carousel.Item>
    </Carousel></div>
  );
}

export default DarkVariantExample;