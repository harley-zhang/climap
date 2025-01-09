import Navbar from "../scenes/Navbar";
import Landing from "../scenes/Landing";
import Info from "../scenes/Info";

function Home() {
  return (
    <div className="app bg-grey">
      <Navbar />
      <Landing />
      <Info />
    </div>
  );
}

export default Home;
