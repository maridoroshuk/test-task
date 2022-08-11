const button = document.querySelector(".collapsible__button");
const content = document.querySelector(".collapsible__content");
const showBtn = document.querySelector(".collapsible__action--visible");
const hideBtn = document.querySelector(".collapsible__action--hidden");

button.addEventListener("click", hideContent);

function hideContent(e) {
	content.style.display = content.style.display === "none" ? "block" : "none";
	changeButton();
}

function changeButton() {
	if (content.style.display === "none") {
		hideBtn.style.display = "block";
		showBtn.style.display = "none";
	} else {
		hideBtn.style.display = "none";
		showBtn.style.display = "block";
	}
}

changeButton();
