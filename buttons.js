
function button_setup() {
    create_back_button();
    create_fractal_button();
    create_mandelbrot_button();
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
    fractal_button.size(WIDTH / 3, HEIGHT / 3);
    fractal_button.mousePressed(changeStateTo_fractal_tree);
}

function changeStateTo_fractal_tree() {
    state = "fractal_tree";

    hide_all();
    fractal_show();
    fractal_draw();

    create_back_button();
}




function create_mandelbrot_button() {
    mandelbrot_button = createImg('images/mandelbrot.png', 'mandelbrot_set');
    mandelbrot_button.position(WIDTH / 3, 0);
    mandelbrot_button.size(WIDTH / 3, HEIGHT / 3);
    mandelbrot_button.mousePressed(changeStateTo_mandelbrot);
}

function changeStateTo_mandelbrot() {
    state = "mandelbrot";

    hide_all();
    mandelbrot_show();
    mandelbrot_draw();

    create_back_button();
}
