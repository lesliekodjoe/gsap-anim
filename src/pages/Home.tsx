import React, { useEffect, useRef } from "react";
import { imgFadeIn } from "../utilities/animate";
import proIMG1 from "../assets/proIMG1.jpg";
import proIMG2 from "../assets/proIMG2.jpg";

const Home = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const target = imgRef.current;

    imgFadeIn(target);
  }, []);

  return (
    <div data-scroll-container>
      <section className="py-20">
        <div
          data-scroll
          data-scroll-speed="-5"
          ref={imgRef}
          className="relative w-full h-[600px] overflow-hidden rounded-none"
        >
          <img src={proIMG1} className="w-full h-full object-cover" alt="" />
        </div>
        <div
          data-scroll
          data-scroll-speed="0"
          className="bg-red-500 text-white px-10 font-medium text-2xl h-[800px] py-20"
        >
          Fugiat ex labore duis velit laboris sunt ullamco incididunt eu magna
          non eiusmod. Et magna nulla fugiat ullamco est aliquip fugiat.
          Exercitation aliquip veniam est minim. Voluptate commodo Lorem labore
          pariatur incididunt voluptate sit do culpa sit fugiat. Non qui
          incididunt id sunt non dolore consequat ex. Fugiat ex labore duis
          velit laboris sunt ullamco incididunt eu magna non eiusmod. Et magna
          nulla fugiat ullamco est aliquip fugiat. Exercitation aliquip veniam
          est minim. Voluptate commodo Lorem labore pariatur incididunt
          voluptate sit do culpa sit fugiat. Non qui incididunt id sunt non
          dolore consequat ex. Fugiat ex labore duis velit laboris sunt ullamco
          incididunt eu magna non eiusmod. Et magna nulla fugiat ullamco est
          aliquip fugiat. Exercitation aliquip veniam est minim. Voluptate
          commodo Lorem labore pariatur incididunt voluptate sit do culpa sit
          fugiat. Non qui incididunt id sunt non dolore consequat ex.
        </div>
      </section>
    </div>
  );
};

export default Home;
