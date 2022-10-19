import Wordings from "../components/Wordings";


// mapping of words quotes  

const Wordingswall = () => {
  return (
    <div className="flex-slide-box">
      <div className="word-wall-section">
        <Wordings word="cows arent so nice after all" author="cucurela" />
        <Wordings word="i have nothing to say" author="cucululu" />
        <Wordings
          word="im good at dancing thats why i see nigeria under my feet muahahaha i laugh in tribalism creep"
          author="tinunbu"
        />
        <Wordings />
      </div>
    </div>
  );
};

export default Wordingswall;
