<template>
<div>
     <div id="hero-container">
            <!-- ul class="cb-slideshow">
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
            </ul-->
            <div id="carouselFull" class="carousel slide" data-ride="carousel">
                        <!--ol class="carousel-indicators">
                            <li data-target="#carouselFull" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselFull" data-slide-to="1"></li>
                            <li data-target="#carouselFull" data-slide-to="2"></li>
                            
                        </ol-->
                        <div class="carousel-inner">
                            <div class="item active" style="height:600px;color:transparent;">
                                <img class="cb-slideshow" src="/static/images/buffalo1.jpg" alt="First slide">
                                <div class="home-caption">
                                  <div class="home-title">Commercial real estate made easy</div>
                                  
                            </div>
                            </div>
                            <div class="item" style="height:600px">
                                <img class="cb-slideshow" src="/static/images/buffalo2.jpg" alt="Second slide">
                                <div class="home-caption">
                                  <div class="home-title">Commercial real estate made easy</div>
                                 
                            </div>
                            </div>
                            <div class="item" style="height:600px">
                                <img class="cb-slideshow" src="/static/images/texas.jpg" alt="Third slide">
                                <div class="home-caption">
                                  <div class="home-title">Commercial real estate made easy</div>
                                   
                            </div>
                            </div>
                        
                        </div>
                        <a class="left carousel-control" href="#carouselFull" role="button" data-slide="prev"><span class="fa fa-chevron-left"></span></a>
                        <a class="right carousel-control" href="#carouselFull" role="button" data-slide="next"><span class="fa fa-chevron-right"></span></a>
                    </div>
            <div class="home-header">
                <div class="home-logo osLight"><img src="/static/images/logo-text.png" style="max-height: 60px;"></img></div>
                <a href="#" class="home-navHandler visible-xs"><span class="fa fa-bars"></span></a>
                <div class="home-nav" style="padding-top: 15px;" >
                    <ul>
                        <li><a href="#" data-toggle="modal" data-target="#signup">Sign Up</a></li>
                        <li><a href="#" data-toggle="modal" data-target="#signin">Sign In</a></li>
                        <li><a href="add.html" class="btn btn-green">List a Property</a></li>
                    </ul>
                </div>
            </div>
            <!-- div class="home-caption">
                <div class="home-title">Now it's easy to find your future home</div>
                <div class="home-subtitle">With thirdstor3y - Real Estate HTML Template</div>
                <a href="#" class="btn btn-lg btn-black">Learn More</a>
            </di -->
            <div class="search-panel">
                <form class="form-inline" role="form">
                    <div class="form-group">
                        <input type="text" class="form-control" id="city" placeholder="City" autocomplete="off">
                    </div>
                    <!-- div class="form-group hidden-xs adv">
                        <a href="#" data-toggle="dropdown" class="btn btn-white dropdown-toggle">
                            <span class="dropdown-label">Bedrooms</span> <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-select">
                            <li class="active"><input type="radio" name="bedno" checked="checked"><a href="#">Bedrooms</a></li>
                            <li><input type="radio" name="bedno"><a href="#">1</a></li>
                            <li><input type="radio" name="bedno"><a href="#">2</a></li>
                            <li><input type="radio" name="bedno"><a href="#">3</a></li>
                            <li><input type="radio" name="bedno"><a href="#">4</a></li>
                        </ul>
                    </div>
                    <div class="form-group hidden-xs adv">
                        <a href="#" data-toggle="dropdown" class="btn btn-white dropdown-toggle">
                            <span class="dropdown-label">Bathrooms</span> <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-select">
                            <li class="active"><input type="radio" name="bathno" checked="checked"><a href="#">Bathrooms</a></li>
                            <li><input type="radio" name="bathno"><a href="#">1</a></li>
                            <li><input type="radio" name="bathno"><a href="#">2</a></li>
                            <li><input type="radio" name="bathno"><a href="#">3</a></li>
                            <li><input type="radio" name="bathno"><a href="#">4</a></li>
                        </ul>
                    </div-->
                    <div class="form-group hidden-xs adv">
                        <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input class="form-control price" type="text" placeholder="From">
                        </div>
                    </div>
                    <div class="form-group hidden-xs adv">
                        <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input class="form-control price" type="text" placeholder="To">
                        </div>
                    </div>
                    <div class="form-group hidden-xs adv">
                        <div class="checkbox custom-checkbox"><label><input type="checkbox"><span class="fa fa-check"></span> For Lease</label></div>
                    </div>
                    <div class="form-group hidden-xs adv">
                        <div class="checkbox custom-checkbox"><label><input type="checkbox"><span class="fa fa-check"></span> For Sale</label></div>
                    </div>
                    <div class="form-group">
                        <router-link to="/Explore" class="btn btn-green">Search</router-link>
                        <a href="#" class="btn btn-o btn-white pull-right visible-xs" id="advanced">Advanced Search <span class="fa fa-angle-up"></span></a>
                    </div>
                </form>
            </div>
        </div>
        <div class="highlight">
            <div class="h-title osLight">Find your new place with thirdstor3y</div>
            <div class="h-text osLight">Fusce risus metus, placerat in consectetur eu, porttitor a est sed sed dolor lorem cras adipiscing</div>
        </div>

        <!-- Content -->

        <div class="home-wrapper">
            <div class="home-content">
                <h2 class="osLight">Our Services</h2>
                <div class="row pb40">
                    <div class="col-xs-12 col-sm-6 col-md-4 s-menu-item">
                        <a href="#">
                            <span class="icon-pointer s-icon"></span>
                            <div class="s-content">
                                <h2 class="s-main osLight">Find the perfect place for your business to thrive</h2>
                            </div>
                        </a>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 s-menu-item">
                        <router-link to="/Analytics">
                            <span class="icon-users s-icon"></span>
                            <div class="s-content">
                                <h2 class="s-main osLight">Tools, analytics, and<br>on-the-ground knowledge</h2>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 s-menu-item">
                        <a href="#">
                            <span class="icon-home s-icon"></span>
                            <div class="s-content">
                                <h2 class="s-main osLight">Comprehensive listings that showcase your property</h2>
                            </div>
                        </a>
                    </div>
                </div>
                <h2 class="osLight">Recently Listed Properties</h2>
                <div class="row pb40">
                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <a href="single.html" class="propWidget-2">
                            <div class="fig">
                                <img src="/static/images/listings/Ellicott-Square-Building-Buffalo.jpg" alt="Modern Residence in New York">
                                <img class="blur" src="/static/images/listings/Ellicott-Square-Building-Buffalo.jpg" alt="Modern Residence in New York">
                                <div class="opac"></div>
                                <div class="priceCap osLight"><span>$1,750,000</span></div>
                                <div class="figType">FOR SALE</div>
                                <h3 class="osLight">Office Space in Buffalo New York</h3>
                                <div class="address">39 Ellicott St, Buffalo, NY 14223, USA</div>
                                <ul class="rating">
                                    <li><span class="fa fa-star star-1"></span></li>
                                    <li><span class="fa fa-star star-2"></span></li>
                                    <li><span class="fa fa-star star-3"></span></li>
                                    <li><span class="fa fa-star star-4"></span></li>
                                    <li><span class="fa fa-star-o star-5"></span></li>
                                </ul>
                            </div>
                        </a>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <a href="single.html" class="propWidget-2">
                            <div class="fig">
                                <img src="/static/images/listings/Lawley-Building-361-Delaware-Buffalo.jpg" alt="Hauntingly Beautiful Estate">
                                <img class="blur" src="/static/images/listings/Lawley-Building-361-Delaware-Buffalo.jpg" alt="Hauntingly Beautiful Estate">
                                <div class="opac"></div>
                                <div class="priceCap osLight"><span>$1,550,000</span></div>
                                <div class="figType">FOR RENT</div>
                                <h3 class="osLight">Hauntingly Beautiful Estate</h3>
                                <div class="address">361 Delaware Ave, Buffalo, NY 14213, USA</div>
                                <ul class="rating">
                                    <li><span class="fa fa-star star-1"></span></li>
                                    <li><span class="fa fa-star star-2"></span></li>
                                    <li><span class="fa fa-star star-3"></span></li>
                                    <li><span class="fa fa-star star-4"></span></li>
                                    <li><span class="fa fa-star star-5"></span></li>
                                </ul>
                            </div>
                        </a>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <a href="single.html" class="propWidget-2">
                            <div class="fig">
                                <img src="/static/images/listings/270-michigan-ave-1.jpg" alt="Luxury Mansion">
                                <img class="blur" src="/static/images/listings/270-michigan-ave-1.jpg" alt="Luxury Mansion">
                                <div class="opac"></div>
                                <div class="priceCap osLight"><span>$2,350,000</span></div>
                                <div class="figType">FOR SALE</div>
                                <h3 class="osLight">Luxury Mansion</h3>
                                <div class="address">270 Micigan Ave, Buffalo, NY 14223, USA</div>
                                <ul class="rating">
                                    <li><span class="fa fa-star star-1"></span></li>
                                    <li><span class="fa fa-star star-2"></span></li>
                                    <li><span class="fa fa-star star-3"></span></li>
                                    <li><span class="fa fa-star star-4"></span></li>
                                    <li><span class="fa fa-star star-5"></span></li>
                                </ul>
                            </div>
                        </a>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <a href="single.html" class="propWidget-2">
                            <div class="fig">
                                <img src="/static/images/listings/176-franklin.jpg" alt="Sophisticated Residence">
                                <img class="blur" src="/static/images/listings/176-franklin.jpg" alt="Sophisticated Residence">
                                <div class="opac"></div>
                                <div class="priceCap osLight"><span>$1,340,000</span></div>
                                <div class="figType">FOR RENT</div>
                                <h3 class="osLight">Sophisticated Office</h3>
                                <div class="address">176 Franklin St, Buffalo, NY 14234, USA</div>
                                <ul class="rating">
                                    <li><span class="fa fa-star star-1"></span></li>
                                    <li><span class="fa fa-star star-2"></span></li>
                                    <li><span class="fa fa-star star-3"></span></li>
                                    <li><span class="fa fa-star star-4"></span></li>
                                    <li><span class="fa fa-star star-5"></span></li>
                                </ul>
                            </div>
                        </a>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <router-link to="/Single" class="propWidget-2">
                            <div class="fig">
                                <img src="/static/images/listings/Crosby-170-Franklin-Buffalo.jpg" alt="House With a Lovely Glass">
                                <img class="blur" src="/static/images/listings/Crosby-170-Franklin-Buffalo.jpg" alt="House With a Lovely Glass">
                                <div class="opac"></div>
                                <div class="priceCap osLight"><span>$1,930,000</span></div>
                                <div class="figType">FOR SALE</div>
                                <h3 class="osLight">House With a Lovely Glass</h3>
                                <div class="address">170 Franklin St, Buffalo, NY 14233, USA</div>
                                <ul class="rating">
                                    <li><span class="fa fa-star star-1"></span></li>
                                    <li><span class="fa fa-star star-2"></span></li>
                                    <li><span class="fa fa-star star-3"></span></li>
                                    <li><span class="fa fa-star star-4"></span></li>
                                    <li><span class="fa fa-star star-5"></span></li>
                                </ul>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <a href="single.html" class="propWidget-2">
                            <div class="fig">
                                <img src="/static/images/listings/Swa-Tower-290-Main-St-Buffalo.jpg" alt="Modern Residence in New York">
                                <img class="blur" src="/static/images/listings/Swa-Tower-290-Main-St-Buffalo.jpg" alt="Modern Residence in New York">
                                <div class="opac"></div>
                                <div class="priceCap osLight"><span>$1,750,000</span></div>
                                <div class="figType">FOR SALE</div>
                                <h3 class="osLight">Modern Residence in New York</h3>
                                <div class="address">290 Main St, Buffalo, NY 14233, USA</div>
                                <ul class="rating">
                                    <li><span class="fa fa-star star-1"></span></li>
                                    <li><span class="fa fa-star star-2"></span></li>
                                    <li><span class="fa fa-star star-3"></span></li>
                                    <li><span class="fa fa-star star-4"></span></li>
                                    <li><span class="fa fa-star-o star-5"></span></li>
                                </ul>
                            </div>
                        </a>
                    </div>
                </div>
           </div>
      </div>
        <!-- Footer -->

        <div class="home-footer">
            <div class="home-wrapper">
                <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        <div class="osLight footer-header">Company</div>
                        <ul class="footer-nav pb20">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Policies</a></li>
                            <li><a href="#">Terms & Privacy</a></li>
                        </ul>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        <div class="osLight footer-header">Discover</div>
                        <ul class="footer-nav pb20">
                            <li><a href="#">Become a Member</a></li>
                            <li><a href="#">Properties List</a></li>
                            <li><a href="#">Sign In</a></li>
                            <li><a href="#">Legal</a></li>
                            <li><a href="#">Components</a></li>
                            <li><a href="#">Markets</a></li>
                            <li><a href="#">Lists</a></li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="osLight footer-header">Get in Touch</div>
                        <ul class="footer-nav pb20">
                            <li class="footer-phone"><span class="fa fa-phone"></span> 716 479 6789</li>
                            <li class="footer-address osLight">
                                <p>605 Richmond Ave</p>
                                <p>Buffalo, NY 14222</p>
                                <p>United States</p>
                            </li>
                            <li><a href="#" class="btn btn-sm btn-icon btn-round btn-o btn-white"><span class="fa fa-facebook"></span></a> <a href="#" class="btn btn-sm btn-icon btn-round btn-o btn-white"><span class="fa fa-twitter"></span></a> <a href="#" class="btn btn-sm btn-icon btn-round btn-o btn-white"><span class="fa fa-google-plus"></span></a> <a href="#" class="btn btn-sm btn-icon btn-round btn-o btn-white"><span class="fa fa-linkedin"></span></a> </li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="osLight footer-header">Subscribe to Our Newsletter</div>
                        <form role="form">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email Address">
                            </div>
                            <div class="form-group">
                                <a href="#" class="btn btn-green btn-block">Subscribe</a>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="copyright">Thirdstor3y<br> &copy; 2017</div>
            </div>
        </div>

        <div class="modal fade" id="signin" role="dialog" aria-labelledby="signinLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="signinLabel">Sign In</h4>
                    </div>
                    <div class="modal-body">
                        <form role="form">
                            <div class="form-group">
                                <div class="btn-group-justified">
                                    <a href="explore.html" class="btn btn-lg btn-facebook"><span class="fa fa-facebook pull-left"></span>Sign In with Facebook</a>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="btn-group-justified">
                                    <a href="explore.html" class="btn btn-lg btn-google"><span class="fa fa-google-plus pull-left"></span>Sign In with Google</a>
                                </div>
                            </div>
                            <div class="signOr">OR</div>
                            <div class="form-group">
                                <input type="text" placeholder="Email Address" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="password" placeholder="Password" class="form-control">
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-xs-6">
                                        <div class="checkbox custom-checkbox"><label><input type="checkbox"><span class="fa fa-check"></span> Remember me</label></div>
                                    </div>
                                    <div class="col-xs-6 align-right">
                                        <p class="help-block"><a href="#" class="text-green">Forgot password?</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="btn-group-justified">
                                    <a href="explore.html" class="btn btn-lg btn-green">Sign In</a>
                                </div>
                            </div>
                            <p class="help-block">Don't have an account? <a href="#" class="modal-su text-green">Sign Up</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="signup" role="dialog" aria-labelledby="signupLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="signupLabel">Sign Up</h4>
                    </div>
                    <div class="modal-body">
                        <form role="form">
                            <div class="form-group">
                                <div class="btn-group-justified">
                                    <a href="explore.html" class="btn btn-lg btn-facebook"><span class="fa fa-facebook pull-left"></span>Sign Up with Facebook</a>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="btn-group-justified">
                                    <a href="explore.html" class="btn btn-lg btn-google"><span class="fa fa-google-plus pull-left"></span>Sign Up with Google</a>
                                </div>
                            </div>
                            <div class="signOr">OR</div>
                            <div class="form-group">
                                <input type="text" placeholder="First Name" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Last Name" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Email Address" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="password" placeholder="Password" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="password" placeholder="Confirm Password" class="form-control">
                            </div>
                            <div class="form-group">
                                <div class="btn-group-justified">
                                    <a href="explore.html" class="btn btn-lg btn-green">Sign Up</a>
                                </div>
                            </div>
                            <p class="help-block">Already a thirdstor3y member? <a href="#" class="modal-si text-green">Sign In</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  } ,
  mounted () {

    (function($) {
    "use strict";

    var options = {
            zoom : 14,
            mapTypeId : 'Styled',
            disableDefaultUI: true,
            mapTypeControlOptions : {
                mapTypeIds : [ 'Styled' ]
            },
            scrollwheel: false
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

    var markers = [];
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
        type : 'For Sale',
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
        title : 'Sophisticated Office',
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
        type : 'For Sale',
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
        type : 'For Sale',
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
        type : 'For Sale',
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

    var infobox = new InfoBox({
        disableAutoPan: false,
        maxWidth: 202,
        pixelOffset: new google.maps.Size(-101, -285),
        zIndex: null,
        boxStyle: {
            background: "url('images/infobox-bg.png') no-repeat",
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

    var addMarkers = function(props, map) {
        $.each(props, function(i,prop) {
            var latlng = new google.maps.LatLng(prop.position.lat,prop.position.lng);
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
                icon: new google.maps.MarkerImage(
                    'images/' + prop.markerIcon,
                    null,
                    null,
                    // new google.maps.Point(0,0),
                    null,
                    new google.maps.Size(36, 36)
                ),
                draggable: false,
                animation: google.maps.Animation.DROP,
            });
            var infoboxContent = '<div class="infoW">' +
                                    '<div class="propImg">' +
                                        '<img src="images/prop/' + prop.image + '">' +
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

    setTimeout(function() {
        $('body').removeClass('notransition');

        if ($('#home-map').length > 0) {
            map = new google.maps.Map(document.getElementById('home-map'), options);
            var styledMapType = new google.maps.StyledMapType(styles, {
                name : 'Styled'
            });

            map.mapTypes.set('Styled', styledMapType);
            map.setCenter(new google.maps.LatLng(40.6984237,-73.9890044));
            map.setZoom(14);

            addMarkers(props, map);
        }
    }, 300);

    if(!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)) {
        $('body').addClass('no-touch');
    }

     $('.dropdown-select li a').click(function() {
        if (!($(this).parent().hasClass('disabled'))) {
            $(this).prev().prop("checked", true);
            $(this).parent().siblings().removeClass('active');
            $(this).parent().addClass('active');
            $(this).parent().parent().siblings('.dropdown-toggle').children('.dropdown-label').html($(this).text());
        }
    });

    var cityOptions = {
        types : [ '(cities)' ]
    };
    var city = document.getElementById('city');
    var cityAuto = new google.maps.places.Autocomplete(city, cityOptions);

    $('#advanced').click(function() {
        $('.adv').toggleClass('hidden-xs');
    });

    $('.home-navHandler').click(function() {
        $('.home-nav').toggleClass('active');
        $(this).toggleClass('active');
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

    $('.modal-su').click(function() {
        $('#signin').modal('hide');
        $('#signup').modal('show');
    });

    $('.modal-si').click(function() {
        $('#signup').modal('hide');
        $('#signin').modal('show');
    });

    $('input, textarea').placeholder();

})(jQuery);

  }
}
</script>
<style scoped>
</style>
