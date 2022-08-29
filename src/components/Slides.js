
const Slides = ({openslide}) => {

    console.log(openslide);

    let slideShows = openslide ? 'slideShows' : ''

    return ( 
        <div className={`slide-wrapper ${slideShows}`}>
            
        </div>
     );
}

export default Slides;