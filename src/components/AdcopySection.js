import { useState } from "react";
import { Link } from "react-router-dom";
import InterestButtons from "../components/InterestButtons";

const AdcopySection = () => {
  let [btnstate, setBtnstate] = useState(true);

  let userinterestlink = localStorage.getItem("usersInterest");

  const renderlink = `/${userinterestlink}`;

  const changeToFalse = () => {
    setBtnstate((btnstate = false));
  };

  return (
    <div className="ad-copy-text">
      <div className="top-title-adcopy">
        <img src="\images\Provoking Deeper Thought.png" alt="" />
        <p className="desc-sub-ad-copy">
          Talks recommended just for you, <br /> delivered to your inbox
        </p>
      </div>

      <form className="pick-interest">
        <div className="sub-heading-btns">
          <p>
            <small>What interests you ?</small>
          </p>
        </div>
        <div className="subjects-interest-btns">
          <InterestButtons btnstate={btnstate} changeToFalse={changeToFalse} />
        </div>
        <div className="btn-next-box">
          <button disabled={btnstate} className="next-button">
            <Link to={renderlink}>Next</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdcopySection;
