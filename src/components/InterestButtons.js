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
    // console.log(e.target.checked, btnstate, e.target.id);
  };

  return (
    <>
      <label htmlFor="Design" className="subject-btn">
        {" "}
        <input
          type="radio"
          name="topic"
          id="Design"
          onChange={(e) => pickedTopic(e)}
          value={"Design"}
        />{" "}
        Design
      </label>
      <label htmlFor="Business" className="subject-btn">
        {" "}
        <input
          type="radio"
          name="topic"
          id="Business"
          onChange={(e) => pickedTopic(e)}
          value={"Business"}
        />{" "}
        Business
      </label>
      <label htmlFor="Social change" className="subject-btn">
        {" "}
        <input
          type="radio"
          name="topic"
          id="Social change"
          onChange={(e) => pickedTopic(e)}
          value={"Social change"}
        />{" "}
        Social change
      </label>
      <label htmlFor="Health" className="subject-btn">
        {" "}
        <input
          type="radio"
          name="topic"
          id="Health"
          onChange={(e) => pickedTopic(e)}
          value={"Health"}
        />{" "}
        Health
      </label>
      <label htmlFor="Nature" className="subject-btn">
        {" "}
        <input
          type="radio"
          name="topic"
          id="Nature"
          onChange={(e) => pickedTopic(e)}
          value={"Nature"}
        />{" "}
        Nature
      </label>
      <label htmlFor="The future" className="subject-btn">
        {" "}
        <input
          type="radio"
          name="topic"
          id="The future"
          onChange={(e) => pickedTopic(e)}
          value={"The future"}
        />{" "}
        The future
      </label>
      <label htmlFor="Communication" className="subject-btn">
        {" "}
        <input
          type="radio"
          name="topic"
          id="Communication"
          onChange={(e) => pickedTopic(e)}
          value={"Communication"}
        />{" "}
        Communication
      </label>
      <label htmlFor="Activism" className="subject-btn">
        {" "}
        <input
          type="radio"
          name="topic"
          id="Activism"
          onChange={(e) => pickedTopic(e)}
          value={"Activism"}
        />{" "}
        Activism
      </label>
      <label htmlFor="Child development" className="subject-btn">
        {" "}
        <input
          type="radio"
          name="topic"
          id="Child development"
          onChange={(e) => pickedTopic(e)}
          value={"Child development"}
        />{" "}
        Child development
      </label>
      <label htmlFor="Personal growth" className="subject-btn">
        {" "}
        <input
          type="radio"
          name="topic"
          id="Personal growth"
          onChange={(e) => pickedTopic(e)}
          value={"Personal growth"}
        />{" "}
        Personal growth
      </label>
      <label htmlFor="Humanity" className="subject-btn">
        {" "}
        <input
          type="radio"
          name="topic"
          id="Humanity"
          onChange={(e) => pickedTopic(e)}
          value={"Humanity"}
        />{" "}
        Humanity
      </label>
      <label htmlFor="Society" className="subject-btn">
        {" "}
        <input
          type="radio"
          name="topic"
          id="Society"
          onChange={(e) => pickedTopic(e)}
          value={"Society"}
        />{" "}
        Society
      </label>
    </>
  );
};

export default InterestButtons;
