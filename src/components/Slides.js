import { Link } from "react-router-dom";
import Accordionlinks from "./Accordionlinks";


const Slides = ({openslide,openslider}) => {

    const closeNav = () =>{
        openslider()
    }

    let slideShows = openslide ? 'slideShows' : ''
 
    return ( 
        <div className={`slide-wrapper ${slideShows}`}>
           <div className="container">

             <div className="first-vav-box watch-interest">
                <div className="watch-section push-nav">
                    
                    <ul className="watch-videos-ul">
                        <li>
                            <Link onClick={closeNav} to="/">
                             <h4 className="watch-text-grey">
                                 HOME
                              </h4>
                            </Link>
                            </li>
                    </ul>
                </div>


                <div className="watch-section push-nav">

                    <ul className="watch-videos-ul">
                       <Accordionlinks closeNav={closeNav}/>
                    </ul>
                </div>
            </div>
           </div>
        </div>
     );
}

export default Slides;