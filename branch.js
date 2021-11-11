
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
