class Random {
    constructor(seed) {
        this.seed = seed;
    }
    random_dec() {
        this.seed ^= this.seed << 13;
        this.seed ^= this.seed >> 17;
        this.seed ^= this.seed << 5;
        return ((this.seed < 0 ? ~this.seed + 1 : this.seed) % 1000) / 1000;
    }
    random_between(a, b) {
        return a + (b - a) * this.random_dec();
    }
    random_int(a, b) {
        return Math.floor(this.random_between(a, b+1));
    }
    random_choice(x) {
        return x[Math.floor(this.random_between(0, x.length * 0.99))];
    }
}
class Robot {
    botGlasses = null;
    botLips = null;
    constructor(args) {
        let def = {
            p: createVector(WIDTH / 2, HEIGHT / 2),
            v: createVector(0, 0),
            a: createVector(0, 0),
            randomId: Rseed.random_int(0, 500),
            mouth: Rseed.random_int(0, 3),
            mouthVector: Rseed.random_int(0, 3),
            mouthSvg: Rseed.random_int(0, 9),
            glassType: Rseed.random_int(0, 3),
            glassPng: Rseed.random_int(0, 13),
            glassVector: Rseed.random_int(0, 1),
            glassSize: createVector(Rseed.random_between(90, 100), Rseed.random_between(80, 90)),
            glassSizeCrazy: createVector(Rseed.random_between(100, 120), Rseed.random_between(120, 180)),
            size: createVector(Rseed.random_between(300, 425), Rseed.random_between(275, 425)),
            antennaSize: createVector(Rseed.random_between(5 * 4.5, 20 * 4.5), Rseed.random_between(5 * 4.5, 30 * 4.5)),
            earSize: createVector(Rseed.random_between(10, 30), Rseed.random_between(20, 40)),
            colors: [
                Rseed.random_choice(colors),
                Rseed.random_choice(colors1),
                Rseed.random_choice(colors2),
                Rseed.random_choice(colors3),
                Rseed.random_choice(colors4),
                Rseed.random_choice(colors5),
                Rseed.random_choice(colors6),
                Rseed.random_choice(colorRed),
                Rseed.random_choice(colorSofts),
                Rseed.random_choice(glassColors),
            ],
            eyeSizes: createVector(
                Rseed.random_between(10 * 4.5, 20 * 4.5),
                Rseed.random_between(10 * 4.5, 20 * 4.5)),
            ang: Rseed.random_between(-0.1, 0.1),
            corner: Rseed.random_choice([0, 0, 5, 20, 50]),
            strokeWeight: Rseed.random_between(4 * 4, 8 * 4),
            glassStrokeWeight: Rseed.random_between(15, 25),
        };

        this.botGlasses = loadImage(`/glasses/gozluk${def.glassPng}.png`)
        this.botLips = loadImage(`/lips/${def.mouthSvg}.svg`)
        Object.assign(def, args);
        Object.assign(this, def);
        console.log({object: this})
    }


