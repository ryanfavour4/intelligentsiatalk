import { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import Slides from "./Slides";

const Nav = () => {

    let [openslide, setOpenslide] = useState(false);

    const openslider = ()=>{
        setOpenslide(openslide = !openslide)
    }


    return ( 
        <div className="header-bar-wrapper"> 
        
        <Slides openslide={openslide} />

            <div className="container">
                <div className="hb-content">
                    <div className="hamburger-menu" onClick={openslider}>
                        <CgMenuLeft className="menu-icon"/>
                    </div>

                    <Link to="/" className="logo-header">
                        <img src="/images/Icon transparency 2.png" alt="homes for life" className="logo" />
                    </Link>
                     
                    <Link to="/Quote" className="btn-header"></Link>
                </div>
            </div>
        </div>
     );
}
 
export default Nav;