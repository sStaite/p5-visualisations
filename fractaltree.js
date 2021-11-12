
function Branch(front, end) {
    this.front = front;
    this.end = end;
    this.finished = false;

    this.show = function() {
        stroke(100, 70, 30);
        line(this.front.x, this.front.y, this.end.x, this.end.y);
    }

    this.branchRight = function() {
        let direction = p5.Vector.sub(this.end, this.front);
        direction.rotate(PI / 3);
        direction.mult(0.67);

        let new_end = p5.Vector.add(this.end, direction);
        return new Branch(this.end, new_end);
    }

    this.branchLeft = function() {
        let direction = p5.Vector.sub(this.end, this.front);
        direction.rotate(-PI / 8);
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
}

function fractal_tree() {
    background(235, 170, 120);
    fractal_tree_setup();

    tree[0].show();

    for (let i = 0; i < tree.length; i++) {
        tree[i].show();
        // tree[i].sway();
    }
}

function fractal_tree_mousePressed() {
    for (let i = tree.length - 1; i >= 0; i--) {
        if (!tree[i].finished) {
            tree.push(tree[i].branchRight());
            tree.push(tree[i].branchLeft());
        }
        tree[i].finished = true;
    }
}
