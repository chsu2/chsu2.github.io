// grab elements for scrolling
const scrollElement = document.querySelector(".heading");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const handleScrollAnimation = () => {
  console.log(scrollElement.scrollTop);
}

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});