    draw() {
        push();
        translate(this.p.x, this.p.y);

        rotate(this.ang + sin(mouseX / 200 + frameCount / 50 + this.p.x + this.p.y) / 4);

        rectMode(CENTER);
        ellipseMode(CENTER);
        fill(this.colors[0]);
        strokeWeight(this.strokeWeight / 2);
        if (this.colors[0] == "#0c0a3e") {
            stroke(255);
        }

        push();

        fill(this.colors[5]);

        circle(-this.size.x / 2 - 5 * 4.5, 0, this.earSize.x * 3, this.eyeSizes.y * 3);


        fill(this.colors[5]);

        circle(this.size.x / 2 + 5 * 4.5, 0, this.earSize.x * 3, this.eyeSizes.x * 3);
        pop();


        rect(0, 0, this.size.x, this.size.y, this.corner);
        noStroke();


        stroke(this.colors[1]);
        strokeWeight(this.strokeWeight);
        fill(0);
        circle(-18 * 4.5, 0, this.eyeSizes.x - sin(frameCount / 50 + mouseY / 20) * 2 * 4.5);

        stroke(this.colors[2]);
        strokeWeight(this.strokeWeight / 2);
        circle(18 * 4.5, 0, this.eyeSizes.x + sin(frameCount / 50 + mouseY / 20) * 2 * 4.5);
        noStroke();
        fill(this.colors[3]);


        push();
        fill(this.colors[4]);
        rotate(sin(frameCount / 30) / 6);
        rect(18 * 4.5, -18 * 4.5 + sin(frameCount / 50 + this.p.y - mouseX / 25) * 5, this.eyeSizes.x * 1.5, 30);
        pop();


        push();
        fill(this.colors[6]);
        rotate(sin(frameCount / 20 + 1) / 5);
        rect(-18 * 4.5, -18 * 4.5 + sin(frameCount / 20 + mouseY / 25 + this.p.y) * 5, this.eyeSizes.x, 30);
        pop();


        fill(this.colors[3]);
        rect(0, -this.size.y / 2 + sin(frameCount / 20 + 0.5) * 5, this.antennaSize.x, this.antennaSize.y);


        fill(this.colors[5]);

        circle(0, this.size.y / 10 + sin(frameCount / 20) * 5, 20, 20);


        push();
        switch (int(this.mouth)) {
            case 0:
                switch (this.mouthVector) {
                    case 0:
                        rotate(sin(frameCount / 10 + mouseX / 50 + mouseY / 50) / 5);
                        fill(this.colors[6]);
                        rect(0, this.size.y / 3, this.size.x / 2, 5 * 4.5, 30);
                        break;
                    case 1:
                        rotate(sin(frameCount / 10 + mouseX / 50 + mouseY / 50) / 5);
                        noStroke();
                        fill(this.colors[7]);
                        arc(0, this.size.y / 4, 160, 120, 0, PI, CHORD);
                        break;
                    case 2:
                        noStroke();
                        fill(this.colors[8]);
                        arc(0, this.size.y / 3, 120 - sin(frameCount / 50) * 30, 80, 0, TWO_PI, CHORD);
                        break;
                    case 3:
                        stroke(this.colors[2]);
                        noFill();
                        arc(0, this.size.y / 2.5, 120, 70 - sin(frameCount / 50) * 10, PI, TWO_PI);
                        //  arc(0, this.size.y/4, 120-sin(frameCount/50)*30, 80, 0, PI, TWO_PI);
                        break;
                }
                break
            case 1:
                stroke(this.colors[2]);
                noFill();
                arc(0, this.size.y / 4, 120 - sin(frameCount / 50) * 30, 80, 0, PI, TWO_PI);
                break;
            case 2:
                rotate(sin(frameCount / 10 + mouseX / 50 + mouseY / 50) / 5);
                fill(this.colors[6]);
                rect(0, this.size.y / 3, this.size.x / 4, 5 * 4.5, 30);
                break;
            case 3:
                scale(0.4);
                image(this.botLips, -150, 200);
                break;
        }
        pop();


        push();
        switch (int(this.glassType)) {
            case 0:
                switch (this.glassVector) {
                    case 0:
                        rotate(-sin(frameCount / 10 + mouseX / 50 + mouseY / 50) / 10);
                        stroke(this.colors[9]);
                        strokeWeight(this.glassStrokeWeight);
                        fill(123, 44, 191, 100);
                        rect(-81, 0, this.glassSize.x, this.glassSize.y, this.corner);
                        rect(81, 0, this.glassSize.x, this.glassSize.y, this.corner);
                        fill(this.colors[9]);
                        noStroke();
                        rect(0, 0, 60, 15, this.corner);
                        break;
                    case 1:
                        rotate(-sin(frameCount / 10 + mouseX / 50 + mouseY / 50) / 10);
                        stroke(this.colors[9]);
                        fill(123, 44, 191, 100);
                        circle(-81, 0, 100);
                        circle(81, 0, 100);
                        fill(this.colors[9]);
                        noStroke();
                        rect(0, 0, 60, 15, this.corner);
                        break;
                }
                break
            case 1:
                break;
            case 2:
                rotate(-sin(frameCount / 10 + mouseX / 50 + mouseY / 50) / 10);
                stroke(this.colors[9]);
                strokeWeight(this.glassStrokeWeight);
                fill(123, 44, 191, 100);
                rect(-81, 0, this.glassSizeCrazy.x, this.glassSizeCrazy.y, this.corner);
                rect(81, 0, this.glassSizeCrazy.x, this.glassSizeCrazy.y, this.corner);
                fill(this.colors[9]);
                noStroke();
                rect(0, 0, 60, 15, this.corner);
                break;
            case 3:
                rotate(-sin(frameCount / 10 + mouseX / 50 + mouseY / 50) / 10);
                image(this.botGlasses, -275, -275);
                break;
            default:
                break;
        }
        pop();
        pop();
    }

    update() {

    }
}


/*
let tokenData = {"hash":"0x11ac128f8b54949c12d04102cfc01960fc496813cbc3495bf77aeed738579738","tokenId":"57000284"};
let hash = tokenData.hash;
*/

