import { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import Slides from "./Slides";

const Nav = () => {
    let [openslide, setOpenslide] = useState(false);

    const openslider = () => {
        setOpenslide((openslide = !openslide));
    };

    return (
        <div className="header-bar-wrapper">
            <Slides openslide={openslide} openslider={openslider} />

            <div className="container">
                <div className="hb-content">
                    <div className="hamburger-menu" onClick={openslider}>
                        <CgMenuLeft className="menu-icon" />
                    </div>

                <div className="logo-header">
                    <Link to="/">
                        <img
                            src="/images/Intelligentsiatalklogo.png"
                            alt="homes for life"
                            className="logo"
                        />
                    </Link>
                </div>
                
                </div>
            </div>
        </div>
    );
};

export default Nav;
