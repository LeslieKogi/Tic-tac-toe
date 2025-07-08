import square from '../assets/square.jpeg'

function Grid(){
    return (
      <>
        <div className="row1">
          <img src={square} alt="square" />
          <img src={square} alt="square" />
          <img src={square} alt="square" />
        </div>
        <div className="row2">
          <img src={square} alt="square" />
          <img src={square} alt="square" />
          <img src={square} alt="square" />
        </div>
        <div className="row3">
          <img src={square} alt="square" />
          <img src={square} alt="square" />
          <img src={square} alt="square" />
        </div>
      </>
    );
}
export default Grid