let seed = parseInt(tokenData.hash.slice(0, 16), 16);
let R = new Random(tokenData);
let Rseed = new Random(seed);


let colors = "EEE77E-F0DA45-FBB040-B86228-D16562-D15054-A51E22-F1B7C9-E17FA0-B54365-670917-A789A6-603E6F-2C1D52-241537-67B8BE-13999F-0B6976-004554-8FD0BA-21B18A-087561-024235".split("-").map(a => `#${a}`);
let colors1 = "EAB94E-DD683B-D53C52-B5347E-603387-2F69AC-449F9C-7AB551".split("-").map(a => `#${a}`);
let colors2 = "F61067-5E239D-00F0B5-6DECAF-F4F4ED-FAA300-E57C04-FF6201".split("-").map(a => `#${a}`);
let colors3 = "8FD0BA-21B18A-087561-024235".split("-").map(a => `#${a}`);
let colors4 = "F63E02-FAA300-E57C04-FF6201".split("-").map(a => `#${a}`);
let colors5 = "E6D957-D8B07C-BA7B89-7A4E91-594D91-AC323C-CE5545-CF683A-DB9638-E2AD54".split("-").map(a => `#${a}`);
let colors6 = "F7F8F8-F4D498-EDA98E-E27C81-AA608C-724B84-543D6D-374A8A-3A6E96-4C97B0-5DBBC3-96D4C5-CAE7D4".split("-").map(a => `#${a}`);

let colorYellow = ["#ff7b00", "#ff8800", "#ff9500", "#ffa200", "#ffaa00", "#ffb700", "#ffc300", "#ffd000", "#ffdd00", "#ffea00"];
let sunColor;
let colorBlue = ["#03045e", "#023e8a", "#0077b6", "#0096c7", "#00b4d8", "#48cae4", "#90e0ef", "#ade8f4", "#caf0f8"];
let mountainColor;

let colorRed = "641220-6e1423-85182a-a11d33-a71e34-b21e35-bd1f36-c71f37-da1e37-e01e37".split("-").map(a => `#${a}`);
let colorSofts = "FAFAFA-ffffff-eae4e9-fff1e6-fde2e4-fad2e1-e2ece9-bee1e6-f0efeb-dfe7fd-cddafd".split("-").map(a => `#${a}`);
let glassColors = "0353a4-023e7d-002855-001845-001233-33415c-5c677d-7d8597-979dac".split("-").map(a => `#${a}`);

let planets = [];
let selectedPlanet;
let planet;

function preload() {

    const loadablePlanets = ['/planets/saturn.svg',
        '/planets/earth.svg',
        '/planets/moon.svg',
        '/planets/neptune.svg',
        '/planets/uranus.svg',
        '/planets/mars.svg']
    selectedPlanet = Rseed.random_int(0, 5);
    planet = loadImage(loadablePlanets[selectedPlanet]);
}


let robots = [];
let overAllTexture;


function addRobot(x, y) {
    robots.push(new Robot({
        p: createVector(x, y)
    }));
}


let bg;
let seedNum;
let noiseImg;
const SEA = "#ffd166";
const BGCOL = "#1d5ae7";
const COL = "#268F53";

var swing = 0;
var angle = 0;

var noiseX;
var noiseY;
var noiseF;
var f = 0.0;
var colorState;


const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;


var DEFAULT_SIZE = 1000;
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var DIM = Math.min(WIDTH, HEIGHT);
var M = DIM / DEFAULT_SIZE;


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
    seedNum = int(R.random_between(0, 10000));

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
    noiseX = R.random_between(0, 100);
    noiseY = R.random_between(0, 100);
    noiseF = R.random_between(0, 100);
    colorState = 0;

    const SEA = "#ffd166";


    addRobot(WIDTH / 2, HEIGHT / 2);

    sunColor = color(Rseed.random_choice(colorYellow));
    mountainColor = color(Rseed.random_choice(colorBlue));

    c1 = color(29, 90, 231);
    c2 = color(255, 209, 102);
    c3 = color(128, 255, 219);


}


