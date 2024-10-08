import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type GsapTarget = gsap.TweenTarget;

export const fadeIn = (target: GsapTarget) => {
  const tl = gsap.timeline({
    defaults: { ease: "power4.inOut", duration: 2 },
  });

  //   first parameter is selector, second=cssStyle
  // Adding the .to() after the first t1.to allows me to chain the animation
  tl.to(target, {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    y: 0,
    duration: 2.2,
  });
};

export const imgFadeIn = (target: GsapTarget) => {
  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut", duration: 0.5 },
    scrollTrigger: {
      trigger: target,
      scrub: 1,
      start: "top 80%",
    },
  });

  //   first parameter is selector, second=cssStyle
  // Adding the .to() after the first t1.to allows me to chain the animation
  // tl.to(target, {
  //   clipPath: "polygon(7% 7%, 93% 7%, 93% 93%, 7% 93%)",
  // });
    tl.fromTo(
      target,
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        borderRadius: "0px",
      }, // Initial state
      {
        clipPath: "polygon(7% 7%, 93% 7%, 93% 93%, 7% 93%)",
        borderRadius: "200px",
      } // Final state
    );
};
