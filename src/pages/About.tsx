import React from "react";

const About = () => {
  const images = [
    "../assets/proIMG1.jpg",
    "../assets/proIMG2.jpg",
    "../assets/proIMG3.jpg",
    "../assets/proIMG4.jpg",
  ];
  return (
    <div className="px-10 ">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="w-44">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
