
let fractal_button;

function home_page_setup() {
    create_fractal_button();
}

function changeState_fractal_tree() {
    state = "fractal_tree";
    fractal_button.hide();
}

function create_fractal_button() {
    fractal_button = createButton('Fractal Tree');
    fractal_button.position(20, 20);
    fractal_button.mousePressed(changeState_fractal_tree);
}

function home_page() {
    background(51);
    fractal_button.mousePressed(changeState_fractal_tree);
}
