
let N_VALUE_MAX = 15;

function slider_setup() {
    create_n_value_slider();
}

function create_n_value_slider() {
    n_value_slider = createSlider(1, N_VALUE_MAX, 1, 1);
    n_value_slider.position(100, 10);
    n_value_slider.size(60, 30);
    n_value_slider.style('width', '80px');

}
