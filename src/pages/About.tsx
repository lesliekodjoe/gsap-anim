import React from "react";
import proIMG1 from "../assets/proIMG1.jpg";

const About = () => {
  return (
    <section className="px-10 py-10">
      <section>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </section>

      <section>
        <div className="img w-44 h-44">
          <img src={proIMG1} alt="Image description" className="w-full h-full" />
        </div>
        <div className="img w-44">
          <img src={proIMG1} alt="Image description" className="w-full h-full" />
        </div>
        <div className="img w-44">
          <img src={proIMG1} alt="Image description" className="w-full h-full" />
        </div>
      </section>
    </section>
  );
};

export default About;
