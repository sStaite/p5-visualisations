
function button_setup() {
    create_back_button();
    create_fractal_button();
    // and any other buttons
}

function create_back_button() {
    back_button = createImg('images/back.png', 'back');
    back_button.position(10, 10);
    back_button.size(60, 30);
    back_button.mousePressed(home_page_setup);

    back_button.hide();
}

function create_fractal_button() {
    fractal_button = createImg('images/fractal_tree.png', 'fractal_tree');
    fractal_button.position(0, 0);
    fractal_button.size(200, 200);
    fractal_button.mousePressed(changeStateTo_fractal_tree);
}

function changeStateTo_fractal_tree() {
    hide_all();
    fractal_show();
    state = "fractal_tree";

    background(235, 170, 120);
    fractal_tree_setup();

    create_upper();

    create_back_button();
}
