<template>
<div>
        <TopNav></TopNav>
        <LeftNav></LeftNav>

        <div id="wrapper">
            <div id="mapView" class="mob-min"><div class="mapPlaceholder"><span class="fa fa-spin fa-spinner"></span> Loading map...</div></div>
            <div id="content" class="mob-max">
                <div class="singleTop">
                    <div id="carouselFull" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselFull" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselFull" data-slide-to="1"></li>
                            <li data-target="#carouselFull" data-slide-to="2"></li>
                            <li data-target="#carouselFull" data-slide-to="3"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="item active">
                                <img src="/static/images/prop/4-1.png" alt="First slide">
                                <div class="container">
                                    <div class="carousel-caption">
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <img src="/static/images/prop/4-2.png" alt="Second slide">
                                <div class="container">
                                    <div class="carousel-caption">
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <img src="/static/images/prop/4-3.png" alt="Third slide">
                                <div class="container">
                                    <div class="carousel-caption">
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <img src="/static/images/prop/4-4.png" alt="Fourth slide">
                                <div class="container">
                                    <div class="carousel-caption">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="left carousel-control" href="#carouselFull" role="button" data-slide="prev"><span class="fa fa-chevron-left"></span></a>
                        <a class="right carousel-control" href="#carouselFull" role="button" data-slide="next"><span class="fa fa-chevron-right"></span></a>
                    </div>
                    <div class="summary">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div class="summaryItem">
                                    <h1 class="pageTitle">Modern Residence in New York</h1>
                                    <div class="address"><span class="icon-pointer"></span> 39 Remsen St, Brooklyn, NY 11201, USA</div>
                                    <ul class="rating">
                                        <li><a href="#"><span class="fa fa-star"></span></a></li>
                                        <li><a href="#"><span class="fa fa-star"></span></a></li>
                                        <li><a href="#"><span class="fa fa-star"></span></a></li>
                                        <li><a href="#"><span class="fa fa-star"></span></a></li>
                                        <li><a href="#"><span class="fa fa-star-o"></span></a></li>
                                        <li>(146)</li>
                                    </ul>
                                    <div class="favLink"><a href="#"><span class="icon-heart"></span></a>54</div>
                                    <ul class="stats">
                                        <li><span class="icon-eye"></span> 200</li>
                                        <li><span class="icon-bubble"></span> 13</li>
                                    </ul>
                                    <div class="clearfix"></div>
                                    <ul class="features">
                                        <li><span class="fa fa-moon-o"></span><div>2 Bedrooms</div></li>
                                        <li><span class="icon-drop"></span><div>2 Bathrooms</div></li>
                                        <li><span class="icon-frame"></span><div>2750 Sq Ft</div></li>
                                    </ul>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="agentAvatar summaryItem">
                                     <div class="clearfix"></div>
                                    <img class="avatar agentAvatarImg" src="/static/images/avatar-2.png" alt="avatar">
                                    <div class="agentName">Jane Smith</div>
                                    <a data-toggle="modal" href="#contactAgent" class="btn btn-lg btn-round btn-green contactBtn">Contact Agent</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="description">
                    <h3>Description</h3>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                </div>
                <div class="share">
                    <h3>Share on Social Networks</h3>
                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 shareItem">
                            <a href="#" class="btn btn-sm btn-round btn-o btn-facebook"><span class="fa fa-facebook"></span> Facebook</a>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 shareItem">
                            <a href="#" class="btn btn-sm btn-round btn-o btn-twitter"><span class="fa fa-twitter"></span> Twitter</a>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 shareItem">
                            <a href="#" class="btn btn-sm btn-round btn-o btn-google"><span class="fa fa-google-plus"></span> Google+</a>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 shareItem">
                            <a href="#" class="btn btn-sm btn-round btn-o btn-pinterest"><span class="fa fa-pinterest"></span> Pinterest</a>
                        </div>
                    </div>
                </div>
                <div class="amenities">
                    <h3>Amenities</h3>
                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 amItem"><span class="fa fa-car"></span> Garage</div>
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 amItem"><span class="fa fa-tint"></span> Outdoor Pool</div>
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 amItem inactive"><span class="fa fa-leaf"></span> Garden</div>
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 amItem inactive"><span class="fa fa-shield"></span> Security System</div>
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 amItem"><span class="fa fa-wifi"></span> Internet</div>
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 amItem inactive"><span class="fa fa-phone"></span> Telephone</div>
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 amItem"><span class="fa fa-asterisk"></span> Air Conditioning</div>
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 amItem inactive"><span class="fa fa-sun-o"></span> Heating</div>
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 amItem"><span class="fa fa-fire"></span> Fireplace</div>
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 amItem"><span class="fa fa-arrows-v"></span> Balcony</div>
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 amItem"><span class="fa fa-desktop"></span> TV Cable</div>
                    </div>
                </div>
                <div class="similar">
                    <h3>Similar Properties</h3>
                    <!-- carousel for medium & large devices -->
                    <div id="carouselSimilar-1" class="carousel slide visible-lg carousel-col">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselSimilar-1" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselSimilar-1" data-slide-to="1"></li>
                        </ol>
                        <div class="carousel-inner"> 
                            <div class="item active">
                                <div class="row">
                                    <div class="col-xs-4">
                                        <div data-linkto="single.html" class="card">
                                            <div class="figure">
                                                <img src="/static/images/prop/1-1.png" alt="image">
                                                <div class="figCaption">
                                                    <div>$1,550,000</div>
                                                    <span class="icon-eye"> 200</span>
                                                    <span class="icon-heart"> 54</span>
                                                    <span class="icon-bubble"> 13</span>
                                                </div>
                                                <div class="figView"><span class="icon-eye"></span></div>
                                                <div class="figType">FOR SALE</div>
                                            </div>
                                            <h2>Modern Residence in New York</h2>
                                            <div class="cardAddress"><span class="icon-pointer"></span> 39 Remsen St, Brooklyn, NY 11201, USA</div>
                                            <ul class="cardFeat">
                                                <li><span class="fa fa-moon-o"></span> 3</li>
                                                <li><span class="icon-drop"></span> 2</li>
                                                <li><span class="icon-frame"></span> 3430 Sq Ft</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                    <div class="col-xs-4">
                                        <div data-linkto="single.html" class="card">
                                            <div class="figure">
                                                <img src="/static/images/prop/2-1.png" alt="image">
                                                <div class="figCaption">
                                                    <div>$1,750,000</div>
                                                    <span class="icon-eye"> 175</span>
                                                    <span class="icon-heart"> 67</span>
                                                    <span class="icon-bubble"> 9</span>
                                                </div>
                                                <div class="figView"><span class="icon-eye"></span></div>
                                                <div class="figType">For Rent</div>
                                            </div>
                                            <h2>Hauntingly Beautiful Estate</h2>
                                            <div class="cardAddress"><span class="icon-pointer"></span> 169 Warren St, Brooklyn, NY 11201, USA</div>
                                            <ul class="cardFeat">
                                                <li><span class="fa fa-moon-o"></span> 2</li>
                                                <li><span class="icon-drop"></span> 2</li>
                                                <li><span class="icon-frame"></span> 4430 Sq Ft</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                    <div class="col-xs-4">
                                        <div data-linkto="single.html" class="card">
                                            <div class="figure">
                                                <img src="/static/images/prop/3-1.png" alt="image">
                                                <div class="figCaption">
                                                    <div>$1,340,000</div>
                                                    <span class="icon-eye"> 180</span>
                                                    <span class="icon-heart"> 87</span>
                                                    <span class="icon-bubble"> 12</span>
                                                </div>
                                                <div class="figView"><span class="icon-eye"></span></div>
                                                <div class="figType">For Rent</div>
                                            </div>
                                            <h2>Sophisticated Residence</h2>
                                            <div class="cardAddress"><span class="icon-pointer"></span> 38-62 Water St, Brooklyn, NY 11201, USA</div>
                                            <ul class="cardFeat">
                                                <li><span class="fa fa-moon-o"></span> 2</li>
                                                <li><span class="icon-drop"></span> 3</li>
                                                <li><span class="icon-frame"></span> 2640 Sq Ft</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-xs-4">
                                        <div data-linkto="single.html" class="card">
                                            <div class="figure">
                                                <img src="/static/images/prop/4-1.png" alt="image">
                                                <div class="figCaption">
                                                    <div>$1,930,000</div>
                                                    <span class="icon-eye"> 145</span>
                                                    <span class="icon-heart"> 99</span>
                                                    <span class="icon-bubble"> 25</span>
                                                </div>
                                                <div class="figView"><span class="icon-eye"></span></div>
                                                <div class="figType">For Sale</div>
                                            </div>
                                            <h2>House With a Lovely Glass-Roofed Pergola</h2>
                                            <div class="cardAddress"><span class="icon-pointer"></span> Wunsch Bldg, Brooklyn, NY 11201, USA</div>
                                            <ul class="cardFeat">
                                                <li><span class="fa fa-moon-o"></span> 3</li>
                                                <li><span class="icon-drop"></span> 2</li>
                                                <li><span class="icon-frame"></span> 2800 Sq Ft</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                    <div class="col-xs-4">
                                        <div data-linkto="single.html" class="card">
                                            <div class="figure">
                                                <img src="/static/images/prop/5-1.png" alt="image">
                                                <div class="figCaption">
                                                    <div>$2,350,000</div>
                                                    <span class="icon-eye"> 184</span>
                                                    <span class="icon-heart"> 120</span>
                                                    <span class="icon-bubble"> 18</span>
                                                </div>
                                                <div class="figView"><span class="icon-eye"></span></div>
                                                <div class="figType">For Rent</div>
                                            </div>
                                            <h2>Luxury Mansion</h2>
                                            <div class="cardAddress"><span class="icon-pointer"></span> 95 Butler St, Brooklyn, NY 11231, USA</div>
                                            <ul class="cardFeat">
                                                <li><span class="fa fa-moon-o"></span> 2</li>
                                                <li><span class="icon-drop"></span> 2</li>
                                                <li><span class="icon-frame"></span> 2750 Sq Ft</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                    <div class="col-xs-4">
                                        <div data-linkto="single.html" class="card">
                                            <div class="figure">
                                                <img src="/static/images/prop/1-1.png" alt="image">
                                                <div class="figCaption">
                                                    <div>$1,550,000</div>
                                                    <span class="icon-eye"> 200</span>
                                                    <span class="icon-heart"> 54</span>
                                                    <span class="icon-bubble"> 13</span>
                                                </div>
                                                <div class="figView"><span class="icon-eye"></span></div>
                                                <div class="figType">FOR SALE</div>
                                            </div>
                                            <h2>Modern Residence in New York</h2>
                                            <div class="cardAddress"><span class="icon-pointer"></span> 39 Remsen St, Brooklyn, NY 11201, USA</div>
                                            <ul class="cardFeat">
                                                <li><span class="fa fa-moon-o"></span> 3</li>
                                                <li><span class="icon-drop"></span> 2</li>
                                                <li><span class="icon-frame"></span> 3430 Sq Ft</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="left carousel-control" href="#carouselSimilar-1" role="button" data-slide="prev"><span class="fa fa-chevron-left"></span></a>
                        <a class="right carousel-control" href="#carouselSimilar-1" role="button" data-slide="next"><span class="fa fa-chevron-right"></span></a>
                    </div>

                    <!-- carousel for small devices -->
                    <div id="carouselSimilar-2" class="carousel slide visible-md carousel-col"> 
                        <ol class="carousel-indicators">
                            <li data-target="#carouselSimilar-2" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselSimilar-2" data-slide-to="1"></li>
                            <li data-target="#carouselSimilar-2" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner"> 
                            <div class="item active">
                                <div class="row">
                                    <div class="col-xs-6">
                                        <div data-linkto="single.html" class="card">
                                            <div class="figure">
                                                <img src="/static/images/prop/1-1.png" alt="image">
                                                <div class="figCaption">
                                                    <div>$1,550,000</div>
                                                    <span class="icon-eye"> 200</span>
                                                    <span class="icon-heart"> 54</span>
                                                    <span class="icon-bubble"> 13</span>
                                                </div>
                                                <div class="figView"><span class="icon-eye"></span></div>
                                                <div class="figType">FOR SALE</div>
                                            </div>
                                            <h2>Modern Residence in New York</h2>
                                            <div class="cardAddress"><span class="icon-pointer"></span> 39 Remsen St, Brooklyn, NY 11201, USA</div>
                                            <ul class="cardFeat">
                                                <li><span class="fa fa-moon-o"></span> 3</li>
                                                <li><span class="icon-drop"></span> 2</li>
                                                <li><span class="icon-frame"></span> 3430 Sq Ft</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6">
                                        <div data-linkto="single.html" class="card">
                                            <div class="figure">
                                                <img src="/static/images/prop/2-1.png" alt="image">
                                                <div class="figCaption">
                                                    <div>$1,750,000</div>
                                                    <span class="icon-eye"> 175</span>
                                                    <span class="icon-heart"> 67</span>
                                                    <span class="icon-bubble"> 9</span>
                                                </div>
                                                <div class="figView"><span class="icon-eye"></span></div>
                                                <div class="figType">For Rent</div>
                                            </div>
                                            <h2>Hauntingly Beautiful Estate</h2>
                                            <div class="cardAddress"><span class="icon-pointer"></span> 169 Warren St, Brooklyn, NY 11201, USA</div>
                                            <ul class="cardFeat">
                                                <li><span class="fa fa-moon-o"></span> 2</li>
                                                <li><span class="icon-drop"></span> 2</li>
                                                <li><span class="icon-frame"></span> 4430 Sq Ft</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-xs-6">
                                        <div data-linkto="single.html" class="card">
                                            <div class="figure">
                                                <img src="/static/images/prop/3-1.png" alt="image">
                                                <div class="figCaption">
                                                    <div>$1,340,000</div>
                                                    <span class="icon-eye"> 180</span>
                                                    <span class="icon-heart"> 87</span>
                                                    <span class="icon-bubble"> 12</span>
                                                </div>
                                                <div class="figView"><span class="icon-eye"></span></div>
                                                <div class="figType">For Rent</div>
                                            </div>
                                            <h2>Sophisticated Residence</h2>
                                            <div class="cardAddress"><span class="icon-pointer"></span> 38-62 Water St, Brooklyn, NY 11201, USA</div>
                                            <ul class="cardFeat">
                                                <li><span class="fa fa-moon-o"></span> 2</li>
                                                <li><span class="icon-drop"></span> 3</li>
                                                <li><span class="icon-frame"></span> 2640 Sq Ft</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6">
                                        <div data-linkto="single.html" class="card">
                                            <div class="figure">
                                                <img src="/static/images/prop/4-1.png" alt="image">
                                                <div class="figCaption">
                                                    <div>$1,930,000</div>
                                                    <span class="icon-eye"> 145</span>
                                                    <span class="icon-heart"> 99</span>
                                                    <span class="icon-bubble"> 25</span>
                                                </div>
                                                <div class="figView"><span class="icon-eye"></span></div>
                                                <div class="figType">For Sale</div>
                                            </div>
                                            <h2>House With a Lovely Glass-Roofed Pergola</h2>
                                            <div class="cardAddress"><span class="icon-pointer"></span> Wunsch Bldg, Brooklyn, NY 11201, USA</div>
                                            <ul class="cardFeat">
                                                <li><span class="fa fa-moon-o"></span> 3</li>
                                                <li><span class="icon-drop"></span> 2</li>
                                                <li><span class="icon-frame"></span> 2800 Sq Ft</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-xs-6">
                                        <div data-linkto="single.html" class="card">
                                            <div class="figure">
                                                <img src="/static/images/prop/5-1.png" alt="image">
                                                <div class="figCaption">
                                                    <div>$2,350,000</div>
                                                    <span class="icon-eye"> 184</span>
                                                    <span class="icon-heart"> 120</span>
                                                    <span class="icon-bubble"> 18</span>
                                                </div>
                                                <div class="figView"><span class="icon-eye"></span></div>
                                                <div class="figType">For Rent</div>
                                            </div>
                                            <h2>Luxury Mansion</h2>
                                            <div class="cardAddress"><span class="icon-pointer"></span> 95 Butler St, Brooklyn, NY 11231, USA</div>
                                            <ul class="cardFeat">
                                                <li><span class="fa fa-moon-o"></span> 2</li>
                                                <li><span class="icon-drop"></span> 2</li>
                                                <li><span class="icon-frame"></span> 2750 Sq Ft</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6">
                                        <div data-linkto="single.html" class="card">
                                            <div class="figure">
                                                <img src="/static/images/prop/1-1.png" alt="image">
                                                <div class="figCaption">
                                                    <div>$1,550,000</div>
                                                    <span class="icon-eye"> 200</span>
                                                    <span class="icon-heart"> 54</span>
                                                    <span class="icon-bubble"> 13</span>
                                                </div>
                                                <div class="figView"><span class="icon-eye"></span></div>
                                                <div class="figType">FOR SALE</div>
                                            </div>
                                            <h2>Modern Residence in New York</h2>
                                            <div class="cardAddress"><span class="icon-pointer"></span> 39 Remsen St, Brooklyn, NY 11201, USA</div>
                                            <ul class="cardFeat">
                                                <li><span class="fa fa-moon-o"></span> 3</li>
                                                <li><span class="icon-drop"></span> 2</li>
                                                <li><span class="icon-frame"></span> 3430 Sq Ft</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><!-- carousel-inner -->
                        <a class="left carousel-control" href="#carouselSimilar-2" role="button" data-slide="prev"><span class="fa fa-chevron-left"></span></a>
                        <a class="right carousel-control" href="#carouselSimilar-2" role="button" data-slide="next"><span class="fa fa-chevron-right"></span></a>
                    </div>

                    <!-- carousel for extra-small devices -->
                    <div id="carouselSimilar-3" class="carousel slide visible-xs visible-sm carousel-col">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselSimilar-3" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselSimilar-3" data-slide-to="1"></li>
                            <li data-target="#carouselSimilar-3" data-slide-to="2"></li>
                            <li data-target="#carouselSimilar-3" data-slide-to="3"></li>
                            <li data-target="#carouselSimilar-3" data-slide-to="4"></li>
                            <li data-target="#carouselSimilar-3" data-slide-to="5"></li>
                        </ol>
                        <div class="carousel-inner"> 
                            <div class="item active">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div data-linkto="single.html" class="card">
                                            <div class="figure">
                                                <img src="/static/images/prop/1-1.png" alt="image">
                                                <div class="figCaption">
                                                    <div>$1,550,000</div>
                                                    <span class="icon-eye"> 200</span>
                                                    <span class="icon-heart"> 54</span>
                                                    <span class="icon-bubble"> 13</span>
                                                </div>
                                                <div class="figView"><span class="icon-eye"></span></div>
                                                <div class="figType">FOR SALE</div>
                                            </div>
                                            <h2>Modern Residence in New York</h2>
                                            <div class="cardAddress"><span class="icon-pointer"></span> 39 Remsen St, Brooklyn, NY 11201, USA</div>
                                            <ul class="cardFeat">
                                                <li><span class="fa fa-moon-o"></span> 3</li>
                                                <li><span class="icon-drop"></span> 2</li>
                                                <li><span class="icon-frame"></span> 3430 Sq Ft</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div data-linkto="single.html" class="card">
                                            <div class="figure">
                                                <img src="/static/images/prop/2-1.png" alt="image">
                                                <div class="figCaption">
                                                    <div>$1,750,000</div>
                                                    <span class="icon-eye"> 175</span>
                                                    <span class="icon-heart"> 67</span>
                                                    <span class="icon-bubble"> 9</span>
                                                </div>
                                                <div class="figView"><span class="icon-eye"></span></div>
                                                <div class="figType">For Rent</div>
                                            </div>
                                            <h2>Hauntingly Beautiful Estate</h2>
                                            <div class="cardAddress"><span class="icon-pointer"></span> 169 Warren St, Brooklyn, NY 11201, USA</div>
                                            <ul class="cardFeat">
                                                <li><span class="fa fa-moon-o"></span> 2</li>
                                                <li><span class="icon-drop"></span> 2</li>
                                                <li><span class="icon-frame"></span> 4430 Sq Ft</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div data-linkto="single.html" class="card">
                                            <div class="figure">
                                                <img src="/static/images/prop/3-1.png" alt="image">
                                                <div class="figCaption">
                                                    <div>$1,340,000</div>
                                                    <span class="icon-eye"> 180</span>
                                                    <span class="icon-heart"> 87</span>
                                                    <span class="icon-bubble"> 12</span>
                                                </div>
                                                <div class="figView"><span class="icon-eye"></span></div>
                                                <div class="figType">For Rent</div>
                                            </div>
                                            <h2>Sophisticated Residence</h2>
                                            <div class="cardAddress"><span class="icon-pointer"></span> 38-62 Water St, Brooklyn, NY 11201, USA</div>
                                            <ul class="cardFeat">
                                                <li><span class="fa fa-moon-o"></span> 2</li>
                                                <li><span class="icon-drop"></span> 3</li>
                                                <li><span class="icon-frame"></span> 2640 Sq Ft</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div data-linkto="single.html" class="card">
                                            <div class="figure">
                                                <img src="/static/images/prop/4-1.png" alt="image">
                                                <div class="figCaption">
                                                    <div>$1,930,000</div>
                                                    <span class="icon-eye"> 145</span>
                                                    <span class="icon-heart"> 99</span>
                                                    <span class="icon-bubble"> 25</span>
                                                </div>
                                                <div class="figView"><span class="icon-eye"></span></div>
                                                <div class="figType">For Sale</div>
                                            </div>
                                            <h2>House With a Lovely Glass-Roofed Pergola</h2>
                                            <div class="cardAddress"><span class="icon-pointer"></span> Wunsch Bldg, Brooklyn, NY 11201, USA</div>
                                            <ul class="cardFeat">
                                                <li><span class="fa fa-moon-o"></span> 3</li>
                                                <li><span class="icon-drop"></span> 2</li>
                                                <li><span class="icon-frame"></span> 2800 Sq Ft</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div data-linkto="single.html" class="card">
                                            <div class="figure">
                                                <img src="/static/images/prop/5-1.png" alt="image">
                                                <div class="figCaption">
                                                    <div>$2,350,000</div>
                                                    <span class="icon-eye"> 184</span>
                                                    <span class="icon-heart"> 120</span>
                                                    <span class="icon-bubble"> 18</span>
                                                </div>
                                                <div class="figView"><span class="icon-eye"></span></div>
                                                <div class="figType">For Rent</div>
                                            </div>
                                            <h2>Luxury Mansion</h2>
                                            <div class="cardAddress"><span class="icon-pointer"></span> 95 Butler St, Brooklyn, NY 11231, USA</div>
                                            <ul class="cardFeat">
                                                <li><span class="fa fa-moon-o"></span> 2</li>
                                                <li><span class="icon-drop"></span> 2</li>
                                                <li><span class="icon-frame"></span> 2750 Sq Ft</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div data-linkto="single.html" class="card">
                                            <div class="figure">
                                                <img src="/static/images/prop/1-1.png" alt="image">
                                                <div class="figCaption">
                                                    <div>$1,550,000</div>
                                                    <span class="icon-eye"> 200</span>
                                                    <span class="icon-heart"> 54</span>
                                                    <span class="icon-bubble"> 13</span>
                                                </div>
                                                <div class="figView"><span class="icon-eye"></span></div>
                                                <div class="figType">FOR SALE</div>
                                            </div>
                                            <h2>Modern Residence in New York</h2>
                                            <div class="cardAddress"><span class="icon-pointer"></span> 39 Remsen St, Brooklyn, NY 11201, USA</div>
                                            <ul class="cardFeat">
                                                <li><span class="fa fa-moon-o"></span> 3</li>
                                                <li><span class="icon-drop"></span> 2</li>
                                                <li><span class="icon-frame"></span> 3430 Sq Ft</li>
                                            </ul>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="left carousel-control" href="#carouselSimilar-3" role="button" data-slide="prev"><span class="fa fa-chevron-left"></span></a>
                        <a class="right carousel-control" href="#carouselSimilar-3" role="button" data-slide="next"><span class="fa fa-chevron-right"></span></a>
                    </div>
                </div>
                <div class="comments">
                    <h3><span>4</span> Comments</h3>
                    <div class="comment">
                        <div class="commentAvatar">
                            <img class="avatar" src="/static/images/avatar-3.png" alt="avatar">
                            <div class="commentArrow"><span class="fa fa-caret-left"></span></div>
                        </div>
                        <div class="commentContent">
                            <div class="commentName">Rust Cohle</div>
                            <div class="commentBody">
                                It is a long established fact that a reader will be distracted by the readable content
                            </div>
                            <div class="commentActions">
                                <div class="commentTime"><span class="icon-clock"></span> 1 day ago</div>
                                <ul>
                                    <li><a href="#"><span class="icon-action-undo"></span></a></li>
                                    <li><a href="#"><span class="icon-like"></span> 13</a></li>
                                </ul>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="comment reply">
                        <div class="commentAvatar">
                            <img class="avatar" src="/static/images/avatar-1.png" alt="avatar">
                            <div class="commentArrow"><span class="fa fa-caret-left"></span></div>
                        </div>
                        <div class="commentContent">
                            <div class="commentName">John Smith</div>
                            <div class="commentBody">
                                Comment posted by me. I have the power to remove it.
                            </div>
                            <div class="commentActions">
                                <div class="commentTime"><span class="icon-clock"></span> 2 hours ago</div>
                                <ul>
                                    <li><a href="#"><span class="fa fa-trash-o"></span></a></li>
                                </ul>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="comment">
                        <div class="commentAvatar">
                            <img class="avatar" src="/static/images/avatar-5.png" alt="avatar">
                            <div class="comemntArrow"><span class="fa fa-caret-left"></span></div>
                        </div>
                        <div class="commentContent">
                            <div class="commentName">Alex Rogers</div>
                            <div class="commentBody">
                                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                            </div>
                            <div class="commentActions">
                                <div class="commentTime"><span class="icon-clock"></span> 20 minutes ago</div>
                                <ul>
                                    <li><a href="#"><span class="icon-action-undo"></span></a></li>
                                    <li><a href="#"><span class="icon-like"></span> 13</a></li>
                                </ul>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="comment">
                        <div class="commentAvatar">
                            <img class="avatar" src="/static/images/avatar-2.png" alt="avatar">
                            <div class="commentArrow"><span class="fa fa-caret-left"></span></div>
                        </div>
                        <div class="commentContent">
                            <div class="commentName">Jane Smith</div>
                            <div class="commentBody">
                                Lorem ipsum dolor sit amet, consecteter adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                            </div>
                            <div class="commentActions">
                                <div class="commentTime"><span class="icon-clock"></span> 5 minutes ago</div>
                                <ul>
                                    <li><a href="#"><span class="icon-action-undo"></span></a></li>
                                    <li><a href="#"><span class="icon-like"></span> 13</a></li>
                                </ul>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
            <div class="commentsFormWrapper">
                <div class="cfAvatar">
                    <img class="avatar" src="/static/images/avatar-1.png" alt="avatar">
                </div>
                <form class="commentsForm">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Write a comment...">
                        <span class="input-group-btn"><a class="btn btn-green">Post</a></span>
                    </div>
                </form>
                <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
        </div>

        <div class="modal fade" id="contactAgent" role="dialog" aria-labelledby="contactLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title" id="contactLabel">Contact Agent</h4>
                    </div>
                    <div class="modal-body">
                        <form class="contactForm">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 cfItem">
                                    <input type="text" placeholder="Name" class="form-control">
                                 </div>
                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 cfItem">
                                    <input type="text" placeholder="Email" class="form-control">
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 cfItem">
                                    <input type="text" placeholder="Subject" class="form-control">
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 cfItem">
                                    <textarea placeholder="Message" rows="3" class="form-control"></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <a href="#" data-dismiss="modal" class="btn btn-round btn-o btn-gray">Close</a>
                        <a href="#" class="btn btn-round btn-green">Send message</a>
                    </div>
                </div>
            </div>
        </div>

