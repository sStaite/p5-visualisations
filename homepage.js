
let fractal_button;

function home_page_setup() {
    create_fractal_button();
}

function changeState_fractal_tree() {
    state = "fractal_tree";
    fractal_button.hide();
}

function changeState_home_page() {
    state = "home_page";
    back_button.hide();
    fractal_button.show();
}

function create_fractal_button() {
    fractal_button = createImg('images/fractal_tree.png');
    fractal_button.position(0, 0);
    fractal_button.size(200, 200);
    fractal_button.mousePressed(changeState_fractal_tree);
}

function home_page() {
    background(51);
    fractal_button.mousePressed(changeState_fractal_tree);
}
