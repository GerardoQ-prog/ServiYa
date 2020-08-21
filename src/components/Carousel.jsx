import React from 'react';
import electricista from '../assets/img/electricista.jpg'

const Carousel = () => {
    return ( 
      
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/7gEJTwsH6kw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
         );
}
 
export default Carousel;