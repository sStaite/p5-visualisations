state = "fractal_tree"

function setup() {
	createCanvas(400, 400);

	if (state === "home_page") {
		home_page_setup();
	} else if (state == "fractal_tree") {
		fractal_tree_setup();
	}
}

function mousePressed() {
	if (state === "fractal_tree") {
		fractal_tree_mousePressed();
	}
}

function draw() {
	if (state === "home_page") {
		home_page();
	} else if (state === "fractal_tree") {
		fractal_tree();
	}
}
