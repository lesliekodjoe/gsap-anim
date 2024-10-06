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
          ref={imgRef}
          className="relative w-full h-[600px] overflow-hidden rounded-none"
        >
          <img src={proIMG1} className="w-full h-full object-cover" alt="" />
        <div
          data-scroll
          data-scroll-speed="0.2"
          className="absolute top-0 w-44"
        >
          <img src={proIMG2} className="w-full h-full object-cover" alt="" />
        </div>
        </div>
        <div>
          Fugiat ex labore duis velit laboris sunt ullamco incididunt eu magna
          non eiusmod. Et magna nulla fugiat ullamco est aliquip fugiat.
          Exercitation aliquip veniam est minim. Voluptate commodo Lorem labore
          pariatur incididunt voluptate sit do culpa sit fugiat. Non qui
          incididunt id sunt non dolore consequat ex.
        </div>
        <div>
          Fugiat ex labore duis velit laboris sunt ullamco incididunt eu magna
          non eiusmod. Et magna nulla fugiat ullamco est aliquip fugiat.
          Exercitation aliquip veniam est minim. Voluptate commodo Lorem labore
          pariatur incididunt voluptate sit do culpa sit fugiat. Non qui
          incididunt id sunt non dolore consequat ex.
        </div>
        <div>
          Fugiat ex labore duis velit laboris sunt ullamco incididunt eu magna
          non eiusmod. Et magna nulla fugiat ullamco est aliquip fugiat.
          Exercitation aliquip veniam est minim. Voluptate commodo Lorem labore
          pariatur incididunt voluptate sit do culpa sit fugiat. Non qui
          incididunt id sunt non dolore consequat ex.
        </div>
        <div>
          Fugiat ex labore duis velit laboris sunt ullamco incididunt eu magna
          non eiusmod. Et magna nulla fugiat ullamco est aliquip fugiat.
          Exercitation aliquip veniam est minim. Voluptate commodo Lorem labore
          pariatur incididunt voluptate sit do culpa sit fugiat. Non qui
          incididunt id sunt non dolore consequat ex.
        </div>
        <div>
          Fugiat ex labore duis velit laboris sunt ullamco incididunt eu magna
          non eiusmod. Et magna nulla fugiat ullamco est aliquip fugiat.
          Exercitation aliquip veniam est minim. Voluptate commodo Lorem labore
          pariatur incididunt voluptate sit do culpa sit fugiat. Non qui
          incididunt id sunt non dolore consequat ex.
        </div>
        <div>
          Fugiat ex labore duis velit laboris sunt ullamco incididunt eu magna
          non eiusmod. Et magna nulla fugiat ullamco est aliquip fugiat.
          Exercitation aliquip veniam est minim. Voluptate commodo Lorem labore
          pariatur incididunt voluptate sit do culpa sit fugiat. Non qui
          incididunt id sunt non dolore consequat ex.
        </div>
      </section>
    </div>
  );
};

export default Home;
