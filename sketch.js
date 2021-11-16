let state = "home_page";
var back_button;

var fractal_button; var n_value_slider; var left_value_slider; var right_value_slider;

var mandelbrot_button;

function setup() {
	createCanvas(WIDTH, HEIGHT);

	button_setup();
	slider_setup();

	home_page_setup();

}


function draw() {
	if (state === "home_page") {

	} else if (state === "fractal_tree") {
		fractal_tree();
	} else if (state === "mandelbrot") {
		// mandelbrot();
}
}
