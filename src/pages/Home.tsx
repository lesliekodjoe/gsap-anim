import React, { useEffect, useRef } from "react";
import { imgFadeIn } from "../utilities/animate";
import proIMG1 from "../assets/proIMG1.jpg"

const Home = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const target = imgRef.current;

    imgFadeIn(target);
  }, []);

  return (
    <section className="py-20">
      <div
        ref={imgRef}
        className="w-full h-[600px] overflow-hidden rounded-none"
      >
        <img src={proIMG1} className="w-full h-full object-cover" alt="" />
      </div>
      <div>
        Fugiat ex labore duis velit laboris sunt ullamco incididunt eu magna non
        eiusmod. Et magna nulla fugiat ullamco est aliquip fugiat. Exercitation
        aliquip veniam est minim. Voluptate commodo Lorem labore pariatur
        incididunt voluptate sit do culpa sit fugiat. Non qui incididunt id sunt
        non dolore consequat ex.
      </div>
    </section>
  );
};

export default Home;
