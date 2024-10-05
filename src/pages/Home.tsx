import React, { useEffect, useRef } from "react";
import { imgFadeIn } from "../utilities/animate";

const Home = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const target = imgRef.current;

    imgFadeIn(target);
  }, []);


  return (
    <section className="px-10 py-20">
      <h1 id="my-text">woah.text</h1>
      <div ref={imgRef} className="container"></div>
    </section>
  );
};

export default Home;
