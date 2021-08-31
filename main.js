// grab elements for scrolling
const scrollElements = document.querySelectorAll(".header");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

// const handleScrollAnimation = () => {
//   scrollElements.forEach((el) => {
//     if (elementInView(el, 1.25)) {
//       console.log("Scrolling");
//     } 
//   })
// }

window.addEventListener("scroll", () => {
  console.log("scrolling");
});