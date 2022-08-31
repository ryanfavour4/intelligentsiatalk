import { Link } from "react-router-dom";


const Slides = ({openslide,openslider}) => {

    const closeNav = () =>{
        openslider()
    }

    let slideShows = openslide ? 'slideShows' : ''
 
    return ( 
        <div className={`slide-wrapper ${slideShows}`} onClick={closeNav}>
           <div className="container">
             <div className="first-vav-box watch-interest">
                <div className="watch-section push-nav">
                    <h4 className="watch-text-grey">
                        WATCH
                    </h4>
                    <ul className="watch-videos-ul">
                        <li><Link to="/Business">Business</Link></li>
                        <li><Link to="/Activism">Activism</Link></li>
                        <li><Link to="/Humanity">Humanity</Link></li>
                        <li><Link to="/Society">Society</Link></li>
                        <li><Link to="/Future">Future</Link></li>
                    </ul>
                </div>
            </div>

             <div className="first-vav-box watch-
             ">
                <div className="watch-section push-nav">
                    <h4 className="watch-text-grey">
                        INTELLIGENTSIA
                    </h4>
                    <ul className="watch-videos-ul">
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/Speakers">Speakers</Link></li>
                        <li><Link to="/Team">Team</Link></li>
                    </ul>
                </div>
            </div>
           </div>
        </div>
     );
}

export default Slides;