import React from 'react';
import logoservi from '../assets/img/loguito.svg'
const Navbar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-light menu">
            <img src={logoservi} className="img-fluid"></img>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse menu__navbar" id="navbarNav">
              <ul class="navbar-nav menu__item">
                <li class="nav-item active ">
                  <a class=" menu__item" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="menu__item" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="menu__item" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="menu__item" href="#"  aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;