
function fractal_tree() {
    fractal_draw();
    let n = n_value_slider.value();
    let angL = -left_value_slider.value();
    let angR = right_value_slider.value();

    grow_tree(100, n, angL, angR);
}

function grow_tree(len, n, angL, angR) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (!(n === 0)) {
        push();
        rotate(angR);
        grow_tree(len * 0.67, n-1, angL, angR);
        pop();

        push();
        rotate(angL);
        grow_tree(len * 0.67, n-1, angL, angR);
        pop();
    }
}


function create_upper() {
    fill(color(200, 120, 40)); // autumn orange
    noStroke();
    rect(0, 0, 400, 50);
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
    create_upper();
    translate(200, height);
    stroke(150, 90, 30);
}
