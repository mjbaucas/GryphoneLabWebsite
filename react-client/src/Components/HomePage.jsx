import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
        <div class="container-fluid text-center">    
            <div class="row content">
                <div class="col-sm-10 text-left"> 
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class=""></li>
                            <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
                        </ol>

                        <div class="carousel-inner" role="listbox">
                            <div class="item">
                                <img src="https://placehold.it/800x400?text=IMAGE" alt="Image"></img>
                                <div class="carousel-caption">
                                    <h3>Sell $</h3>
                                    <p>Money Money.</p>
                                </div>      
                            </div>

                            <div class="item active">
                                <img src="https://placehold.it/800x400?text=Another Image Maybe" alt="Image"></img>
                                <div class="carousel-caption">
                                    <h3>More Sell $</h3>
                                    <p>Lorem ipsum...</p>
                                </div>      
                            </div>
                        </div>

                        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <h1>Welcome</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h3>Test</h3>
                <p>Lorem ipsum...</p>
            </div>
        </div>
    )
  }
}

export default HomePage;