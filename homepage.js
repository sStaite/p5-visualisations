
function home_page() {
    background(51);
}

function home_page_setup() {
    let button;
    button = createButton('Change colour');
    button.position(20, 20);
    button.mousePressed(change_state);
}

function change_state() {
    let val = random(255);
    background(val);
}
