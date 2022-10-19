import ReactPlayer from "react-player"

const Aboutusvidexp = () => {
    return ( 
        <section className="aboutusvidexp">

            <div className="container">
                <div className="needtoknowbox">
                    <h2 className="know-more">
                        Intelligentsia Talk CEO
                    </h2>
                  <div className="vid-descvid">
                        <div className="react-player-holder-abtpage">
                            <ReactPlayer
                            controls
                            width="100%" height="100%" url="\videos\Sequence 01 (2).mp4"/>
                        </div>
                        <p className="vid-about-us-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem vero modi laudantium maxime nobis eveniet, sint numquam officia alias laborum doloribus voluptatum perferendis odio harum atque repudiandae ad aspernatur!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo possimus beatae itaque?
                        </p>
                  </div>
                </div>
            </div>

        </section>
     );
}
 
export default Aboutusvidexp;