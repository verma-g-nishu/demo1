import Carousel from 'react-bootstrap/Carousel';
// import AI2 from './Images/AI2.jpeg'
import AI_art from './Images/AI_art.webp';
import AI8 from './Images/AI8.jpeg'
import metthew from './Images/metthew.jpeg'
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <div class='row'>
          <div class='col-lg-12 mb-2'>
            <div class="card card-body remove-margin" >
              <div class='image-section'> <img src={AI_art} class="card-img-top bid-1" alt="..." /></div>

              <div class="card-body">
                <div class='author-sq1-top'>
                  <div class='spacing-styles'>
                    <div class='author-img'>
                      <img src={metthew}></img>
                      <span class="glyphicon glyphicon-ok-sign slider-icon"></span>
                    </div>
                    <div >
                      <a class='author-name'>James Charlie</a><div class='price'>$235768</div>
                    </div>
                  </div>

                  <div class='feature-btn'>Featured</div>
                </div>


              </div>
            </div>

          </div>
        </div>



      </Carousel.Item>
      <Carousel.Item>
        <div class="card card-body remove-margin" >
          <div class='image-section'> <img src={AI_art} class="card-img-top bid-1" alt="..." /></div>

          <div class="card-body">
            <div class='author-sq1-top'>
              <div class='spacing-styles'>
                <div class='author-img'>
                  <img src={metthew}></img>
                  <span class="glyphicon glyphicon-ok-sign slider-icon"></span>
                </div>
                <div >
                  <a class='author-name'>James Charlie</a><div class='price'>$235768</div>
                </div>
              </div>

              <div class='feature-btn'>Featured</div>
            </div>


          </div>
        </div>
        {/* <img
          className="d-block w-100"
          src={NFT2}
          alt="Second slide"
        /> */}

      </Carousel.Item>

    </Carousel>
  );
}

export default UncontrolledExample;