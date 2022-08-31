import Rain from "../components/Rain";
import Trianglers from "../components/Trianglers";

const Section1 = () => {
  return (
    <>
      <Rain />
      <section className="how-it-works">
        <Trianglers />
        <div className="container"></div>
      </section>
    </>
  );
};

export default Section1;
