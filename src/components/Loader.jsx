import React from 'react';
import electrician from '../assets/img/electrician.svg'
import baker from '../assets/img/baker.svg'
import mechanic from '../assets/img/mechanic.svg'
import carpenter from '../assets/img/carpenter.svg'
import logoicon from '../assets/img/logoicon.svg'

const Loader = () => {

    return ( 
        <section className="loader contendor_carga" >
            <div>
                <img src={electrician} className="job1"></img>
            </div>
            <div>
                <img src={baker} className="job2"></img>
            </div>
            <div>
            <img src={carpenter} className="job3"></img>
            </div>
            <div>
            <img src={mechanic} className="job4"></img>
            </div>
            <div>
            <img src={logoicon} className="job5"></img>
            </div>
           
        </section>
     );
}
 
export default Loader;