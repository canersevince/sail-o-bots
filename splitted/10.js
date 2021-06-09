

let bg;
let seedNum;
let noiseImg;
const BGCOL = "#1d5ae7";
var angle = 0;
var noiseX;
var noiseY;
var noiseF;
var f = 0.0;
var colorState;
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;
var DEFAULT_SIZE = 1000;
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var DIM = Math.min(WIDTH, HEIGHT);
var M = DIM / DEFAULT_SIZE;
let ellipse1$ = HEIGHT / 5 + 30
let ellipse2$ = HEIGHT / 5 + 60
let mouth = Rseed.random_int(0, 3)
let mouthVector = Rseed.random_int(0, 3)
let mouthSvg = Rseed.random_int(0, 9)
let glassType = Rseed.random_int(0, 3)
let glassSVG = Rseed.random_int(0, 17)
let glassVector = Rseed.random_int(0, 1)
let features  = getMetadata()
window.features = features
function setup() {
    createCanvas(WIDTH, HEIGHT);
    rect(100 * M, 500 * M, 50 * M, 50 * M);

    smooth(8);

    noiseImg = createGraphics(WIDTH, HEIGHT);
    noiseImg.noStroke();

    noiseImg.fill(0, 150);


    for (let i = 0; i < WIDTH * HEIGHT * 0.3; i++) {
        let x = Rseed.random_between(0, WIDTH);
        let y = Rseed.random_between(0, HEIGHT);
        let d = noise(0.01 * x, 0.01 * y) * 0.5 + 1;
        noiseImg.ellipse(x, y, d / 1.75, d / 1.75);
    }


    ellipseMode(CENTER);
    seedNum = int(Rseed.random_between(0, 10000));

    bg = createGraphics(WIDTH, HEIGHT);
    bg.noStroke();
    for (let i = 0; i < 300000; i++) {
        let x = Rseed.random_between(0, WIDTH);
        let y = Rseed.random_between(0, HEIGHT);
        let s = noise(x * 0.01, y * 0.01) * 2;
        bg.fill(255, 30);
        bg.rect(x, y, s, s);
    }

    overAllTexture = createGraphics(WIDTH, HEIGHT);
    overAllTexture.loadPixels();
    for (var i = 0; i < WIDTH + 50; i++) {
        for (var o = 0; o < HEIGHT + 50; o++) {
            overAllTexture.set(i, o, color(100, noise(i / 3, o / 3, i * o / 50) * Rseed.random_choice([0, 50, 100])));
        }
    }
    overAllTexture.updatePixels();
    noiseX = Rseed.random_between(0, 100);
    noiseY = Rseed.random_between(0, 100);
    noiseF = Rseed.random_between(0, 100);
    colorState = 0;


    addRobot(WIDTH / 2, HEIGHT / 2);

    sunColor = color(Rseed.random_choice(colorYellow));
    mountainColor = color(Rseed.random_choice(colorBlue));

    c1 = color(29, 90, 231);
    c2 = color(255, 209, 102);
    c3 = color(128, 255, 219);


}




