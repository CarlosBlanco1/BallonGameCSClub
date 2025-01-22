import BallonPlayground from "./BallonPlayground";
import NavBar from "./NavBar";

function App() {
  const clamp = (value : number, min : number, max : number) => Math.min(Math.max(value, min), max);

  const screenWidth = window.innerWidth - 100;
  const screenHeight = window.innerHeight - 100;

  const Ballons = [
    { message: "Student trip!", xCoord: 150, yCoord: 250 },
    { message: "Join today!", xCoord: 400, yCoord: 500 },
    { message: "Learn about coding!", xCoord: 230, yCoord: 300 },
    { message: "Follow us on @snow_csclub", xCoord: 500, yCoord: 200 },
    { message: "Hackathon!", xCoord: 700, yCoord: 600 },
    { message: "Student trip!", xCoord: 800, yCoord: 700 },
    { message: "Join today!", xCoord: 50, yCoord: 800 },
    { message: "Learn about coding!", xCoord: 650, yCoord: 900 },
    { message: "Follow us on @snow_csclub", xCoord: 550, yCoord: 750 },
    { message: "Hackathon!", xCoord: 600, yCoord: 850 },
    { message: "Student trip!", xCoord: 180, yCoord: 650 },
    { message: "Join today!", xCoord: 100, yCoord: 550 },
  ];

  const adjustedBallons = Ballons.map((ballon) => ({
    ...ballon,
    xCoord: clamp(ballon.xCoord, 0, screenWidth),
    yCoord: clamp(ballon.yCoord, 0, screenHeight),
  }));

  return (
    <>
      <NavBar></NavBar>
      <BallonPlayground ballons={adjustedBallons}></BallonPlayground>
    </>
  );
}

export default App;
