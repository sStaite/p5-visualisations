

function home_page_setup() {
    state = "home_page";
    background(51);
    hide_all();
    show_home_buttons();
}


function show_home_buttons() {
    fractal_button.show();
    // any other home page buttons
}

function hide_all() {
    back_button.hide();
    fractal_button.hide();
    n_value_slider.hide();
    left_value_slider.hide();
    right_value_slider.hide();
}
