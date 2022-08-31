const Loadscreen = ({loadscreen}) => {
    let goneClass = loadscreen ? "" : "gone"

    return ( 
        <div className={`load-screen-body ${goneClass}`}>
            <div className="center-loading-content">
                <img src="/images/Logo transparency 1.png" alt="here lays something" />
            </div>
        </div>
     );
}
 
export default Loadscreen;