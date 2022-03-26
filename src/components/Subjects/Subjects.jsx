import "./Subjects.css";


const Subjects = ({ click, image, name, progress }) => {
    console.log(progress);
    return (
        <div onClick={click} className="Subject">
            <div className="SHolder">
                {image ? <img src={image} /> : null}
                <h3>{name}</h3>
            </div>
            {progress !== undefined ? (
                <div className="SLoader">
                    <div
                        className="bar"
                        style={{ width: progress + "%" }}
                    ></div>
                </div>
            ) : null}
        </div>
    );
};
export default Subjects;
