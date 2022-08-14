const button = document.querySelector(".collapsible__button");
const content = document.querySelector(".collapsible__content");
const buttonAction = document.querySelector(".collapsible__action");
const hideBtnCaption = document.querySelector(".collapsible__action--visible");
const showBtnCaption = document.querySelector(".collapsible__action--hidden");

content.style.overflow = "hidden";
hideBtnCaption.style.display = "none";
showBtnCaption.style.display = "block";

function changeButton() {
  hideBtnCaption.style.display =
    hideBtnCaption.style.display === "none" ? "block" : "none";
  showBtnCaption.style.display =
    showBtnCaption.style.display === "none" ? "block" : "none";
}

const anim = content.animate(
  { maxHeight: ["0", "200px"] },
  { duration: 250, fill: "both", easing: "ease-in-out" }
);

anim.pause();

button.addEventListener("click", function () {
  changeButton();

  if (anim.playState === "paused") {
    anim.play();
  } else {
    anim.reverse();
  }
});
