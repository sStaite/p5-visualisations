state = "home_page";

function setup() {
	createCanvas(400, 400);

	if (state === "home_page") {
		home_page_setup();
	}
}

function mousePressed() {
	if (state === "home_page") {

	} else if (state === "fractal_tree") {
		fractal_tree_mousePressed();
	}
}

function draw() {

	if (state === "fractal_tree") {
		fractal_tree();
	} else if (state === "home_page") {
		home_page();
	}
}
