import Pagename from "../components/Pagename";

const Contact = ({pagenamebrand="Contact Us"}) => {
    return ( 
        <div className="contact">
            <Pagename  pagenamebrand={pagenamebrand}/>
        </div>
     );
}

export default Contact;