</div>
</template>

<script>

import TopNav from '@/components/TopNav';
import LeftNav from '@/components/LeftNav'; 
    export default {

        components : { TopNav, LeftNav },
        mounted () {

            (function($) {
    "use strict";

    // Custom options for map
    var options = {
            zoom : 14,
            mapTypeId : 'Styled',
            disableDefaultUI: true,
            mapTypeControlOptions : {
                mapTypeIds : [ 'Styled' ]
            }
        };
    var styles = [{
        stylers : [ {
            hue : "#cccccc"
        }, {
            saturation : -100
        }]
    }, {
        featureType : "road",
        elementType : "geometry",
        stylers : [ {
            lightness : 100
        }, {
            visibility : "simplified"
        }]
    }, {
        featureType : "road",
        elementType : "labels",
        stylers : [ {
            visibility : "on"
        }]
    }, {
        featureType: "poi",
        stylers: [ {
            visibility: "off"
        }]
    }];

    var newMarker = null;
    var markers = [];

    // json for properties markers on map
    var props = [{
        title : 'Modern Residence in New York',
        image : '1-1-thmb.png',
        type : 'For Sale',
        price : '$1,550,000',
        address : '39 Remsen St, Brooklyn, NY 11201, USA',
        bedrooms : '3',
        bathrooms : '2',
        area : '3430 Sq Ft',
        position : {
            lat : 40.696047,
            lng : -73.997159
        },
        markerIcon : "marker-green.png"
    }, {
        title : 'Hauntingly Beautiful Estate',
        image : '2-1-thmb.png',
        type : 'For Rent',
        price : '$1,750,000',
        address : '169 Warren St, Brooklyn, NY 11201, USA',
        bedrooms : '2',
        bathrooms : '2',
        area : '4430 Sq Ft',
        position : {
            lat : 40.688042,
            lng : -73.996472
        },
        markerIcon : "marker-green.png"
    }, {
        title : 'Sophisticated Residence',
        image : '3-1-thmb.png',
        type : 'For Sale',
        price : '$1,340,000',
        address : '38-62 Water St, Brooklyn, NY 11201, USA',
        bedrooms : '2',
        bathrooms : '3',
        area : '2640 Sq Ft',
        position : {
            lat : 40.702620,
            lng : -73.989682
        },
        markerIcon : "marker-green.png"
    }, {
        title : 'House With a Lovely Glass-Roofed Pergola',
        image : '4-1-thmb.png',
        type : 'For Sale',
        price : '$1,930,000',
        address : 'Wunsch Bldg, Brooklyn, NY 11201, USA',
        bedrooms : '3',
        bathrooms : '2',
        area : '2800 Sq Ft',
        position : {
            lat : 40.694355,
            lng : -73.985229
        },
        markerIcon : "marker-green.png"
    }, {
        title : 'Luxury Mansion',
        image : '5-1-thmb.png',
        type : 'For Rent',
        price : '$2,350,000',
        address : '95 Butler St, Brooklyn, NY 11231, USA',
        bedrooms : '2',
        bathrooms : '2',
        area : '2750 Sq Ft',
        position : {
            lat : 40.686838,
            lng : -73.990078
        },
        markerIcon : "marker-green.png"
    }, {
        title : 'Modern Residence in New York',
        image : '1-1-thmb.png',
        type : 'For Sale',
        price : '$1,550,000',
        address : '39 Remsen St, Brooklyn, NY 11201, USA',
        bedrooms : '3',
        bathrooms : '2',
        area : '3430 Sq Ft',
        position : {
            lat : 40.703686,
            lng : -73.982910
        },
        markerIcon : "marker-green.png"
    }, {
        title : 'Hauntingly Beautiful Estate',
        image : '2-1-thmb.png',
        type : 'For Rent',
        price : '$1,750,000',
        address : '169 Warren St, Brooklyn, NY 11201, USA',
        bedrooms : '2',
        bathrooms : '2',
        area : '4430 Sq Ft',
        position : {
            lat : 40.702189,
            lng : -73.995098
        },
        markerIcon : "marker-green.png"
    }, {
        title : 'Sophisticated Residence',
        image : '3-1-thmb.png',
        type : 'For Sale',
        price : '$1,340,000',
        address : '38-62 Water St, Brooklyn, NY 11201, USA',
        bedrooms : '2',
        bathrooms : '3',
        area : '2640 Sq Ft',
        position : {
            lat : 40.687417,
            lng : -73.982653
        },
        markerIcon : "marker-green.png"
    }, {
        title : 'House With a Lovely Glass-Roofed Pergola',
        image : '4-1-thmb.png',
        type : 'For Sale',
        price : '$1,930,000',
        address : 'Wunsch Bldg, Brooklyn, NY 11201, USA',
        bedrooms : '3',
        bathrooms : '2',
        area : '2800 Sq Ft',
        position : {
            lat : 40.694120,
            lng : -73.974413
        },
        markerIcon : "marker-green.png"
    }, {
        title : 'Luxury Mansion',
        image : '5-1-thmb.png',
        type : 'For Rent',
        price : '$2,350,000',
        address : '95 Butler St, Brooklyn, NY 11231, USA',
        bedrooms : '2',
        bathrooms : '2',
        area : '2750 Sq Ft',
        position : {
            lat : 40.682665,
            lng : -74.000934
        },
        markerIcon : "marker-green.png"
    }];

    // custom infowindow object
    var infobox = new InfoBox({
        disableAutoPan: false,
        maxWidth: 202,
        pixelOffset: new google.maps.Size(-101, -285),
        zIndex: null,
        boxStyle: {
            background: "url('/static/images/infobox-bg.png') no-repeat",
            opacity: 1,
            width: "202px",
            height: "245px"
        },
        closeBoxMargin: "28px 26px 0px 0px",
        closeBoxURL: "",
        infoBoxClearance: new google.maps.Size(1, 1),
        pane: "floatPane",
        enableEventPropagation: false
    });

    // function that adds the markers on map
    var addMarkers = function(props, map) {
        $.each(props, function(i,prop) {
            var latlng = new google.maps.LatLng(prop.position.lat,prop.position.lng);
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
                icon: new google.maps.MarkerImage( 
                    '/static/images/' + prop.markerIcon,
                    null,
                    null,
                    null,
                    new google.maps.Size(36, 36)
                ),
                draggable: false,
                animation: google.maps.Animation.DROP,
            });
            var infoboxContent = '<div class="infoW">' +
                                    '<div class="propImg">' +
                                        '<img src="/static/images/prop/' + prop.image + '">' +
                                        '<div class="propBg">' +
                                            '<div class="propPrice">' + prop.price + '</div>' +
                                            '<div class="propType">' + prop.type + '</div>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="paWrapper">' +
                                        '<div class="propTitle">' + prop.title + '</div>' +
                                        '<div class="propAddress">' + prop.address + '</div>' +
                                    '</div>' +
                                    '<div class="propRating">' +
                                        '<span class="fa fa-star"></span>' +
                                        '<span class="fa fa-star"></span>' +
                                        '<span class="fa fa-star"></span>' +
                                        '<span class="fa fa-star"></span>' +
                                        '<span class="fa fa-star-o"></span>' +
                                    '</div>' +
                                    '<ul class="propFeat">' +
                                        '<li><span class="fa fa-moon-o"></span> ' + prop.bedrooms + '</li>' +
                                        '<li><span class="icon-drop"></span> ' + prop.bathrooms + '</li>' +
                                        '<li><span class="icon-frame"></span> ' + prop.area + '</li>' +
                                    '</ul>' +
                                    '<div class="clearfix"></div>' +
                                    '<div class="infoButtons">' +
                                        '<a class="btn btn-sm btn-round btn-gray btn-o closeInfo">Close</a>' +
                                        '<a href="single.html" class="btn btn-sm btn-round btn-green viewInfo">View</a>' +
                                    '</div>' +
                                 '</div>';

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infobox.setContent(infoboxContent);
                    infobox.open(map, marker);
                }
            })(marker, i));

            $(document).on('click', '.closeInfo', function() {
                infobox.open(null,null);
            });

            markers.push(marker);
        });
    }

    var map;
    var windowHeight;
    var windowWidth;
    var contentHeight;
    var contentWidth;
    var isDevice = true;

    // calculations for elements that changes size on window resize
    var windowResizeHandler = function() {
        windowHeight = window.innerHeight;
        windowWidth = $(window).width();
        contentHeight = windowHeight - $('#header').height();
        contentWidth = $('#content').width();

        $('#leftSide').height(contentHeight);
        $('.closeLeftSide').height(contentHeight);
        $('#wrapper').height(contentHeight);
        $('#mapView').height(contentHeight);
        $('#content').height(contentHeight);
        setTimeout(function() {
            $('.commentsFormWrapper').width(contentWidth);
        }, 300);

        if (map) {
            google.maps.event.trigger(map, 'resize');
        }

        // Add custom scrollbar for left side navigation
        if(windowWidth > 767) {
            $('.bigNav').slimScroll({
                height : contentHeight - $('.leftUserWraper').height()
            });
        } else {
            $('.bigNav').slimScroll({
                height : contentHeight
            });
        }
        if($('.bigNav').parent('.slimScrollDiv').size() > 0) {
            $('.bigNav').parent().replaceWith($('.bigNav'));
            if(windowWidth > 767) {
                $('.bigNav').slimScroll({
                    height : contentHeight - $('.leftUserWraper').height()
                });
            } else {
                $('.bigNav').slimScroll({
                    height : contentHeight
                });
            }
        }

        // reposition of prices and area reange sliders tooltip
        var priceSliderRangeLeft = parseInt($('.priceSlider .ui-slider-range').css('left'));
        var priceSliderRangeWidth = $('.priceSlider .ui-slider-range').width();
        var priceSliderLeft = priceSliderRangeLeft + ( priceSliderRangeWidth / 2 ) - ( $('.priceSlider .sliderTooltip').width() / 2 );
        $('.priceSlider .sliderTooltip').css('left', priceSliderLeft);

        var areaSliderRangeLeft = parseInt($('.areaSlider .ui-slider-range').css('left'));
        var areaSliderRangeWidth = $('.areaSlider .ui-slider-range').width();
        var areaSliderLeft = areaSliderRangeLeft + ( areaSliderRangeWidth / 2 ) - ( $('.areaSlider .sliderTooltip').width() / 2 );
        $('.areaSlider .sliderTooltip').css('left', areaSliderLeft);
    }

    var repositionTooltip = function( e, ui ){
        var div = $(ui.handle).data("bs.tooltip").$tip[0];
        var pos = $.extend({}, $(ui.handle).offset(), { 
                        width: $(ui.handle).get(0).offsetWidth,
                        height: $(ui.handle).get(0).offsetHeight
                    });
        var actualWidth = div.offsetWidth;

        var tp = {left: pos.left + pos.width / 2 - actualWidth / 2}
        $(div).offset(tp);

        $(div).find(".tooltip-inner").text( ui.value );
    }

    windowResizeHandler();
    $(window).resize(function() {
        windowResizeHandler();
    });

    setTimeout(function() {
        $('body').removeClass('notransition');

        map = new google.maps.Map(document.getElementById('mapView'), options);
        var styledMapType = new google.maps.StyledMapType(styles, {
            name : 'Styled'
        });

        map.mapTypes.set('Styled', styledMapType);
        map.setCenter(new google.maps.LatLng(40.6984237,-73.9890044));
        map.setZoom(14);

        if ($('#address').length > 0) {
            newMarker = new google.maps.Marker({
                position: new google.maps.LatLng(40.6984237,-73.9890044),
                map: map,
                icon: new google.maps.MarkerImage( 
                    '/static/images/marker-new.png',
                    null,
                    null,
                    // new google.maps.Point(0,0),
                    null,
                    new google.maps.Size(36, 36)
                ),
                draggable: true,
                animation: google.maps.Animation.DROP,
            });

            google.maps.event.addListener(newMarker, "mouseup", function(event) {
                var latitude = this.position.lat();
                var longitude = this.position.lng();
                $('#latitude').text(this.position.lat());
                $('#longitude').text(this.position.lng());
            });
        }

        addMarkers(props, map);
    }, 300);

    if(!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)) {
        $('body').addClass('no-touch');
        isDevice = false;
    }

    // Header search icon transition
    $('.search input').focus(function() {
        $('.searchIcon').addClass('active');
    });
    $('.search input').blur(function() {
        $('.searchIcon').removeClass('active');
    });

    // Notifications list items pulsate animation
    $('.notifyList a').hover(
        function() {
            $(this).children('.pulse').addClass('pulsate');
        },
        function() {
            $(this).children('.pulse').removeClass('pulsate');
        }
    );

    // Exapnd left side navigation
    var navExpanded = false;
    $('.navHandler, .closeLeftSide').click(function() {
        if(!navExpanded) {
            $('.logo').addClass('expanded');
            $('#leftSide').addClass('expanded');
            if(windowWidth < 768) {
                $('.closeLeftSide').show();
            }
            $('.hasSub').addClass('hasSubActive');
            $('.leftNav').addClass('bigNav');
            if(windowWidth > 767) {
                $('.full').addClass('m-full');
            }
            windowResizeHandler();
            navExpanded = true;
        } else {
            $('.logo').removeClass('expanded');
            $('#leftSide').removeClass('expanded');
            $('.closeLeftSide').hide();
            $('.hasSub').removeClass('hasSubActive');
            $('.bigNav').slimScroll({ destroy: true });
            $('.leftNav').removeClass('bigNav');
            $('.leftNav').css('overflow', 'visible');
            $('.full').removeClass('m-full');
            navExpanded = false;
        }
    });

    // functionality for map manipulation icon on mobile devices
    $('.mapHandler').click(function() {
        if ($('#mapView').hasClass('mob-min') || 
            $('#mapView').hasClass('mob-max') || 
            $('#content').hasClass('mob-min') || 
            $('#content').hasClass('mob-max')) {
                $('#mapView').toggleClass('mob-max');
                $('#content').toggleClass('mob-min');
        } else {
            $('#mapView').toggleClass('min');
            $('#content').toggleClass('max');
        }

        setTimeout(function() {
            var priceSliderRangeLeft = parseInt($('.priceSlider .ui-slider-range').css('left'));
            var priceSliderRangeWidth = $('.priceSlider .ui-slider-range').width();
            var priceSliderLeft = priceSliderRangeLeft + ( priceSliderRangeWidth / 2 ) - ( $('.priceSlider .sliderTooltip').width() / 2 );
            $('.priceSlider .sliderTooltip').css('left', priceSliderLeft);

            var areaSliderRangeLeft = parseInt($('.areaSlider .ui-slider-range').css('left'));
            var areaSliderRangeWidth = $('.areaSlider .ui-slider-range').width();
            var areaSliderLeft = areaSliderRangeLeft + ( areaSliderRangeWidth / 2 ) - ( $('.areaSlider .sliderTooltip').width() / 2 );
            $('.areaSlider .sliderTooltip').css('left', areaSliderLeft);

            if (map) {
                google.maps.event.trigger(map, 'resize');
            }

            $('.commentsFormWrapper').width($('#content').width());
        }, 300);

    });

    // Expand left side sub navigation menus
    $(document).on("click", '.hasSubActive', function() {
        $(this).toggleClass('active');
        $(this).children('ul').toggleClass('bigList');
        $(this).children('a').children('.arrowRight').toggleClass('fa-angle-down');
    });

    if(isDevice) {
        $('.hasSub').click(function() {
            $('.leftNav ul li').not(this).removeClass('onTap');
            $(this).toggleClass('onTap');
        });
    }

    // functionality for custom dropdown select list
    $('.dropdown-select li a').click(function() {
        if (!($(this).parent().hasClass('disabled'))) {
            $(this).prev().prop("checked", true);
            $(this).parent().siblings().removeClass('active');
            $(this).parent().addClass('active');
            $(this).parent().parent().siblings('.dropdown-toggle').children('.dropdown-label').html($(this).text());
        }
    });

    $('.priceSlider').slider({
        range: true,
        min: 0,
        max: 2000000,
        values: [500000, 1500000],
        step: 10000,
        slide: function(event, ui) {
            $('.priceSlider .sliderTooltip .stLabel').html(
                '$' + ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + 
                ' <span class="fa fa-arrows-h"></span> ' +
                '$' + ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
            );
            var priceSliderRangeLeft = parseInt($('.priceSlider .ui-slider-range').css('left'));
            var priceSliderRangeWidth = $('.priceSlider .ui-slider-range').width();
            var priceSliderLeft = priceSliderRangeLeft + ( priceSliderRangeWidth / 2 ) - ( $('.priceSlider .sliderTooltip').width() / 2 );
            $('.priceSlider .sliderTooltip').css('left', priceSliderLeft);
        }
    });
    $('.priceSlider .sliderTooltip .stLabel').html(
        '$' + $('.priceSlider').slider('values', 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + 
        ' <span class="fa fa-arrows-h"></span> ' +
        '$' + $('.priceSlider').slider('values', 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    );
    var priceSliderRangeLeft = parseInt($('.priceSlider .ui-slider-range').css('left'));
    var priceSliderRangeWidth = $('.priceSlider .ui-slider-range').width();
    var priceSliderLeft = priceSliderRangeLeft + ( priceSliderRangeWidth / 2 ) - ( $('.priceSlider .sliderTooltip').width() / 2 );
    $('.priceSlider .sliderTooltip').css('left', priceSliderLeft);

    $('.areaSlider').slider({
        range: true,
        min: 0,
        max: 20000,
        values: [5000, 10000],
        step: 10,
        slide: function(event, ui) {
            $('.areaSlider .sliderTooltip .stLabel').html(
                ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + ' Sq Ft' +
                ' <span class="fa fa-arrows-h"></span> ' +
                ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + ' Sq Ft'
            );
            var areaSliderRangeLeft = parseInt($('.areaSlider .ui-slider-range').css('left'));
            var areaSliderRangeWidth = $('.areaSlider .ui-slider-range').width();
            var areaSliderLeft = areaSliderRangeLeft + ( areaSliderRangeWidth / 2 ) - ( $('.areaSlider .sliderTooltip').width() / 2 );
            $('.areaSlider .sliderTooltip').css('left', areaSliderLeft);
        }
    });
    $('.areaSlider .sliderTooltip .stLabel').html(
        $('.areaSlider').slider('values', 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + ' Sq Ft' +
        ' <span class="fa fa-arrows-h"></span> ' +
        $('.areaSlider').slider('values', 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + ' Sq Ft'
    );
    var areaSliderRangeLeft = parseInt($('.areaSlider .ui-slider-range').css('left'));
    var areaSliderRangeWidth = $('.areaSlider .ui-slider-range').width();
    var areaSliderLeft = areaSliderRangeLeft + ( areaSliderRangeWidth / 2 ) - ( $('.areaSlider .sliderTooltip').width() / 2 );
    $('.areaSlider .sliderTooltip').css('left', areaSliderLeft);

    $('.volume .btn-round-right').click(function() {
        var currentVal = parseInt($(this).siblings('input').val());
        if (currentVal < 10) {
            $(this).siblings('input').val(currentVal + 1);
        }
    });
    $('.volume .btn-round-left').click(function() {
        var currentVal = parseInt($(this).siblings('input').val());
        if (currentVal > 1) {
            $(this).siblings('input').val(currentVal - 1);
        }
    });

    $('.handleFilter').click(function() {
        $('.filterForm').slideToggle(200);
    });

    //Enable swiping
    $(".carousel-inner").swipe( {
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            $(this).parent().carousel('next'); 
        },
        swipeRight: function() {
            $(this).parent().carousel('prev');
        }
    });

    $(".carousel-inner .card").click(function() {
        window.open($(this).attr('data-linkto'), '_self');
    });

    $('#content').scroll(function() {
        if ($('.comments').length > 0) {
            var visible = $('.comments').visible(true);
            if (visible) {
                $('.commentsFormWrapper').addClass('active');
            } else {
                $('.commentsFormWrapper').removeClass('active');
            }
        }
    });

    $('.btn').click(function() {
        if ($(this).is('[data-toggle-class]')) {
            $(this).toggleClass('active ' + $(this).attr('data-toggle-class'));
        }
    });

    $('.tabsWidget .tab-scroll').slimScroll({
        height: '235px',
        size: '5px',
        position: 'right',
        color: '#939393',
        alwaysVisible: false,
        distance: '5px',
        railVisible: false,
        railColor: '#222',
        railOpacity: 0.3,
        wheelStep: 10,
        allowPageScroll: true,
        disableFadeOut: false
    });

    $('.progress-bar[data-toggle="tooltip"]').tooltip();
    $('.tooltipsContainer .btn').tooltip();

    $("#slider1").slider({
        range: "min",
        value: 50,
        min: 1,
        max: 100,
        slide: repositionTooltip,
        stop: repositionTooltip
    });
    $("#slider1 .ui-slider-handle:first").tooltip({ title: $("#slider1").slider("value"), trigger: "manual"}).tooltip("show");

    $("#slider2").slider({
        range: "max",
        value: 70,
        min: 1,
        max: 100,
        slide: repositionTooltip,
        stop: repositionTooltip
    });
    $("#slider2 .ui-slider-handle:first").tooltip({ title: $("#slider2").slider("value"), trigger: "manual"}).tooltip("show");

    $("#slider3").slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 190, 350 ],
        slide: repositionTooltip,
        stop: repositionTooltip
    });
    $("#slider3 .ui-slider-handle:first").tooltip({ title: $("#slider3").slider("values", 0), trigger: "manual"}).tooltip("show");
    $("#slider3 .ui-slider-handle:last").tooltip({ title: $("#slider3").slider("values", 1), trigger: "manual"}).tooltip("show");

    $('#autocomplete').autocomplete({
        source: ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"],
        focus: function (event, ui) {
            var label = ui.item.label;
            var value = ui.item.value;
            var me = $(this);
            setTimeout(function() {
                me.val(value);
            }, 1);
        }
    });

    $('#tags').tagsInput({
        'height': 'auto',
        'width': '100%',
        'defaultText': 'Add a tag',
    });

    $('#datepicker').datepicker();

    // functionality for autocomplete address field
    if ($('#address').length > 0) {
        var address = document.getElementById('address');
        var addressAuto = new google.maps.places.Autocomplete(address);

        google.maps.event.addListener(addressAuto, 'place_changed', function() {
            var place = addressAuto.getPlace();

            if (!place.geometry) {
                return;
            }
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
            }
            newMarker.setPosition(place.geometry.location);
            newMarker.setVisible(true);
            $('#latitude').text(newMarker.getPosition().lat());
            $('#longitude').text(newMarker.getPosition().lng());

            return false;
        });
    }

    $('input, textarea').placeholder();

})(jQuery);
        }

    }

</script>