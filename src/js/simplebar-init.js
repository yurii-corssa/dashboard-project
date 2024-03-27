import SimpleBar from "simplebar";
import "simplebar/dist/simplebar.css";

document.querySelectorAll(".js-scroll-bar").forEach((el) => {
  new SimpleBar(el);
});
