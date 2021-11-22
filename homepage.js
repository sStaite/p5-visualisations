
const WIDTH = 600
const HEIGHT = 600

function home_page_setup() {
    state = "home_page";
    background(51);
    hide_all();
    show_home_buttons();
}


function show_home_buttons() {
    fractal_button.show();
    mandelbrot_button.show();
    // any other home page buttons
}

function hide_all() {
    // main objects
    back_button.hide();

    // fractal objects
    fractal_button.hide();
    n_value_slider.hide();
    left_value_slider.hide();
    right_value_slider.hide();

    // mandelbrot objects
    mandelbrot_button.hide();
    rgb_button.hide();
    rainbow_button.hide();

}


function create_upper(colour) {
    fill(colour); // autumn orange
    noStroke();
    rect(0, 0, WIDTH, HEIGHT / 12);
}
