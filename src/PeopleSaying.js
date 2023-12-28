import Carousel from 'react-bootstrap/Carousel';
import NFT3 from './Images/NFT3.png'
import NFT2 from './Images/NFT2.jpeg'
import NFT1 from './Images/NFT1.png'
function PeopleSaying() {
    return (<>
        <Carousel>
            <Carousel.Item>
                <div class='row'>
                    <div class='col-lg-6 mb-4 border-feature'>

                    <div class='feature-box-cmt'>
                <div class='feature-icon-cmt'> <span class="glyphicon glyphicon-comment icon-size-cmt"></span>
                </div>
                <h3 class='quote-padding'>“I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.”</h3>
                <strong class="d-block fw-500">Dennis Jacques</strong>
                <span class="text-muted">User from UK</span>
              </div>
                    </div>

                    <div class='col-lg-6 mb-4'>

                    <div class='feature-box-cmt'>
                <div class='feature-icon-cmt'> <span class="glyphicon glyphicon-comment icon-size-cmt"></span>
                </div>
                <h3 class='quote-padding'>“I have used them twice now. Good rates, very efficient service and it denies high street banks an undeserved windfall. Excellent.”</h3>
                <strong class="d-block fw-500">Marry Smith</strong>
                <span class="text-muted">User from Canada</span>
              </div>
                    </div>


                </div>


            </Carousel.Item>
            <Carousel.Item>
                <div class='col-lg-6 mb-4'>

                <div class='feature-box-cmt'>
                <div class='feature-icon-cmt'> <span class="glyphicon glyphicon-comment icon-size-cmt"></span>
                </div>
                <h3 class='quote-padding'>“It's a real good idea to manage your money by Metovo. The rates are fair and you can carry out the transactions without worrying!”</h3>
                <strong class="d-block fw-500">Johnt Tailor</strong>
                <span class="text-muted">User from America</span>
              </div>
                </div>

                <div class='col-lg-6 mb-4'>

                <div class='feature-box-cmt'>
                <div class='feature-icon-cmt'> <span class="glyphicon glyphicon-comment icon-size-cmt"></span>
                </div>
                <h3 class='quote-padding'>“Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. I'm only using it for sending money to friends at the moment.”</h3>
                <strong class="d-block fw-500">Chris Tom </strong>
                <span class="text-muted">User from London</span>
              </div>
                </div>

            </Carousel.Item>
            <Carousel.Item>
                <div class='col-lg-6 mb-4'>

                <div class='feature-box-cmt'>
                <div class='feature-icon-cmt'> <span class="glyphicon glyphicon-comment icon-size-cmt"></span>
                </div>
                <h3 class='quote-padding'>“Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.”</h3>
                <strong class="d-block fw-500">Jay Sah</strong>
                <span class="text-muted">User from Goa</span>
              </div>
                </div>

                <div class='col-lg-6 mb-4'>

                <div class='feature-box-cmt'>
                <div class='feature-icon-cmt'> <span class="glyphicon glyphicon-comment icon-size-cmt"></span>
                </div>
                <h3 class='quote-padding'>“I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.”</h3>
                <strong class="d-block fw-500">Patrick Cary</strong>
                <span class="text-muted">User from Russia</span>
              </div>
                </div>


            </Carousel.Item>
        </Carousel>
      </>
    );
}

export default PeopleSaying;