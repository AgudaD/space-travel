import Navigation from "../../Components/Navigation";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <Navigation />

      
      <div className="sides">
          <div className="mainn">
            <p className="starting-txt">SO, YOU WANT TO TRAVEL TO</p>
            <p className="bold-txt">SPACE</p>
            <p className="main-info">
              Let's face it; if you want to go to space, you might as well genuinely
              go to outer space and not hover kind of on the edge of it. Well sit
              back, and relax because we'll give you a truly out of this world
              experience!
            </p>
          </div>

          <div className="circle">EXPLORE</div>
      </div>
    </div>
  );
};

export default HomePage;
