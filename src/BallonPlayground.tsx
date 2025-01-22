import SingleBallon from "./SingleBalloon";

interface Ballon {
    message: string,
    xCoord : number,
    yCoord : number
}

const BallonPlayground: React.FC<{ ballons: Ballon[] }> = ({ ballons }) => {

    return (
      <div className="f">
        {ballons.map((ballon, index) => (
          <SingleBallon key={index} message={ballon.message} xCoord={ballon.xCoord} yCoord={ballon.yCoord} />
        ))}
      </div>
    );
  };

export default BallonPlayground;