<template>
	<div>

		  <div id="header">
            <div class="logo">
                <router-link to="/" >
                    <span class="fa fa-home marker"></span>
                    <span class="logoText">thirdstor3y</span>
                </router-link>
            </div>
            <a href="#" class="navHandler"><span class="fa fa-bars"></span></a>
            <div class="search">
                <span class="searchIcon icon-magnifier"></span>
                <input type="text" placeholder="Search for houses, apartments...">
            </div>
            <div class="headerUserWraper">
                <a href="#" class="userHandler dropdown-toggle" data-toggle="dropdown"><span class="icon-user"></span><span class="counter">5</span></a>
                <a href="#" class="headerUser dropdown-toggle" data-toggle="dropdown">
                    <img class="avatar headerAvatar pull-left" src="/static/images/avatar-1.png" alt="avatar">
                    <div class="userTop pull-left">
                        <span class="headerUserName">John Smith</span> <span class="fa fa-angle-down"></span>
                    </div>
                    <div class="clearfix"></div>
                </a>
                <div class="dropdown-menu pull-right userMenu" role="menu">
                    <div class="mobAvatar">
                        <img class="avatar mobAvatarImg" src="/static/images/avatar-1.png" alt="avatar">
                        <div class="mobAvatarName">John Smith</div>
                    </div>
                    <ul>
                        <li><a href="#"><span class="icon-settings"></span>Settings</a></li>
                        <li><a href="profile.html"><span class="icon-user"></span>Profile</a></li>
                        <li><a href="#"><span class="icon-bell"></span>Notifications <span class="badge pull-right bg-red">5</span></a></li>
                        <li class="divider"></li>
                        <li><a href="#"><span class="icon-power"></span>Logout</a></li>
                    </ul>
                </div>
            </div>
            <div class="headerNotifyWraper">
                <a href="#" class="headerNotify dropdown-toggle" data-toggle="dropdown">
                    <span class="notifyIcon icon-bell"></span>
                    <span class="counter">5</span>
                </a>
                <div class="dropdown-menu pull-right notifyMenu" role="menu">
                    <div class="notifyHeader">
                        <span>Notifications</span>
                        <a href="#" class="notifySettings icon-settings"></a>
                        <div class="clearfix"></div>
                    </div>
                    <ul class="notifyList">
                        <li>
                            <a href="#">
                                <img class="avatar pull-left" src="/static/images/avatar-1.png" alt="avatar">
                                <div class="pulse border-grey"></div>
                                <div class="notify pull-left">
                                    <div class="notifyName">Sed ut perspiciatis unde</div>
                                    <div class="notifyTime">5 minutes ago</div>
                                </div>
                                <div class="clearfix"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="notifyRound notifyRound-red fa fa-envelope-o"></div>
                                <div class="pulse border-red"></div>
                                <div class="notify pull-left">
                                    <div class="notifyName">Lorem Ipsum is simply dummy text</div>
                                    <div class="notifyTime">20 minutes ago</div>
                                </div>
                                <div class="clearfix"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="notifyRound notifyRound-yellow fa fa-heart-o"></div>
                                <div class="pulse border-yellow"></div>
                                <div class="notify pull-left">
                                    <div class="notifyName">It is a long established fact</div>
                                    <div class="notifyTime">2 hours ago</div>
                                </div>
                                <div class="clearfix"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="notifyRound notifyRound-magenta fa fa-paper-plane-o"></div>
                                <div class="pulse border-magenta"></div>
                                <div class="notify pull-left">
                                    <div class="notifyName">There are many variations</div>
                                    <div class="notifyTime">1 day ago</div>
                                </div>
                                <div class="clearfix"></div>
                            </a>
                        </li>
                    </ul>
                    <a href="#" class="notifyAll">See All</a>
                </div>
            </div>
            <a href="#" class="mapHandler"><span class="icon-map"></span></a>
            <div class="clearfix"></div>
        </div>

        <!-- Left Side Navigation -->

        <div id="leftSide">
            <nav class="leftNav scrollable">
                <div class="search">
                    <span class="searchIcon icon-magnifier"></span>
                    <input type="text" placeholder="Search for houses, apartments...">
                    <div class="clearfix"></div>
                </div>
                <ul>
                    <li><a href="explore.html"><span class="navIcon icon-compass"></span><span class="navLabel">Explore</span></a></li>
                    <li><a href="single.html"><span class="navIcon icon-home"></span><span class="navLabel">Single</span></a></li>
                    <li><a href="add.html"><span class="navIcon icon-plus"></span><span class="navLabel">New</span></a></li>
                    <li class="hasSub">
                        <a href="#"><span class="navIcon icon-drop"></span><span class="navLabel">Colors</span><span class="fa fa-angle-left arrowRight"></span><span class="badge bg-yellow">5</span></a>
                        <ul class="colors">
                            <li><a href="#">Red <span class="fa fa-circle-o c-red icon-right"></span></a></li>
                            <li><a href="#">Green <span class="fa fa-circle-o c-green icon-right"></span></a></li>
                            <li><a href="#">Blue <span class="fa fa-circle-o c-blue icon-right"></span></a></li>
                            <li><a href="#">Yellow <span class="fa fa-circle-o c-yellow icon-right"></span></a></li>
                            <li><a href="#">Magenta <span class="fa fa-circle-o c-magenta icon-right"></span></a></li>
                        </ul>
                    </li>
                    <li class="hasSub">
                        <a href="#"><span class="navIcon icon-layers"></span><span class="navLabel">Elements</span><span class="fa fa-angle-left arrowRight"></span></a>
                        <ul>
                            <li><a href="buttons.html">Buttons</a></li>
                            <li><a href="icons.html">Icons <span class="badge pull-right bg-yellow">841</span></a></li>
                            <li><a href="grid.html">Grid</a></li>
                            <li><a href="widgets.html">Widgets</a></li>
                            <li><a href="components.html">Components</a></li>
                            <li><a href="lists.html">Lists</a></li>
                            <li><a href="tables.html">Tables</a></li>
                            <li><a href="form.html">Form</a></li>
                        </ul>
                    </li>
                    <li class="hasSub">
                        <a href="#"><span class="navIcon icon-link"></span><span class="navLabel">Pages</span><span class="fa fa-angle-left arrowRight"></span></a>
                        <ul>
                            <li><a href="signin.html">Sign In</a></li>
                            <li><a href="signup.html">Sign Up</a></li>
                            <li><a href="profile.html">Profile</a></li>
                            <li><a href="index.html">Homepage Slideshow</a></li>
                            <li><a href="index-map.html">Homepage Map</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog-post.html">Blog Post</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div class="leftUserWraper dropup">
                <a href="#" class="avatarAction dropdown-toggle" data-toggle="dropdown">
                    <img class="avatar" src="/static/images/avatar-1.png" alt="avatar"><span class="counter">5</span>
                    <div class="userBottom pull-left">
                        <span class="bottomUserName">John Smith</span> <span class="fa fa-angle-up pull-right arrowUp"></span>
                    </div>
                    <div class="clearfix"></div>
                </a>
                <ul class="dropdown-menu" role="menu">
                    <li><a href="#"><span class="icon-settings"></span>Settings</a></li>
                    <li><a href="profile.html"><span class="icon-user"></span>Profile</a></li>
                    <li><a href="#"><span class="icon-bell"></span>Notifications <span class="badge pull-right bg-red">5</span></a></li>
                    <li class="divider"></li>
                    <li><a href="#"><span class="icon-power"></span>Logout</a></li>
                </ul>
            </div>
        </div>
        <div class="closeLeftSide"></div>

        <!-- Content -->

        <div id="wrapper">
            <div id="mapView">
                <div class="mapPlaceholder"><span class="fa fa-spin fa-spinner"></span> Loading map...</div>
            </div>
            <div id="content">
                <div class="filter">
                    <h1 class="osLight">Filter your results</h1>
                    <a href="#" class="handleFilter"><span class="icon-equalizer"></span></a>
                    <div class="clearfix"></div>
                    <form class="filterForm">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 formItem">
                                <div class="formField">
                                    <label>Property Type</label>
                                    <a href="#" data-toggle="dropdown" class="btn btn-gray dropdown-btn dropdown-toggle propTypeSelect">
                                        <span class="dropdown-label">All</span>
                                        <span class="fa fa-angle-down dsArrow"></span>
                                    </a>
                                    <ul class="dropdown-menu dropdown-select full" role="menu">
                                        <li class="active"><input type="radio" name="pType" checked="checked"><a href="#">All</a></li>
                                        <li><input type="radio" name="pType"><a href="">Rent</a></li>
                                        <li><input type="radio" name="pType"><a href="">Sale</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 formItem">
                                <div class="formField">
                                    <label>Price Range</label>
                                    <div class="slider priceSlider">
                                        <div class="sliderTooltip">
                                            <div class="stArrow"></div>
                                            <div class="stLabel"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 formItem">
                                <div class="formField">
                                    <label>Area Range</label>
                                    <div class="slider areaSlider">
                                        <div class="sliderTooltip">
                                            <div class="stArrow"></div>
                                            <div class="stLabel"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 formItem">
                                <div class="formField">
                                    <label>Bedrooms</label>
                                    <div class="volume">
                                        <a href="#" class="btn btn-gray btn-round-left"><span class="fa fa-angle-left"></span></a>
                                        <input type="text" class="form-control" readonly="readonly" value="1">
                                        <a href="#" class="btn btn-gray btn-round-right"><span class="fa fa-angle-right"></span></a>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 formItem">
                                <div class="formField">
                                    <label>Bathrooms</label>
                                    <div class="volume">
                                        <a href="#" class="btn btn-gray btn-round-left"><span class="fa fa-angle-left"></span></a>
                                        <input type="text" class="form-control" readonly="readonly" value="1">
                                        <a href="#" class="btn btn-gray btn-round-right"><span class="fa fa-angle-right"></span></a>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="resultsList">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <a href="single.html" class="card">
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
                                <div class="cardRating">
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star-o"></span>
                                    (146)
                                </div>
                                <ul class="cardFeat">
                                    <li><span class="fa fa-moon-o"></span> 3</li>
                                    <li><span class="icon-drop"></span> 2</li>
                                    <li><span class="icon-frame"></span> 3430 Sq Ft</li>
                                </ul>
                                <div class="clearfix"></div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <a href="single.html" class="card">
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
                                <div class="cardRating">
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    (123)
                                </div>
                                <ul class="cardFeat">
                                    <li><span class="fa fa-moon-o"></span> 2</li>
                                    <li><span class="icon-drop"></span> 2</li>
                                    <li><span class="icon-frame"></span> 4430 Sq Ft</li>
                                </ul>
                                <div class="clearfix"></div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <a href="single.html" class="card">
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
                                <div class="cardRating">
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    (120)
                                </div>
                                <ul class="cardFeat">
                                    <li><span class="fa fa-moon-o"></span> 2</li>
                                    <li><span class="icon-drop"></span> 3</li>
                                    <li><span class="icon-frame"></span> 2640 Sq Ft</li>
                                </ul>
                                <div class="clearfix"></div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <a href="single.html" class="card">
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
                                <div class="cardRating">
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star-o"></span>
                                    (170)
                                </div>
                                <ul class="cardFeat">
                                    <li><span class="fa fa-moon-o"></span> 3</li>
                                    <li><span class="icon-drop"></span> 2</li>
                                    <li><span class="icon-frame"></span> 2800 Sq Ft</li>
                                </ul>
                                <div class="clearfix"></div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <a href="single.html" class="card">
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
                                <div class="cardRating">
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star-o"></span>
                                    (257)
                                </div>
                                <ul class="cardFeat">
                                    <li><span class="fa fa-moon-o"></span> 2</li>
                                    <li><span class="icon-drop"></span> 2</li>
                                    <li><span class="icon-frame"></span> 2750 Sq Ft</li>
                                </ul>
                                <div class="clearfix"></div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <a href="single.html" class="card">
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
                                <div class="cardRating">
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    (146)
                                </div>
                                <ul class="cardFeat">
                                    <li><span class="fa fa-moon-o"></span> 3</li>
                                    <li><span class="icon-drop"></span> 2</li>
                                    <li><span class="icon-frame"></span> 3430 Sq Ft</li>
                                </ul>
                                <div class="clearfix"></div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <a href="single.html" class="card">
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
                                <div class="cardRating">
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star-o"></span>
                                    (123)
                                </div>
                                <ul class="cardFeat">
                                    <li><span class="fa fa-moon-o"></span> 2</li>
                                    <li><span class="icon-drop"></span> 2</li>
                                    <li><span class="icon-frame"></span> 4430 Sq Ft</li>
                                </ul>
                                <div class="clearfix"></div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <a href="single.html" class="card">
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
                                <div class="cardRating">
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star-o"></span>
                                    (120)
                                </div>
                                <ul class="cardFeat">
                                    <li><span class="fa fa-moon-o"></span> 2</li>
                                    <li><span class="icon-drop"></span> 3</li>
                                    <li><span class="icon-frame"></span> 2640 Sq Ft</li>
                                </ul>
                                <div class="clearfix"></div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <a href="single.html" class="card">
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
                                <div class="cardRating">
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star-o"></span>
                                    (170)
                                </div>
                                <ul class="cardFeat">
                                    <li><span class="fa fa-moon-o"></span> 3</li>
                                    <li><span class="icon-drop"></span> 2</li>
                                    <li><span class="icon-frame"></span> 2800 Sq Ft</li>
                                </ul>
                                <div class="clearfix"></div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <a href="single.html" class="card">
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
                                <div class="cardRating">
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star-o"></span>
                                    (257)
                                </div>
                                <ul class="cardFeat">
                                    <li><span class="fa fa-moon-o"></span> 2</li>
                                    <li><span class="icon-drop"></span> 2</li>
                                    <li><span class="icon-frame"></span> 2750 Sq Ft</li>
                                </ul>
                                <div class="clearfix"></div>
                            </a>
                        </div>
                    </div>
                    <ul class="pagination">
                        <li class="disabled"><a href="#"><span class="fa fa-angle-left"></span></a></li>
                        <li class="active"><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#"><span class="fa fa-angle-right"></span></a></li>
                    </ul>
                </div>
            </div>
            <div class="clearfix"></div>
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
            zoom : 4,
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
	"title": "463 Electric Avenue",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,729,200",
	"address": "463 Electric Avenue, Rochester, NY 14613",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1906852,
		"lng": -77.64705500000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "3255 Dolphsburg Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$349,000",
	"address": "3255 Dolphsburg Road, Montour Falls, NY 14865",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.3916759,
		"lng": -76.835285
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "36 Railroad Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$499,000",
	"address": "36 Railroad Ave, Frewsburg, NY 14738",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.054703,
		"lng": -79.166563
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "3662 South Park Avenue",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "3662 South Park Avenue, Buffalo, NY 14219",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.79948,
		"lng": -78.82360899999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "3261 McKinley Parkway",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "3261 McKinley Parkway, Hamburg, NY 14219",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.7966868,
		"lng": -78.81091939999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "76 Industrial Dr",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "76 Industrial Dr, North Tonawanda, NY 14120",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.047701,
		"lng": -78.88705199999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "7892 Oak Orchard Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "7892 Oak Orchard Rd, Batavia, NY 14020",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0314422,
		"lng": -78.1922864
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "210 Ellicott St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$975,000",
	"address": "210 Ellicott St, Buffalo, NY 14203",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8843319,
		"lng": -78.87275069999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "8800 South Main Street",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "8800 South Main Street, Eden, NY 14057",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.646375,
		"lng": -78.90329500000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "138 Canal St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$130,000",
	"address": "138 Canal St, Rochester, NY 14608",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1559327,
		"lng": -77.62402550000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "26 Allen St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,300,000",
	"address": "26 Allen St, Buffalo, NY 14202",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8992072,
		"lng": -78.87096129999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "9 Union St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,195,000",
	"address": "9 Union St, Geneva, NY 14456",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8681667,
		"lng": -76.98717540000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2792 Eggert Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$150,000",
	"address": "2792 Eggert Rd, Tonawanda, NY 14150",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.99053230000001,
		"lng": -78.84004419999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "220 Allen St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$399,000",
	"address": "220 Allen St, Buffalo, NY 14201",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8993105,
		"lng": -78.87828819999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1155 Ridge Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$750,000",
	"address": "1155 Ridge Rd, Webster, NY 14580",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.2099712,
		"lng": -77.44370200000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "250 Lucius Gordon Dr",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$990,000",
	"address": "250 Lucius Gordon Dr, West Henrietta, NY 14586",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0685777,
		"lng": -77.68712049999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "846 Main Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$225,000",
	"address": "846 Main Road, Corfu, NY 14036",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.99391,
		"lng": -78.42423300000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "579-585 North St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$429,000",
	"address": "579-585 North St, Rochester, NY 14605",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1687243,
		"lng": -77.59903129999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "4756 Lake Rd S",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$2,499,500",
	"address": "4756 Lake Rd S, Brockport, NY 14420",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.19935,
		"lng": -77.94189699999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "105 Franklin St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$99,000",
	"address": "105 Franklin St, Dansville, NY 14437",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.562689,
		"lng": -77.70875590000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "276-278 W Main St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$349,900",
	"address": "276-278 W Main St, Victor, NY 14564",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9872327,
		"lng": -77.4186871
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "20 Amherst St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$275,000",
	"address": "20 Amherst St, Rochester, NY 14607",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1446833,
		"lng": -77.59146420000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "5158 Rt-5",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$399,000",
	"address": "5158 Rt-5, Batavia, NY 14020",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.99074359999999,
		"lng": -78.13983229999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "4565 Culver Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$650,000",
	"address": "4565 Culver Rd, Rochester, NY 14622",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.2322928,
		"lng": -77.54486880000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "517 Pine Street",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,199,346",
	"address": "517 Pine Street, South Dayton, NY 14138",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.3645319,
		"lng": -79.05775899999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1519 N Clinton Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$150,000",
	"address": "1519 N Clinton Ave, Rochester, NY 14621",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.187871,
		"lng": -77.613877
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "18 Kenilworth Terrace",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$119,900",
	"address": "18 Kenilworth Terrace, Rochester, NY 14605",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.161561,
		"lng": -77.592667
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "195 W Main St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$395,000",
	"address": "195 W Main St, Springville, NY 14141",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.5092226,
		"lng": -78.67455189999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "45 High Tech Dr",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$580,000",
	"address": "45 High Tech Dr, Rush, NY 14543",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0141268,
		"lng": -77.66408239999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1675 Lake Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$274,900",
	"address": "1675 Lake Rd, Hamlin, NY 14464",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.2965682,
		"lng": -77.92103020000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "401 Northland Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$359,000",
	"address": "401 Northland Ave, Buffalo, NY 14208",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9189419,
		"lng": -78.84455049999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "6943 Erie Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$475,000",
	"address": "6943 Erie Road, Derby, NY 14047",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.69713790000001,
		"lng": -78.98889810000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1330 Niagara Street",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$395,000",
	"address": "1330 Niagara Street, Buffalo, NY 14213",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9202833,
		"lng": -78.89901170000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "340 Jefferson Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$790,000",
	"address": "340 Jefferson Rd, Rochester, NY 14623",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.091697,
		"lng": -77.64732200000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "3878 Delaware Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$299,999",
	"address": "3878 Delaware Ave, Kenmore, NY 14217",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9898082,
		"lng": -78.87396189999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "6109 W Lake Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$299,900",
	"address": "6109 W Lake Rd, Conesus, NY 14435",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.7238901,
		"lng": -77.71776829999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "5842 - 5860 Snyder Drive",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$2,625,488",
	"address": "5842 - 5860 Snyder Drive, Lockport, NY 14094",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1382617,
		"lng": -78.69405039999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "15 Pleasant St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$224,900",
	"address": "15 Pleasant St, Hornell, NY 14843",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.321619,
		"lng": -77.66285719999996
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1189 Ogden Parma Town Line Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$659,000",
	"address": "1189 Ogden Parma Town Line Rd, Spencerport, NY 14559",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.2056706,
		"lng": -77.86605309999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "5364 Route 242 Hwy",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$224,000",
	"address": "5364 Route 242 Hwy, Ellicottville, NY 14731",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.320745,
		"lng": -78.60794399999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1025 High Tech Dr",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$279,000",
	"address": "1025 High Tech Dr, Rush, NY 14543",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0154647,
		"lng": -77.66302510000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "34 May St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$339,000",
	"address": "34 May St, Webster, NY 14580",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.2172551,
		"lng": -77.4285122
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "3401 Murphy Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$189,000",
	"address": "3401 Murphy Rd, Newfane, NY 14108",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.249662,
		"lng": -78.66468499999996
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "332 Jefferson Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$825,000",
	"address": "332 Jefferson Rd, Rochester, NY 14623",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0918385,
		"lng": -77.64783369999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2091 E. Henrietta Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$600,000",
	"address": "2091 E. Henrietta Rd, Rochester, NY 14623",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0776449,
		"lng": -77.6062225
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "201 East Main St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$150,000",
	"address": "201 East Main St, Palmyra, NY 14522",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.063872,
		"lng": -77.2311171
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1947 State Route 332",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$265,000",
	"address": "1947 State Route 332, Canandaigua, NY 14424",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.93680639999999,
		"lng": -77.3228906
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "402 North Main Street",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$6,694,915",
	"address": "402 North Main Street, Elmira, NY 14901",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.0920414,
		"lng": -76.80871409999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2446 Ridge Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$224,900",
	"address": "2446 Ridge Rd, Ontario, NY 14519",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.21919,
		"lng": -77.26424199999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "8704 Lake Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$605,000",
	"address": "8704 Lake Rd, Barker, NY 14012",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.343602,
		"lng": -78.54996499999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1229 Mayberry Pl",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$53,000",
	"address": "1229 Mayberry Pl, Macedon, NY 14502",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1245167,
		"lng": -77.31982719999996
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1638 Saint Paul St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$269,000",
	"address": "1638 Saint Paul St, Rochester, NY 14621",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1861036,
		"lng": -77.62273249999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "3144 Orchard Park Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,100,000",
	"address": "3144 Orchard Park Road, West Seneca, NY 14224",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.799225,
		"lng": -78.75259199999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1195 Route 5 and 20",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$79,900",
	"address": "1195 Route 5 and 20, Silver Creek, NY 14136",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.5526359,
		"lng": -79.14087660000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1195 Rt 20",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$69,900",
	"address": "1195 Rt 20, Silver Creek, NY 14136",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.5526359,
		"lng": -79.14087660000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "8742 Buffalo Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$385,000",
	"address": "8742 Buffalo Ave, Niagara Falls, NY 14304",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0780205,
		"lng": -78.96273639999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "0 Chesapeake Landing",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$199,000",
	"address": "0 Chesapeake Landing, West Henrietta, NY 14586",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0719725,
		"lng": -77.68900910000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "7265 Route 54",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$3,950,000",
	"address": "7265 Route 54, Bath, NY 14810",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.354495,
		"lng": -77.30599159999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "723 Mineral Springs Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "723 Mineral Springs Rd, West Seneca, NY 14224",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8645284,
		"lng": -78.78759560000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "35 N Dansville St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$249,900",
	"address": "35 N Dansville St, Cohocton, NY 14826",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.5086317,
		"lng": -77.5112512
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "741 Kenmore Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$935,000",
	"address": "741 Kenmore Ave, Buffalo, NY 14223",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.95881910000001,
		"lng": -78.84523159999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "3080 Amsdell Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$975,000",
	"address": "3080 Amsdell Rd, Hamburg, NY 14075",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.7359375,
		"lng": -78.8778231
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1520 Military Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$895,000",
	"address": "1520 Military Road, Buffalo, NY 14217",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9784206,
		"lng": -78.88732679999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "860-880 Maple St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "860-880 Maple St, Rochester, NY 14611",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1562103,
		"lng": -77.64792419999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "Windward Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "Windward Road, Orchard Park, NY 14127",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.7927382,
		"lng": -78.768599
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "596 Ontario",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$229,900",
	"address": "596 Ontario, Buffalo, NY 14207",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9594174,
		"lng": -78.89515519999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2366 Niagara Falls Blvd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$249,900",
	"address": "2366 Niagara Falls Blvd, Niagara Falls, NY 14304",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0968936,
		"lng": -78.9191457
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "66 N Main St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$550,000",
	"address": "66 N Main St, Fairport, NY 14450",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1037145,
		"lng": -77.4414147
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2 Florence Street",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$315,000",
	"address": "2 Florence Street, West Seneca, NY 14224",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.839312,
		"lng": -78.762585
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "10 Lancaster Pky",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$629,000",
	"address": "10 Lancaster Pky, Lancaster, NY 14086",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9265665,
		"lng": -78.61865460000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "195 Norris Dr",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$285,000",
	"address": "195 Norris Dr, Rochester, NY 14610",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1441405,
		"lng": -77.56143600000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "364-370 East Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "364-370 East Ave, Rochester, NY 14604",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1552425,
		"lng": -77.59448989999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "Collett Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$199,000",
	"address": "Collett Rd, Farmington, NY 14425",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9852508,
		"lng": -77.3472132
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "4430 Route 5 &amp; 20",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$299,000",
	"address": "4430 Route 5 &amp; 20, Canandaigua, NY 14424",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8750004,
		"lng": -77.30207530000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "4410 Route 5 &amp; 20",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$350,000",
	"address": "4410 Route 5 &amp; 20, Canandaigua, NY 14424",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8750004,
		"lng": -77.30207530000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "146 Walnut Street",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$70,000",
	"address": "146 Walnut Street, Corning, NY 14830",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.142127,
		"lng": -77.05635589999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "858-931 West Ridge Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$375,000 - $900,000",
	"address": "858-931 West Ridge Road, Rochester, NY 14615",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.2031457,
		"lng": -77.65123699999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "98 W Main St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$289,000",
	"address": "98 W Main St, Macedon, NY 14502",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.069218,
		"lng": -77.299891
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "136 Campbell St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$162,000",
	"address": "136 Campbell St, Rochester, NY 14611",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.157587,
		"lng": -77.63097099999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "122 Ravine Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$39,900",
	"address": "122 Ravine Ave, Rochester, NY 14613",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1752899,
		"lng": -77.632385
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "154 Emerson St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$51,900",
	"address": "154 Emerson St, Rochester, NY 14613",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.17375639999999,
		"lng": -77.63367219999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "127 Emerson St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$52,900",
	"address": "127 Emerson St, Rochester, NY 14613",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.173391,
		"lng": -77.63289499999996
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "11 Delaware Street",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,575,000",
	"address": "11 Delaware Street, Tonawanda, NY 14150",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0190426,
		"lng": -78.87437360000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2000 Kensington Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$8,547,789",
	"address": "2000 Kensington Ave, Buffalo, NY 14226",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9499334,
		"lng": -78.78516379999996
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "822 Dewey Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$250,000",
	"address": "822 Dewey Ave, Rochester, NY 14613",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1804028,
		"lng": -77.6391587
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "475 Ludwig Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$4,200,000",
	"address": "475 Ludwig Ave, Buffalo, NY 14227",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8988723,
		"lng": -78.76575579999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "517 George Urban Blvd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$155,000",
	"address": "517 George Urban Blvd, Buffalo, NY 14225",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.918638,
		"lng": -78.770939
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "110 Clifton Springs Professional Park",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,716,000",
	"address": "110 Clifton Springs Professional Park, Clifton Springs, NY 14432",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.967783,
		"lng": -77.13866200000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "136 N. Ogden St.",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$89,900",
	"address": "136 N. Ogden St., Buffalo, NY 14206",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8884819,
		"lng": -78.80272489999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "3 Beartown Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$599,000",
	"address": "3 Beartown Rd, Painted Post, NY 14870",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.146194,
		"lng": -77.1116629
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "104-110 Lake Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$299,000",
	"address": "104-110 Lake Ave, Rochester, NY 14608",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1666132,
		"lng": -77.62446119999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "156 N Genesee St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$995,000",
	"address": "156 N Genesee St, Geneva, NY 14456",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8810232,
		"lng": -76.98376400000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "400 Jay Scutti Blvd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$15,100,000",
	"address": "400 Jay Scutti Blvd, Henrietta, NY 14623",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0910816,
		"lng": -77.63096680000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2561 Lac De Ville Blvd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$2,900,000",
	"address": "2561 Lac De Ville Blvd, Rochester, NY 14618",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1187721,
		"lng": -77.5927964
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "6010 Unionville Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$150,000",
	"address": "6010 Unionville Rd, Bath, NY 14810",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.302499,
		"lng": -77.35868900000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "9890 Main St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$499,900",
	"address": "9890 Main St, Clarence, NY 14031",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9758044,
		"lng": -78.6209422
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "42 Lake Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$300,000",
	"address": "42 Lake Ave, Silver Creek, NY 14136",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.5489907,
		"lng": -79.16996970000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "7463 NY 5",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,401,846",
	"address": "7463 NY 5, Bloomfield, NY 14469",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8974419,
		"lng": -77.44470460000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "8079 S Main St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,339,323",
	"address": "8079 S Main St, Springwater, NY 14560",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.63226100000001,
		"lng": -77.5970653
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "756 Dick Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$309,900",
	"address": "756 Dick Road, Cheektowaga, NY 14225",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9231539,
		"lng": -78.74121530000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "715 Sycamore",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$99,900",
	"address": "715 Sycamore, Buffalo, NY 14212",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.895656,
		"lng": -78.84475399999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1229 Bay Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$399,000",
	"address": "1229 Bay Rd, Webster, NY 14580",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1914623,
		"lng": -77.50569740000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "7283 W Henrietta Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$625,000",
	"address": "7283 W Henrietta Rd, Rush, NY 14543",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0024214,
		"lng": -77.66723819999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2771 Scottsville Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "2771 Scottsville Rd, Scottsville, NY 14546",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.03745290000001,
		"lng": -77.73691930000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "175 W. Church St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$599,000",
	"address": "175 W. Church St, Rochester, NY 14450",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.098222,
		"lng": -77.454995
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "123 East Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$160,000",
	"address": "123 East Ave, Lockport, NY 14094",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1722838,
		"lng": -78.6844269
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "899 FRENCH RD.",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$399,900",
	"address": "899 FRENCH RD., Cheektowaga, NY 14227",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8674755,
		"lng": -78.7172079
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2419 Avon-Geneseo Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,500,000",
	"address": "2419 Avon-Geneseo Road, Avon, NY 14414",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.884242,
		"lng": -77.76317699999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "8322-8336 Lewiston Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$8,285,000",
	"address": "8322-8336 Lewiston Road, Batavia, NY 14020",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.00932479999999,
		"lng": -78.2115655
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1415 N Clinton Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "1415 N Clinton Ave, Rochester, NY 14621",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.185497,
		"lng": -77.61519599999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1525 N Clinton Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$225,000",
	"address": "1525 N Clinton Ave, Rochester, NY 14621",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1880308,
		"lng": -77.61383690000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1375-1377 N Clinton Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$79,900",
	"address": "1375-1377 N Clinton Ave, Rochester, NY 14621",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.18498599999999,
		"lng": -77.61414000000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1581-1585 Dewey Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$495,000",
	"address": "1581-1585 Dewey Ave, Rochester, NY 14615",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.196018,
		"lng": -77.63903499999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "360 W Ridge Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$449,000",
	"address": "360 W Ridge Rd, Rochester, NY 14615",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1998559,
		"lng": -77.63653399999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "55 Huntington Park",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$59,900",
	"address": "55 Huntington Park, Rochester, NY 14621",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1750622,
		"lng": -77.62328680000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2155-2171 Allen St. Ext",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,850,000",
	"address": "2155-2171 Allen St. Ext, Falconer, NY 14733",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.1104032,
		"lng": -79.20188159999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "400 Jay Scutti Blvd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$2,200,000",
	"address": "400 Jay Scutti Blvd, Rochester, NY 14623",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0910928,
		"lng": -77.6308967
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "127 Skillen Street",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,773,650",
	"address": "127 Skillen Street, Buffalo, NY 14207",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.959363,
		"lng": -78.89441799999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "203 Elm St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$12,900",
	"address": "203 Elm St, Salamanca, NY 14779",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.16099699999999,
		"lng": -78.70659699999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "121 Emerson St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$53,900",
	"address": "121 Emerson St, Rochester, NY 14613",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.173389,
		"lng": -77.632745
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "6301 Transit Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,262,480",
	"address": "6301 Transit Rd, Depew, NY 14043",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.926877,
		"lng": -78.69596279999996
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1186-1192 Ridge Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "1186-1192 Ridge Road, Webster, NY 14580",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.2111374,
		"lng": -77.44011180000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "211 Second Street West",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$950,000",
	"address": "211 Second Street West, Elmira, NY 14901",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.0909406,
		"lng": -76.80999859999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1002 State Route 5 &amp; 20",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,350,000",
	"address": "1002 State Route 5 &amp; 20, Geneva, NY 14456",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8579379,
		"lng": -77.0224437
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "6215 State Route 96",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,100,000",
	"address": "6215 State Route 96, Farmington, NY 14425",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9739321,
		"lng": -77.3655205
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "530 South Main Street",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$600,000",
	"address": "530 South Main Street, Warsaw, NY 14569",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.7265096,
		"lng": -78.13248929999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2852 Transit Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,400,000",
	"address": "2852 Transit Rd, West Seneca, NY 14224",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.845132,
		"lng": -78.69822299999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1480 Dewey Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$189,900",
	"address": "1480 Dewey Ave, Rochester, NY 14615",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1940669,
		"lng": -77.63853799999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "7464 W Henrietta Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$225,000",
	"address": "7464 W Henrietta Road, Rush, NY 14543",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9968803,
		"lng": -77.66758600000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "385 Waterloo Geneva Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$279,000",
	"address": "385 Waterloo Geneva Rd, Waterloo, NY 13165",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8825873,
		"lng": -76.93884249999996
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2285 S Union St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$600,000",
	"address": "2285 S Union St, Spencerport, NY 14559",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1801644,
		"lng": -77.8047967
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "0 Route 31",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$175,000",
	"address": "0 Route 31, Albion, NY 14411",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.2410027,
		"lng": -78.19392490000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1717 Military Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$79,000",
	"address": "1717 Military Rd, Tonawanda, NY 14217",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.98403090000001,
		"lng": -78.88462429999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2625 Bedell Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$249,000",
	"address": "2625 Bedell Rd, Grand Island, NY 14072",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0363643,
		"lng": -78.99055599999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "Stony Point &amp; Ransom Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$450,000",
	"address": "Stony Point &amp; Ransom Rd, Grand Island, NY 14072",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0384992,
		"lng": -78.9463629
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "5100 Big Tree Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$375,000",
	"address": "5100 Big Tree Rd, Orchard Park, NY 14127",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.76772589999999,
		"lng": -78.79355650000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "4950 W Ridge Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$274,900",
	"address": "4950 W Ridge Rd, Spencerport, NY 14559",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.2205,
		"lng": -77.788186
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "647 Englewood Avenue",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$248,000",
	"address": "647 Englewood Avenue, Tonawanda, NY 14223",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9644652,
		"lng": -78.84276569999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1439 Sheridan Drive",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$248,000",
	"address": "1439 Sheridan Drive, Tonawanda, NY 14217",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.980823,
		"lng": -78.88084249999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "3166 State St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$395,000",
	"address": "3166 State St, Caledonia, NY 14423",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9725352,
		"lng": -77.8523945
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2637 Main St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$285,000",
	"address": "2637 Main St, Buffalo, NY 14214",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9390557,
		"lng": -78.83854380000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1426 W River Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$395,000",
	"address": "1426 W River Rd, Waterloo, NY 13165",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.89802419999999,
		"lng": -76.87317589999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "7 Lawrence Street",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$449,000",
	"address": "7 Lawrence Street, Rochester, NY 14607",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1557389,
		"lng": -77.595572
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2617 Elmwood Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$235,000",
	"address": "2617 Elmwood Ave, Kenmore, NY 14217",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9687186,
		"lng": -78.8782263
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1311 Abbott Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "1311 Abbott Road, Lackawanna, NY 14218",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.82899099999999,
		"lng": -78.80501600000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "6700 S Transit Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,200,000",
	"address": "6700 S Transit Road, Lockport, NY 14094",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1025958,
		"lng": -78.696889
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "160 Densmore Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$299,000",
	"address": "160 Densmore Rd, Irondequoit, NY 14609",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.191789,
		"lng": -77.54848500000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "9519 Foster Wheeler Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$2,160,586",
	"address": "9519 Foster Wheeler Rd, Dansville, NY 14437",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.5670262,
		"lng": -77.7147617
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "437 Lyell Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,785,714",
	"address": "437 Lyell Ave, Rochester, NY 14606",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1643562,
		"lng": -77.63803080000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "5726 Bowmiller Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$4,900,000",
	"address": "5726 Bowmiller Rd, Lockport, NY 14094",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.14543099999999,
		"lng": -78.65817600000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "100 Centre Dr",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$4,950,000",
	"address": "100 Centre Dr, Orchard Park, NY 14127",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.773234,
		"lng": -78.770645
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "889 Broadway",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$99,000",
	"address": "889 Broadway, Buffalo, NY 14212",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8921291,
		"lng": -78.8414689
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "45 N Main St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$220,000",
	"address": "45 N Main St, Wellsville, NY 14895",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.12034999999999,
		"lng": -77.94877400000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2493 Corning Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$160,000",
	"address": "2493 Corning Rd, Elmira, NY 14903",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.150234,
		"lng": -76.83428329999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1596 Route 414",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$379,900",
	"address": "1596 Route 414, Watkins Glen, NY 14891",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.3148028,
		"lng": -76.9282121
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "29 N. Franklin st",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$369,000",
	"address": "29 N. Franklin st, Watkins Glen, NY 14891",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.38251169999999,
		"lng": -76.87489069999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "477 Main St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$999,000",
	"address": "477 Main St, Buffalo, NY 14203",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.886861,
		"lng": -78.87365699999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "305 Buffalo Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,000,000",
	"address": "305 Buffalo Ave, Niagara Falls, NY 14303",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.08223,
		"lng": -79.05967299999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1200 Empire Blvd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$499,000",
	"address": "1200 Empire Blvd, Rochester, NY 14609",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.176118,
		"lng": -77.52400599999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "645 Persons St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$749,000",
	"address": "645 Persons St, East Aurora, NY 14052",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.762576,
		"lng": -78.61005899999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "3506 Hyde Park Blvd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$249,000",
	"address": "3506 Hyde Park Blvd, Niagara Falls, NY 14305",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.11942699999999,
		"lng": -79.03535399999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "114-118 S Union St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$625,000",
	"address": "114-118 S Union St, Rochester, NY 14607",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1506353,
		"lng": -77.5991649
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "69 Seneca Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,375,000",
	"address": "69 Seneca Ave, Rochester, NY 14621",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1880889,
		"lng": -77.60909950000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "502 Main St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$995,000",
	"address": "502 Main St, Niagara Falls, NY 14301",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0914697,
		"lng": -79.06027240000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "745 Center Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$369,000",
	"address": "745 Center Rd, West Seneca, NY 14224",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8391704,
		"lng": -78.75490049999996
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "276 Oliver St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$128,600",
	"address": "276 Oliver St, North Tonawanda, NY 14120",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0300716,
		"lng": -78.8758641
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "329 N Sanford Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$329,900",
	"address": "329 N Sanford Rd, Churchville, NY 14428",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.091851,
		"lng": -77.89396669999996
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2711 South Park",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$199,900",
	"address": "2711 South Park, Lackawanna, NY 14218",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8262147,
		"lng": -78.82425569999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "3180 Niagara Falls Blvd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$2,103,500",
	"address": "3180 Niagara Falls Blvd, Amherst, NY 14228",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.040816,
		"lng": -78.824926
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "4158 Lakeville Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$2,011,440",
	"address": "4158 Lakeville Rd, Geneseo, NY 14454",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.7949521,
		"lng": -77.79539119999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "6020 Porter Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,916,080",
	"address": "6020 Porter Rd, Niagara Falls, NY 14304",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1080869,
		"lng": -78.9945305
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "13700 Tri County Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "13700 Tri County Rd, Chaffee, NY 14030",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.5492235,
		"lng": -78.4770694
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2135 Co Rd 8",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,100,000",
	"address": "2135 Co Rd 8, Canandaigua, NY 14424",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.932088,
		"lng": -77.30635000000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "913 W State St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$3,000,000",
	"address": "913 W State St, Olean, NY 14760",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.0771902,
		"lng": -78.44025190000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2350 Brighton Henrietta Twnln Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$650,000",
	"address": "2350 Brighton Henrietta Twnln Rd, Rochester, NY 14623",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.095071,
		"lng": -77.61421100000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "975 Abbott Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$945,000",
	"address": "975 Abbott Rd, Buffalo, NY 14220",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.83781889999999,
		"lng": -78.80801639999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1880 Blossom Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$995,000",
	"address": "1880 Blossom Road, Rochester, NY 14625",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1468784,
		"lng": -77.51252
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1563 Hertel Avenue",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,250,000",
	"address": "1563 Hertel Avenue, Buffalo, NY 14216",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9473879,
		"lng": -78.850101
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "54 Gates Cir",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$775,000",
	"address": "54 Gates Cir, Buffalo, NY 14209",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9212373,
		"lng": -78.8670884
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "875 Harlem Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,402,000",
	"address": "875 Harlem Rd, West Seneca, NY 14224",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8669439,
		"lng": -78.78662459999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "880 Millersport Hwy",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$650,000",
	"address": "880 Millersport Hwy, Amherst, NY 14226",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9774878,
		"lng": -78.80119150000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "916 Kensington Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$50,000",
	"address": "916 Kensington Ave, Buffalo, NY 14215",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9355435,
		"lng": -78.82013669999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1969 Eddy Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$675,000",
	"address": "1969 Eddy Road, Walworth, NY 14568",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.116891,
		"lng": -77.28438
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2020 Allen Street Ext",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$380,000",
	"address": "2020 Allen Street Ext, Falconer, NY 14733",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.1138379,
		"lng": -79.19043049999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2270 Bowen Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$119,900",
	"address": "2270 Bowen Road, Elma, NY 14059",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.83282,
		"lng": -78.640015
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "515 6th St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,900,000",
	"address": "515 6th St, Niagara Falls, NY 14301",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0916446,
		"lng": -79.05508859999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "3445 Niagara Falls Blvd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$415,000",
	"address": "3445 Niagara Falls Blvd, North Tonawanda, NY 14120",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0721976,
		"lng": -78.85505699999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "844 Dewey Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$185,000",
	"address": "844 Dewey Ave, Rochester, NY 14613",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1807847,
		"lng": -77.6393941
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1143 E Union St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$89,900",
	"address": "1143 E Union St, Newark, NY 14513",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0457394,
		"lng": -77.07496939999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "50 Victor Heights Pky",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$495,000",
	"address": "50 Victor Heights Pky, Victor, NY 14564",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9950629,
		"lng": -77.44700920000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "4670 W Ridge Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$650,000",
	"address": "4670 W Ridge Rd, Spencerport, NY 14559",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.2195413,
		"lng": -77.7599712
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "71 Lock St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$175,000",
	"address": "71 Lock St, Lockport, NY 14094",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.173116,
		"lng": -78.69262400000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1891 Dewey Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$798,000",
	"address": "1891 Dewey Ave, Rochester, NY 14615",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.202403,
		"lng": -77.63914349999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "9085 NYS Route 414",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$660,000",
	"address": "9085 NYS Route 414, Lodi, NY 14860",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.584063,
		"lng": -76.85289390000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "265 State Route 14",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,135,000",
	"address": "265 State Route 14, Lyons, NY 14489",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.021877,
		"lng": -76.98854599999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "7 North Street",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "7 North Street, Canandaigua, NY 14424",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.903672,
		"lng": -77.29431299999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "4799 W Henrietta Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$924,995",
	"address": "4799 W Henrietta Rd, West Henrietta, NY 14467",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.058039,
		"lng": -77.65430200000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "220 Lake St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "220 Lake St, Penn Yan, NY 14527",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.6555281,
		"lng": -77.05660060000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "565 Main Street",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$895,000",
	"address": "565 Main Street, Arcade, NY 14009",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.534155,
		"lng": -78.43793
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "21 Goodway Drive",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "21 Goodway Drive, Rochester, NY 14623",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0915256,
		"lng": -77.58038420000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "245 Vulcan St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$299,000",
	"address": "245 Vulcan St, Buffalo, NY 14207",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9613743,
		"lng": -78.90532630000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "503 Park Place",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "503 Park Place, Elmira, NY 14901",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.0927393,
		"lng": -76.81059499999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "175 Sully's Trail",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "175 Sully's Trail, Pittsford, NY 14534",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0555875,
		"lng": -77.4695954
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "108 Lincoln Pky",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$459,000",
	"address": "108 Lincoln Pky, East Rochester, NY 14445",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.117006,
		"lng": -77.480366
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "9094 Erie Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$495,000",
	"address": "9094 Erie Road, Angola, NY 14006",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.6374965,
		"lng": -79.04929520000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "385 Middle Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$359,900",
	"address": "385 Middle Rd, Henrietta, NY 14467",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0572007,
		"lng": -77.64076769999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "607 Whitney Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$369,000",
	"address": "607 Whitney Rd, Fairport, NY 14450",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1083326,
		"lng": -77.45945
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "313 Grant Street",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$530,000",
	"address": "313 Grant Street, Buffalo, NY 14213",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9224244,
		"lng": -78.88979689999996
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2374 State Route 414",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$499,000",
	"address": "2374 State Route 414, Watkins Glen, NY 14891",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.34883809999999,
		"lng": -76.87538840000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "324 W State St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$137,900",
	"address": "324 W State St, Olean, NY 14760",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.07764710000001,
		"lng": -78.43370670000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "7183 State Route 54",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$725,000",
	"address": "7183 State Route 54, Bath, NY 14810",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.35084459999999,
		"lng": -77.30776679999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "803 County Road 4",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$650,000",
	"address": "803 County Road 4, Geneva, NY 14456",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.877228,
		"lng": -77.01170300000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "68-70 Main St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$109,900",
	"address": "68-70 Main St, Portville, NY 14770",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.034866,
		"lng": -78.33817399999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2 South Main Street",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$179,000",
	"address": "2 South Main Street, Portville, NY 14770",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.0383321,
		"lng": -78.34031570000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "125 S Union St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$699,000",
	"address": "125 S Union St, Olean, NY 14760",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.0767828,
		"lng": -78.42942340000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "55 Fessenden St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,100,000",
	"address": "55 Fessenden St, Rochester, NY 14611",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1436619,
		"lng": -77.6615061
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "51 W Main St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$249,000",
	"address": "51 W Main St, Allegany, NY 14706",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.0909815,
		"lng": -78.49611729999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "8940 Allegany Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$49,995",
	"address": "8940 Allegany Rd, Corfu, NY 14036",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.980535,
		"lng": -78.40656189999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "140 East Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,599,500",
	"address": "140 East Ave, Lockport, NY 14094",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1714289,
		"lng": -78.68291469999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "507 Center St W",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$490,000",
	"address": "507 Center St W, Medina, NY 14103",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.2200444,
		"lng": -78.39555259999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "65 Vantage Point Dr",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$4,890,000",
	"address": "65 Vantage Point Dr, Rochester, NY 14624",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1562344,
		"lng": -77.75939470000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "90 Central Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$379,000",
	"address": "90 Central Ave, Lancaster, NY 14086",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.903916,
		"lng": -78.67104740000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2250 Niagara Falls Blvd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "2250 Niagara Falls Blvd, Tonawanda, NY 14150",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.01570539999999,
		"lng": -78.8227731
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "223 - 229 Parkwood Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$225,000",
	"address": "223 - 229 Parkwood Ave, Elmira, NY 14903",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.126657,
		"lng": -76.83616699999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2080 West Seneca St.",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$445,000",
	"address": "2080 West Seneca St., Ovid, NY 14521",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.6760236,
		"lng": -76.8280565
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2861 West Henrietta Rd.",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "2861 West Henrietta Rd., Rochester, NY 14623",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.094307,
		"lng": -77.6334516
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "50 French Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$796,500",
	"address": "50 French Rd, Cheektowaga, NY 14227",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.86783,
		"lng": -78.75162599999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "30 French Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$900,000",
	"address": "30 French Rd, Cheektowaga, NY 14227",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8676501,
		"lng": -78.75275429999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "10-20 French Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,239,000",
	"address": "10-20 French Road, Cheektowaga, NY 14227",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.866279,
		"lng": -78.75360850000004
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "6359 Riddle Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$475,000",
	"address": "6359 Riddle Road, Lockport, NY 14094",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1164352,
		"lng": -78.61133000000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "15 Rotterdam rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$2,500,000",
	"address": "15 Rotterdam rd, Sodus, NY 14551",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.23793420000001,
		"lng": -77.0715194
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "425 Ormond St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,200,000",
	"address": "425 Ormond St, Rochester, NY 14605",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.16573349999999,
		"lng": -77.606133
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "291 Hamilton St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$272,727",
	"address": "291 Hamilton St, Geneva, NY 14456",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.858407,
		"lng": -76.99462600000004
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1447 St. Paul Street",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "1447 St. Paul Street, Rochester, NY 14621",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1821661,
		"lng": -77.62598650000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "48 Cairn St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$249,900",
	"address": "48 Cairn St, Rochester, NY 14611",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.14658499999999,
		"lng": -77.661766
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1000 Kenmore Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$659,000",
	"address": "1000 Kenmore Ave, Buffalo, NY 14216",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9584777,
		"lng": -78.8548427
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "547 W Ferry St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$389,000",
	"address": "547 W Ferry St, Buffalo, NY 14222",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9152348,
		"lng": -78.88052349999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "23 Flohr Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "23 Flohr Ave, West Seneca, NY 14224",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8434612,
		"lng": -78.78944280000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "4707 W Ridge Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,976,000",
	"address": "4707 W Ridge Rd, Spencerport, NY 14559",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.216556,
		"lng": -77.763418
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "30 Roehrer Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$39,995",
	"address": "30 Roehrer Ave, Buffalo, NY 14208",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9048394,
		"lng": -78.84933180000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "5 Limestone Dr",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "5 Limestone Dr, Buffalo, NY 14221",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9642604,
		"lng": -78.7124101
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "3235 Lockport Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "3235 Lockport Rd, Niagara Falls, NY 14305",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1160821,
		"lng": -79.02332990000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "8 Milks Alley",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$819,900",
	"address": "8 Milks Alley, Ellicottville, NY 14731",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.276835,
		"lng": -78.67115999999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "252 Lake Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "252 Lake Ave, Blasdell, NY 14219",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.79773549999999,
		"lng": -78.83736850000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "20 Allen St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$550,000",
	"address": "20 Allen St, Buffalo, NY 14202",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8991891,
		"lng": -78.87084319999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "4727 - 4729 W Ridge Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$800,000",
	"address": "4727 - 4729 W Ridge Rd, Spencerport, NY 14559",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.216131,
		"lng": -77.764973
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "11679 Genesee St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$175,000",
	"address": "11679 Genesee St, Alden, NY 14004",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.943402,
		"lng": -78.55240040000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "4079 Lake Rd N",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$390,000",
	"address": "4079 Lake Rd N, Brockport, NY 14420",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.2217018,
		"lng": -77.93642
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "Blakeley Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$74,900",
	"address": "Blakeley Road, East Aurora, NY 14052",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.7263904,
		"lng": -78.61462290000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "111 Pulteney St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$80,000",
	"address": "111 Pulteney St, Geneva, NY 14456",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8655933,
		"lng": -76.98737879999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2423 Monroe Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$750,000",
	"address": "2423 Monroe Ave, Rochester, NY 14618",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.118024,
		"lng": -77.55580420000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "155 Bellwood Dr",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$3,000,000",
	"address": "155 Bellwood Dr, Rochester, NY 14606",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1853809,
		"lng": -77.68527710000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "5050 Transit Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$749,900",
	"address": "5050 Transit Rd, Depew, NY 14043",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.889004,
		"lng": -78.69899800000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "4830 Transit Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "4830 Transit Road, Depew, NY 14043",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8724833,
		"lng": -78.6974396
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1983 Empire Blvd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,699,900",
	"address": "1983 Empire Blvd, Webster, NY 14580",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1938432,
		"lng": -77.50234890000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "938 Broadway St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$230,000",
	"address": "938 Broadway St, Buffalo, NY 14212",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.893198,
		"lng": -78.83983599999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "5673 McKinley Parkway",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$185,000",
	"address": "5673 McKinley Parkway, Hamburg, NY 14075",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.7331906,
		"lng": -78.8124176
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "501 W Commercial St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$945,000",
	"address": "501 W Commercial St, East Rochester, NY 14445",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1167029,
		"lng": -77.4974947
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "5952 Transit Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$450,000",
	"address": "5952 Transit Rd, Depew, NY 14043",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9177622,
		"lng": -78.69720919999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "877 Military Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$499,000",
	"address": "877 Military Rd, Kenmore, NY 14217",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.961031,
		"lng": -78.888374
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "8420 Bay St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$350,000",
	"address": "8420 Bay St, Sodus Point, NY 14555",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.2702545,
		"lng": -76.98385680000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "11233 Corning Road East",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$699,000",
	"address": "11233 Corning Road East, Corning, NY 14830",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.131529,
		"lng": -77.023281
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "933-935 Sheridan Dr",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$575,000",
	"address": "933-935 Sheridan Dr, Tonawanda, NY 14150",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9802741,
		"lng": -78.89975270000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1320 Ridge Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$779,412",
	"address": "1320 Ridge Road, Lackawanna, NY 14218",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.828359,
		"lng": -78.8034816
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "674 Main St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$2,500,000",
	"address": "674 Main St, Buffalo, NY 14202",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8922592,
		"lng": -78.87300640000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "987 Niagara St &amp; 5 School St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$525,000",
	"address": "987 Niagara St &amp; 5 School St, Buffalo, NY 14213",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.910364,
		"lng": -78.90002290000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "13700 Tri-County Business Park",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "13700 Tri-County Business Park, Chaffee, NY 14030",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.5384956,
		"lng": -78.4760847
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1542-1548 Dewey Avenue",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$245,000",
	"address": "1542-1548 Dewey Avenue, Rochester, NY 14615",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1952814,
		"lng": -77.63861980000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "5103 W Ridge Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$595,000",
	"address": "5103 W Ridge Rd, Spencerport, NY 14559",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.2171657,
		"lng": -77.79941300000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "6997 Campbell Blvd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$499,900",
	"address": "6997 Campbell Blvd, North Tonawanda, NY 14120",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0874049,
		"lng": -78.771386
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "3242 Daansen Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,200,000",
	"address": "3242 Daansen Road, Walworth, NY 14568",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.11893999999999,
		"lng": -77.24919599999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "470 N Main St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$225,000",
	"address": "470 N Main St, Canandaigua, NY 14424",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9022002,
		"lng": -77.29232460000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "5605 W Ridge Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$295,000",
	"address": "5605 W Ridge Rd, Spencerport, NY 14559",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.222845,
		"lng": -77.84593000000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "697 Main Street",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,508,467",
	"address": "697 Main Street, Arcade, NY 14009",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.534527,
		"lng": -78.45054499999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2830 Delaware Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$220,000",
	"address": "2830 Delaware Ave, Buffalo, NY 14217",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.961262,
		"lng": -78.87020000000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "7590 Transit Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,495,000",
	"address": "7590 Transit Rd, Williamsville, NY 14221",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9747073,
		"lng": -78.69751059999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2211 Niagara St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$3,125,000",
	"address": "2211 Niagara St, Buffalo, NY 14207",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9452164,
		"lng": -78.90645139999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "6605 Pittsford Palmyra Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$670,000",
	"address": "6605 Pittsford Palmyra Rd, Fairport, NY 14450",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0694385,
		"lng": -77.4465897
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "607 Rowley Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "607 Rowley Rd, Victor, NY 14564",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0095539,
		"lng": -77.44345269999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "25 South Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "25 South Ave, Hilton, NY 14468",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.2875605,
		"lng": -77.7920115
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1735 Hertel Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$565,000",
	"address": "1735 Hertel Ave, Buffalo, NY 14216",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9474126,
		"lng": -78.8437462
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "30 Wilson Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "30 Wilson Road, Amherst, NY 14221",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9533842,
		"lng": -78.7282854
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "40 Wildbriar Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$474,900",
	"address": "40 Wildbriar Rd, Rochester, NY 14623",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0826,
		"lng": -77.60931699999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1855 N Union St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$474,900",
	"address": "1855 N Union St, Spencerport, NY 14559",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.21376100000001,
		"lng": -77.79614700000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "492-494 Pearl Street",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,195,000",
	"address": "492-494 Pearl Street, Buffalo, NY 14202",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.892821,
		"lng": -78.87363700000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "2521 East Henrietta Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$200,000",
	"address": "2521 East Henrietta Road, Rochester, NY 14623",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0705318,
		"lng": -77.60822080000003
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "700 Oliver Street",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$198,000",
	"address": "700 Oliver Street, North Tonawanda, NY 14120",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0409563,
		"lng": -78.88110819999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "3488 Sheridan Dr",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$550,000",
	"address": "3488 Sheridan Dr, Amherst, NY 14226",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9801298,
		"lng": -78.80441960000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "197-199 Allen St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$3,500,000",
	"address": "197-199 Allen St, Buffalo, NY 14201",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8997157,
		"lng": -78.87737119999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1989 Harlem Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "1989 Harlem Rd, Buffalo, NY 14212",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8977882,
		"lng": -78.78331129999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "75 Bird Avenue",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$650,000",
	"address": "75 Bird Avenue, Buffalo, NY 14213",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.925415,
		"lng": -78.89649099999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "655 West Jefferson Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$6,422,210",
	"address": "655 West Jefferson Road, Henrietta, NY 14623",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0864001,
		"lng": -77.62521190000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "W. Saile Drive &amp; Call Parkway",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$634,500",
	"address": "W. Saile Drive &amp; Call Parkway, Batavia, NY 14020",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0292168,
		"lng": -78.18540089999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "115 High Street",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$495,000",
	"address": "115 High Street, Painted Post, NY 14870",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.159687,
		"lng": -77.08927699999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "6555 4th Section Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$695,000",
	"address": "6555 4th Section Rd, Brockport, NY 14420",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1978589,
		"lng": -77.9448696
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1192 Scottsville Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$450,000",
	"address": "1192 Scottsville Rd, Rochester, NY 14624",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.118675,
		"lng": -77.654852
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1468 Lake Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$329,900",
	"address": "1468 Lake Rd, Hamlin, NY 14464",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.3035657,
		"lng": -77.92102349999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "5138 South Park Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,900,000",
	"address": "5138 South Park Ave, Hamburg, NY 14075",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.7567898,
		"lng": -78.82278639999998
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "3 Geddes St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$550,000",
	"address": "3 Geddes St, Holley, NY 14470",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.2247206,
		"lng": -78.02301069999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "700 Delaware Ave",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$2,600,000",
	"address": "700 Delaware Ave, Buffalo, NY 14209",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.9033309,
		"lng": -78.87323789999999
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "975 Norton St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$36,000",
	"address": "975 Norton St, Rochester, NY 14621",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1867266,
		"lng": -77.59669659999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "769 Trabold Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$1,100,000",
	"address": "769 Trabold Rd, Gates, NY 14624",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.1271763,
		"lng": -77.7300725
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "10340-10344 Main St.",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$199,000",
	"address": "10340-10344 Main St., Clarence, NY 14031",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.98008799999999,
		"lng": -78.60222699999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "515 3rd St",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "515 3rd St, Niagara Falls, NY 14301",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.0912426,
		"lng": -79.05914510000002
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "1255 Commercial Drive",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$135,000",
	"address": "1255 Commercial Drive, Farmington, NY 14425",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.975236,
		"lng": -77.35262410000001
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "300 Bram Hall Dr",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$199,000",
	"address": "300 Bram Hall Dr, Greece, NY 14626",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.2243642,
		"lng": -77.7230922
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "518 Abbott Rd",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "Price Not Disclosed",
	"address": "518 Abbott Rd, Buffalo, NY 14220",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 42.8494571,
		"lng": -78.81354369999997
	},
	"markerIcon": "marker-green.png"
}, {
	"title": "4150 Buffalo Road",
	"image": "1-1-thmb.png",
	"type": "For Sale",
	"price": "$450,000",
	"address": "4150 Buffalo Road, Rochester, NY 14624",
	"bedrooms": "3",
	"bathrooms": "2",
	"area": "3430 Sq Ft",
	"position": {
		"lat": 43.129596,
		"lng": -77.78842499999996
	},
	"markerIcon": "marker-green.png"
}];
   /* var props = [{
        title : 'Modern Residence in New York',
        image : '1-1-thmb.png',
        type : 'For Sale',
        price : '$1,550,000',
        address : '39 Remsen St, Brooklyn, NY 11201, USA',
        bedrooms : '3',
        bathrooms : '2',
        area : '3430 Sq Ft',
        position : {
            lat : 42.8864,
            lng : -78.8784
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
            lat : 42.8864,
            lng : -78.8584
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
            lat : 42.8824,
            lng : -78.8789
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
            lat : 42.8869,
            lng : -78.8789
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
            lat : 42.8894,
            lng : -78.8794
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
            lat : 42.8964,
            lng : -78.8984
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
            lat : 42.8964,
            lng : -78.8784
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
            lat : 42.8964,
            lng : -78.8794
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
            lat : 42.8824,
            lng : -78.8724
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
            lat : 42.8814,
            lng : -78.8724
        },
        markerIcon : "marker-green.png"
    }];  */

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
                                        '<a href="#/Single" class="btn btn-sm btn-round btn-green viewInfo">View</a>' +
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
        map.setCenter(new google.maps.LatLng(42.8964,-78.8184));
        map.setZoom(11);

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
