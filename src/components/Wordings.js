const Wordings = ({ word = 'donuts are nice', author = 'popo' }) => {
    return (
        <div className="word-wallbox">
            <div className="top-marble">
                <div className="word-of-wisdom">
                    <p>{word}</p>
                </div>
                <h4><small>{author}</small></h4>
            </div>
            <div className="banner-bottom">
                <img src="../images/Logo transparency 1.png" alt="" />
            </div>
        </div>
    );
}

export default Wordings;