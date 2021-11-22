
var mult = 1;

var SCALED_W = WIDTH / mult;
var SCALED_H = HEIGHT / mult;
var MAX_ITER = 100;

var colour_type = "rgb";
const hsb_colours = [[255, 0, 0], [255, 165, 0], [255, 255, 0], [0, 128, 0],
    [0, 0, 255], [75, 0, 130], [238, 130, 238]];


function mandelbrot() {
    mandelbrot_draw();

    loadPixels();
    pixelDensity(1);

    for (let x=0; x < SCALED_W; x++) {
        for (let y= SCALED_H / 12; y < SCALED_H; y++) {

            let c_real = map(x, 0, SCALED_W, -2.2, 1);
            let c_imag = map(y, SCALED_H / 12, SCALED_H, -1.56, 1.56);

            let a = c_real;
            let b = c_imag;

            let n = 0;
            while (n < MAX_ITER) {
                let a_temp = a*a - b*b;
                let b_temp = 2*a*b;

                a = a_temp + c_real;
                b = b_temp + c_imag;

                if (a*a + b*b > 64) {
                    break;
                }
                n++;
            }

            let p_bright = sqrt(n / MAX_ITER) ** (1/2) * 255;

            let curr_pix = (x + y * SCALED_H) * 4;

            if (n == MAX_ITER) {
                pixels[curr_pix]     = 0
                pixels[curr_pix + 1] = 0
                pixels[curr_pix + 2] = 0
            } else if (colour_type === "rgb") {
                pixels[curr_pix]     = p_bright * 0.4;
                pixels[curr_pix + 1] = p_bright * 0.2;
                pixels[curr_pix + 2] = p_bright * 0.6;
            } else if (colour_type === "hsb") {
                let i = n % 7;
                pixels[curr_pix]     = hsb_colours[i][0];
                pixels[curr_pix + 1] = hsb_colours[i][1];
                pixels[curr_pix + 2] = hsb_colours[i][2];
            }
            pixels[curr_pix + 3] = 255;

        }
    }
    updatePixels();


}



function mandelbrot_show() {
    back_button.show();
    rainbow_button.show();
    rgb_button.show();

}

function mandelbrot_draw() {
    background(0);
    create_upper(color(100, 50, 150)); // purple
}
