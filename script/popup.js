var popup = document.querySelector(".popup");
var link = document.querySelector(".link");
var overlay = document.querySelector(".overlay");

link.addEventListener("click", function (event) {
	event.preventDefault();
	if (popup.classList.contains("popup-show")) {
		popup.classList.remove("popup-show");
		overlay.classList.remove("overlay-show");
	} else {
		popup.classList.add("popup-show");
		overlay.classList.add("overlay-show");
	}
})

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("popup-show")) {
			popup.classList.remove("popup-show");
			overlay.classList.remove("overlay-show");
		}
	}
});
