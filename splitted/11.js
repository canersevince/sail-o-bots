

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
    rotate(sin(frameCount / 50) / 8);
    image(planet, WIDTH / 8 - mouseX / 15, HEIGHT / 10 - mouseY / 15, WIDTH / 10, WIDTH / 10);
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


    robot.update();
    robot.draw();

    boat(WIDTH / 2, HEIGHT / 2);


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
    ellipse(WIDTH / 1.25, HEIGHT / 4, ellipse1$ * sin(frameCount / 100), ellipse1$ * sin(frameCount / 100));
    ellipse(WIDTH / 1.25, HEIGHT / 4, ellipse2$ * sin(-frameCount / 100), ellipse2$ * sin(-frameCount / 100));
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
    noStroke();
    rotate(pendulumAngle / 2);
    //scale(0.2);
    translate(x + mouseX / 5, y);

    image(gemi, WIDTH / 8 - mouseX / 15, HEIGHT / 3 - mouseY / 15, WIDTH / 5, HEIGHT / 10);
    pop();
}


function getMetadata() {
    const glasses = [
        ["Chad Shades", "Tea Shades"],
        ["Contact Lenses"],
        ["Ultra Mega Hyper Intergalactic Shades"],
        ["Skewed Spectacles",
            "Sun Readers",
            "Nerd Glasses",
            "South Beach",
            "Round Shades",
            "Wayfarer",
            "Aviator",
            "Classic Shades",
            "Anaglyph 3D Glasses",
            "Dark Phoenix",
            "Frost Shades",
            "Big Shades",
            "Small Shades",
            "Thug Life Sunglasses",
            "Party Sunglasses",
            "Low Bridge Glasses",
            "Nerdy",
            "Heart Shades"]]
    const mouths = [
        [
            "Displeased",
            "FeelsGoodMan",
            "Poggers",
            "Sadge"],
        ["FeelsOkayMan"], ["ResidentSleeper"],
        [
            "Goblin",
            "Goofy",
            "Drip",
            "Womanizer",
            "Creepy",
            "Dumped",
            "Infant",
            "Dental Braced",
            "Soulless",
            "Geek"
        ]
    ]
    let planetlist$ = ["Earth", "Mars", "Moon", "Neptune", "Saturn", "Uranus"]
    let clarities = ["Polished", "Noisy", "Rusty"]

    const noiseLevel = availableNoiseLevels.indexOf(pitircik);
    return {
        clarity: clarities[noiseLevel],
        mouth: mouths[mouth][mouth === 0 ? mouthVector : mouth === 3 ? mouthSvg : 0],
        glasses: glasses[glassType][glassType === 3 ? glassSVG : glassType === 0 ? glassVector : 0],
        planet: planetlist$[selectedPlanet]
    }
}


console.log(features)

