
let N_VALUE_MAX = 12;

function slider_setup() {
    create_n_value_slider();
    create_left_angle_slider();
    create_right_angle_slider();
}

function create_n_value_slider() {
    n_value_slider = createSlider(1, N_VALUE_MAX, 1, 1);
    n_value_slider.position(100, 10);
    n_value_slider.size(60, 30);
    n_value_slider.style('width', '80px');
}

function create_left_angle_slider() {
    left_value_slider = createSlider(0, PI / 2, PI / 4, 0);
    left_value_slider.position(200, 10);
    left_value_slider.size(60, 30);
    left_value_slider.style('width', '80px');
}

function create_right_angle_slider() {
    right_value_slider = createSlider(0, PI / 2, PI / 4, 0);
    right_value_slider.position(300, 10);
    right_value_slider.size(60, 30);
    right_value_slider.style('width', '80px');
}
