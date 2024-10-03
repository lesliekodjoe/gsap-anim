import gsap from "gsap";

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

