
function fractal_tree() {
    fractal_draw();
    let n = n_value_slider.value() - 1;
    let angL = -left_value_slider.value();
    let angR = right_value_slider.value();

    grow_tree(HEIGHT / 4, n, angL, angR);
}

function grow_tree(len, n, angL, angR) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (!(n === 0)) {
        push();
        rotate(angR);
        grow_tree(len * 2 / 3, n-1, angL, angR);
        pop();

        push();
        rotate(angL);
        grow_tree(len * 2 / 3, n-1, angL, angR);
        pop();
    }
}


function fractal_show() {
    back_button.show();
    n_value_slider.show();
    left_value_slider.show();
    right_value_slider.show();
    // add all tidbits on fractal screen
}

function fractal_draw() {
    background(235, 170, 120);
    create_upper(color(200, 120, 40));
    translate(WIDTH / 2, height);
    stroke(150, 90, 30);
}
