import './App.css';
import olivia from './Images/olivia.jpeg'
import metthew from './Images/metthew.jpeg'
function ItemDetails() {
    return (
        <>
            <div class='container'>
                <div class='row '>
                    <div class='col-lg-6 mt-4 p-4'><img src='https://harnishdesign.net/demo/html/metovo/images/items/1-big.jpg' class='image-detail'></img></div>
                    <div class='col-lg-6 mt-4 p-4'>
                        <h1 class='philip'>Philip Potocnik</h1>
                        <button class='heart-14'><span class="glyphicon glyphicon-heart"></span><span class='bid-count'>14</span></button>
                        <div class='mt-4 mb-4'>
                            <span class='bid315'>Auction has ended:</span>
                            <div class='d-inline-block'><button class='time-show'><b>212d:23h:41m:11s</b></button></div>
                        </div>
                        <p class='bid315'>Highest bid <b class='change-color'>3.15 WETH</b></p>
                        <p class='official mt-4'>The official lisque persius interesset his et, in quot quidam simply dummy text of the printing persequeris essent possim iriure. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div class='row mt-5'>
                            <div class='col-lg-6 col-sm-6'><h4 class='created-font mb-4'>Created by: </h4>
                                <div class='author1'>
                                    <div class='author-sq1'>

                                        <div class='author-img'><img src={olivia}></img> <span class="glyphicon glyphicon-ok-sign created-by"></span></div>
                                        <div>
                                            <a class='author-name'> Olivia Samantha</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class='col-lg-6 col-sm-6'><h4 class='created-font mb-4'>Collection:</h4>
                                <div class='author1'>
                                    <div class='author-sq1'>

                                        <div class='author-img'><img src={metthew}></img> <span class="glyphicon glyphicon-ok-sign created-by"></span></div>
                                        <div>
                                            <a class='author-name'> Metthew </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <ul class='list-unstyled detail-list'>
                            <li >Details</li>

                            <li >Bids</li>
                            <li >History</li>
                        </ul>
                        <div class='border-above-style'></div>
                        <div class='row mt-4 '>
                            <div class='col-lg-6 col-sm-6'><h4 class='created-font mb-4'>Owner: </h4>
                                <div class='author1'>
                                    <div class='author-sq1'>

                                        <div class='author-img'><img src='https://harnishdesign.net/demo/html/metovo/images/authors/author-5.jpg'></img> </div>
                                        <div>
                                            <a class='author-name'>James Charlie</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class='col-lg-6 col-sm-6'><h4 class='created-font mb-4'>Blockchain:</h4>
                                <div class='author1'>
                                    <div class='author-sq1'>

                                        <div class='author-img'><img src='https://harnishdesign.net/demo/html/metovo/images/chain/ethereum.png'></img> </div>
                                        <div>
                                            <a class='author-name'> Ethereum</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div ><h5 class='created-font mb-4'>Properties:</h5></div>
                        <div class='row gy-5 pb-4'>
                            <div class='col-lg-3 col-sm-3 col-6'>
                                <div class='properties  py-3'><a class='type-styles'>Type</a>
                                    <h4 class='Legendary'>Legendary</h4>
                                    <small class='rarity'>12.6% rarity</small>
                                </div>
                            </div>
                            <div class='col-lg-3 col-sm-3 col-6'>
                                <div class='properties  py-3'><a class='type-styles'>Type</a>
                                    <h4 class='Legendary'>Legendary</h4>
                                    <small class='rarity'>12.6% rarity</small>
                                </div>
                            </div>
                            <div class='col-lg-3 col-sm-3 col-6'>
                                <div class='properties  py-3'><a class='type-styles'>Type</a>
                                    <h4 class='Legendary'>Legendary</h4>
                                    <small class='rarity'>12.6% rarity</small>
                                </div>
                            </div>
                            <div class='col-lg-3 col-sm-3 col-6'>
                                <div class='properties  py-3'><a class='type-styles'>Type</a>
                                    <h4 class='Legendary'>Legendary</h4>
                                    <small class='rarity'>12.6% rarity</small>
                                </div>
                            </div>
                        </div>
                        <div class='border-above-style'></div>
                        <div class='pt-4 pb-4'>
                            <h5 class='created-font'>Price:</h5>
                            </div>
                        <div> <div class='created-by-image'>
                           <div> <img src='https://harnishdesign.net/demo/html/metovo/images/chain/ethereum.png' class='ethereum'></img></div>

                            <div><b class='counting'>13.2595</b></div><div class='dollar'>($37,334.51)</div>
                        </div>
                        </div>
                        <div class='row mt-5 pb-5'>
                            <div class='col-lg-6 col-sm-6 col-12'><button class='now'>Buy Now</button></div>
                            <div class='col-lg-6 col-sm-6 col-12'><button class='place'>Place a Bid</button></div>
                        </div>
                    </div>

                </div>
            </div></>
    )
};
export default ItemDetails;