// Initialize All Required DOM Element
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");
const iconGroup = document.getElementById("icon-group");

// Initialize Responsive Navbar Menu
menuIcon.addEventListener("click", () => {
	menu.classList.toggle("active");
	iconGroup.classList.toggle("active");

	// if (navbarMenu.classList.contains("active")) {
	// 	navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
	// } else {
	// 	navbarMenu.removeAttribute("style");
	// }
});
