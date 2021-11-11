let tree = [];

function setup() {
	canv = createCanvas(400, 400);

	let a = createVector(width / 2, height);
	let b = createVector(width / 2, height - 100);
	let root = new Branch(a, b);

	tree[0] = root;
}

function mousePressed() {
	for (let i = tree.length - 1; i >= 0; i--) {
		if (!tree[i].finished) {
			tree.push(tree[i].branchRight());
			tree.push(tree[i].branchLeft());
		}
		tree[i].finished = true;
	}
}

function keyTyped() {
	if (key === 's') {
		save(canv, 'wobble_tree.jpg');
	}
}


function draw() {
	background(235, 170, 120);
	tree[0].show();

	for (let i = 0; i < tree.length; i++) {
		tree[i].show();
		// tree[i].sway();
	}

}
