const button = document.querySelector(".collapsible__button");
const content = document.querySelector(".collapsible__content");
const visibleSpan = document.querySelector(".collapsible__action--visible");
const hidenSpan = document.querySelector(".collapsible__action--hidden");

button.addEventListener("click", hideContent);
function hideContent(e) {
	if (content.style.display !== "none") {
		content.style.display = "none";
		changeButtonText();
	} else {
		content.style.display = "block";
		changeButtonText();
	}
}

function changeButtonText() {
	if (content.style.display !== "none") {
		hidenSpan.style.display = "none";
		visibleSpan.style.display = "block";
	} else {
		hidenSpan.style.display = "block";
		visibleSpan.style.display = "none";
	}
}

changeButtonText();
