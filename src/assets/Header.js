// import Nav from "../components/Nav";
import AdcopySection from "../components/AdcopySection";

const Header = () => {
  return (
    <header className="header-home">
      <video className="bg-video" autoPlay loop muted>
        <source src="\videos\Sequence 01 (2).mp4" type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div>
        <div className="hero-section">
          {/* <Nav/> */}
          <div className="ad-copy interests-btns container">
            <AdcopySection />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