function draw() {
    randomSeed(seedNum);
    background(255, 209, 102);
    background(0);
    noStroke();



    sol(sunColor);



    push();
    fill(BGCOL);
    cloud(-10, HEIGHT / 2 - HEIGHT * 0.1, HEIGHT * 0.2);

    image(noiseImg, 0, -HEIGHT * 0.05);
    image(noiseImg, 0, -HEIGHT * 0.1);
    cloud(0, HEIGHT / 2, HEIGHT * 0.225);
    image(noiseImg, 0, 0);
    cloud(-10, HEIGHT / 2 + HEIGHT * 0.1, HEIGHT * 0.25);

    pop();



    push();
    scale(0.55);
    rotate(sin(frameCount / 50) / 8);
    image(planet, WIDTH / 3 - mouseX / 15, HEIGHT / 10 - mouseY / 15);
    pop();



    push();
    fill(mountainColor);


    setGradient(0, HEIGHT / 1.75, WIDTH, HEIGHT / 2, c1, c3, Y_AXIS);

    f += 0.015;
    var waveH = map(0, 0, WIDTH, 100, 500);
    for (var h = HEIGHT / 1.75; h < HEIGHT; h += 4) {
        beginShape();
        stroke(128, 255, 219, 90);
        fill(128, 255, 219, 30);
        var x = 0;
        var y = h + waveH * noise(noiseX, noiseY + h * 0.01, noiseF + f);
        curveVertex(x, y);
        for (var w = 0; w <= WIDTH + 20; w += 20) {
            x = w;
            y = h + waveH * noise(noiseX + w * 0.001, noiseY + h * 0.01, noiseF + f);
            curveVertex(x, y);
        }
        x = WIDTH;
        y = h + waveH * noise(noiseX + WIDTH, noiseY + h * 0.01, noiseF + f);
        curveVertex(x, y);
        endShape();
    }
    pop();



    robots.forEach(robot => {
        robot.update();
        robot.draw();


        boat(WIDTH / 2, HEIGHT / 2);

    });


    push();
    blendMode(MULTIPLY);
    image(overAllTexture, 0, 0);
    pop();


}


function sol(gunesColor) {
    gunesColor.setAlpha(255);
    push();
    fill(gunesColor);
    ellipse(WIDTH / 1.25, HEIGHT / 4, HEIGHT / 5, HEIGHT / 5);

    gunesColor.setAlpha(70);
    fill((gunesColor));
    ellipse(WIDTH / 1.25, HEIGHT / 4, R.random_between(HEIGHT / 5 + 30, HEIGHT / 5 + 50) * sin(frameCount / 100), R.random_between(HEIGHT / 5 + 30, HEIGHT / 5 + 50) * sin(frameCount / 100));

    gunesColor.setAlpha(70);
    fill((gunesColor));
    ellipse(WIDTH / 1.25, HEIGHT / 4, R.random_between(HEIGHT / 5 + 60, HEIGHT / 5 + 80) * sin(-frameCount / 100), R.random_between(HEIGHT / 5 + 60, HEIGHT / 5 + 80) * sin(-frameCount / 100));
    pop();
}


function cloud(noiseOff, baseY, maxOff) {
    let x = -maxOff;
    beginShape();
    while (x < WIDTH + maxOff) {
        let yOffset = noise(x * 0.01 + frameCount / 1000 + noiseOff, baseY) * maxOff;
        let y = baseY - yOffset;
        let dia = (noise(x * 0.01, baseY * 0.01) + 0.1) * (maxOff);
        ellipse(x, y, dia, dia);
        vertex(x, y);
        x += dia * 0.35;
    }
    vertex(WIDTH, baseY);
    vertex(WIDTH, HEIGHT);
    vertex(0, HEIGHT);
    vertex(0, baseY);
    endShape(CLOSE);
}


function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
    if (axis === Y_AXIS) {
        for (let i = y; i <= y + h; i++) {
            let inter = map(i, y, y + h, 0, 1);
            let c = lerpColor(c1, c2, inter);
            stroke(c);
            line(x, i, x + w, i);
        }
    } else if (axis === X_AXIS) {
        for (let i = x; i <= x + w; i++) {
            let inter = map(i, x, x + w, 0, 1);
            let c = lerpColor(c1, c2, inter);
            stroke(c);
            line(i, y, i, y + h);
        }
    }
}


function boat(x, y) {
    const theta = map(frameCount, 0, 60, 0, 2 * PI);
    const pendulumAngle = sin(theta) * 0.025;

    push();
    rotate(pendulumAngle);
    noStroke();
    translate(mouseX / 3, HEIGHT / 2 - HEIGHT / 4);
    fill(247, 247, 249);
    quad(293, 468, 402, 508, 368, 535, 335, 535);
    triangle(392, 431, 439, 493, 402, 508);
    triangle(402, 508, 505, 441, 469, 534);
    fill(165, 165, 165);
    triangle(424, 473, 502, 442, 434, 487);
    triangle(293, 468, 370, 477, 362, 493);
    fill(199, 200, 202);
    triangle(392, 431, 402, 508, 362, 493);
    triangle(402, 508, 467, 534, 369, 534);
    pop();
}