
function Branch(front, end) {
    this.front = front;
    this.end = end;
    this.finished = false;

    this.show = function() {
        stroke(100, 70, 30);
        line(this.front.x, this.front.y, this.end.x, this.end.y);
    }

    this.hide = function() {
        stroke(235, 170, 120);
        line(this.front.x, this.front.y, this.end.x, this.end.y);
    }

    let angright = right_value_slider.value();
    let angleft = -left_value_slider.value();

    this.branchRight = function() {
        let direction = p5.Vector.sub(this.end, this.front);

        direction.rotate(angright);
        direction.mult(0.67);

        let new_end = p5.Vector.add(this.end, direction);
        return new Branch(this.end, new_end);
    }

    this.branchLeft = function() {
        let direction = p5.Vector.sub(this.end, this.front);

        direction.rotate(angleft);
        direction.mult(0.67);


        let new_end = p5.Vector.add(this.end, direction);
        return new Branch(this.end, new_end);
    }

    this.sway = function(sway) {
        this.end.x += random(-1, 1);
        this.end.y += random(-1, 1);
    }
}

let tree = [];

function fractal_tree_setup() {
    let a = createVector(width / 2, height);
    let b = createVector(width / 2, height - 100);
    let root = new Branch(a, b);

    tree[0] = root;

    for (let i = 0; i < 2**(N_VALUE_MAX-1); i++) {
        if (!tree[i].finished) {
            tree.push(tree[i].branchRight());
            tree.push(tree[i].branchLeft());
        }
        tree[i].finished = true;
    }
}

function fractal_tree() {
    let n = n_value_slider.value();
    tree[0].show();
    for (let i = 0; i < 2**(N_VALUE_MAX-1); i++) {
        if (i < 2**n - 1) {
            tree[i].show();
        } else {
            tree[i].hide();
        }
        // tree[i].sway();
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
