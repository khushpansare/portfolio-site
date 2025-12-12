import React from "react";
import Profile_Img from "../../assets/PassPort.jpg";

function Home() {
  return (
    <div id="intro">
      <div className="intro-wrapper">
        <div className="profile-img">
          <img
            src={
              "https://framerusercontent.com/images/RhNcQXLzBbgY4uudDynS5LSGC8.png?scale-down-to=512"
            }
            alt="Profile_Img.jpg"
          />
        </div>
        <div className="introduction">
          <h1>About ME</h1>

          <p>
            Hi, I'm Khushal — a Frontend Developer with strong hands-on
            experience in building responsive, user-friendly, and visually clean
            web applications using React.js, Material-UI, Bootstrap, HTML, and
            CSS. Along with frontend development.
          </p>
          <br />
          <p>
            I also have working knowledge of backend technologies like Node.js,
            Express, and MongoDB, which helps me understand full-stack
            application flow and build complete MERN-based projects when needed.
          </p>

          <br />
          {/* <p>
            I focus on writing clean, maintainable code, optimizing performance,
            and creating smooth UI/UX experiences. I'm passionate about
            learning, improving, and contributing to real-world projects that
            create value.
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
