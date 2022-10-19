import { BsFillPeopleFill } from "react-icons/bs";

const Aboutustext = () => {
  return (
    <div className="aboutustext">
      <div className="container">
        <div className="header-aboutus-text">
          <h2>What Is Intelligentsia Talk</h2>
          <BsFillPeopleFill className="ourmissionicon" />
        </div>

        <div className="paragraph-section1">
          <article>
            Intelligentsia Talk is a discussion platform which aims to elevate
            the discourse on societal challenges. We will bring together,
            academics, business executives, educators, community leaders,
            philosophers, religious leaders and more, from all walks of life, to
            share their learnings and engage in discussions with all who will
            listen.
          </article>
        </div>
        <div className="paragraph-section2">
          <article>
            We want to provoke deeper thinking, develop self awareness and in
            doing so, start the process of creating solutions to some of our
            world’s most pressing issues.
          </article>
        </div>
      </div>
    </div>
  );
};

export default Aboutustext;
