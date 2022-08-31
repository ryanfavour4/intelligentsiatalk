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

                    <Link to="/" className="logo-header">
                        <img
                            src="/images/Logo transparency 1.png"
                            alt="homes for life"
                            className="logo"
                        />
                    </Link>

                    <Link to="/About" className="timesabdintlogo">
                        <img
                            src="/images/Icon transparency 2.png"
                            alt="homes for life"
                            className="logo"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;
