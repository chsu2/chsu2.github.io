// grab elements for scrolling
const scrollElements = document.querySelectorAll(".heading");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    debugger
    if (el.scrollTop > 0) {
      console.log("adding class");
      el.classList.add("minimized");
    }
  })
}

window.addEventListener("scroll", () => {
  console.log("scrolling");
});