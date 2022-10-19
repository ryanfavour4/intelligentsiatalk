import { useState } from "react";

const InterestButtons = ({ btnstate, changeToFalse }) => {
  let [activeclick, setActiveclick] = useState(false);

  const pickedTopic = (e) => {
    setActiveclick((activeclick = true));

    if (activeclick === true) {
      localStorage.setItem("usersInterest", e.target.id);
      changeToFalse();
    } else {
      return null;
    }
  };

  return (
    <>
      <label htmlFor="About" className="subject-btn">
        {" "}
        <input
          type="radio"
          name="topic"
          id="About"
          onChange={(e) => pickedTopic(e)}
          value={"About"}
        />{" "}
        About
      </label>
      
      <label htmlFor="Video" className="subject-btn">
        {" "}
        <input
          type="radio"
          name="topic"
          id="Video"
          onChange={(e) => pickedTopic(e)}
          value={"Video"}
        />{" "}
        Video
      </label>

      <label htmlFor="Events" className="subject-btn">
        {" "}
        <input
          type="radio"
          name="topic"
          id="Events"
          onChange={(e) => pickedTopic(e)}
          value={"Events"}
        />{" "}
        Events
      </label>
      
      <label htmlFor="Wall" className="subject-btn">
        {" "}
        <input
          type="radio"
          name="topic"
          id="Wall"
          onChange={(e) => pickedTopic(e)}
          value={"Wall"}
        />{" "}
         Intelligentsia Wall
      </label>

    </>
  );
};

export default InterestButtons;
