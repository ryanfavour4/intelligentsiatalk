import Aboutustext from "../assets/Aboutustext";
import Aboutusvidexp from "../assets/Aboutusvidexp";
import Pagename from "../components/Pagename";

const About = ({pagenamebrand="About Us"}) => {
    return ( 
        <div className="about">
            <Pagename pagenamebrand={pagenamebrand}/>
            <Aboutustext/>
            <Aboutusvidexp/>
        </div>
     );
}

export default About;