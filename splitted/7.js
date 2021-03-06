

class Robot {
    botGlasses = null;
    botLips = null;

    constructor(args) {
        let def = {
            p: createVector(WIDTH / 2, HEIGHT / 2),
            v: createVector(0, 0),
            a: createVector(0, 0),
            randomId: Rseed.random_int(0, 500),
            mouth: mouth,
            mouthVector: mouthVector,
            mouthSvg: mouthSvg,
            glassType: glassType,
            glassSVG: glassSVG,
            glassVector: glassVector,
            //    glassSize: createVector(Rseed.random_between(90, 100), Rseed.random_between(80, 90)),
            glassSize: createVector(Rseed.random_between(WIDTH/10, WIDTH/9), Rseed.random_between(WIDTH/11, WIDTH/10)),
            //    glassSizeCrazy: createVector(Rseed.random_between(100, 120), Rseed.random_between(120, 180)),
            glassSizeCrazy: createVector(Rseed.random_between(WIDTH/9, WIDTH/8), Rseed.random_between(WIDTH/6, WIDTH/5)),
            //    size: createVector(Rseed.random_between(300, 425), Rseed.random_between(275, 425)),
            size: createVector(Rseed.random_between(WIDTH/3, WIDTH/2), Rseed.random_between(WIDTH/3, WIDTH/2)),
            //    antennaSize: createVector(Rseed.random_between(5 * 4.5, 20 * 4.5), Rseed.random_between(5 * 4.5, 30 * 4.5)),
            antennaSize: createVector(Rseed.random_between(WIDTH/30, WIDTH/(7.5)), Rseed.random_between(WIDTH/30, WIDTH/5)),
            //    earSize: createVector(Rseed.random_between(10, 30), Rseed.random_between(20, 40)),
            earSize: createVector(Rseed.random_between(WIDTH/90, WIDTH/30), Rseed.random_between(WIDTH/45, WIDTH/25)),
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
                //    Rseed.random_between(45, 90),
                Rseed.random_between(WIDTH/15, WIDTH/7.5),
                //    Rseed.random_between(45, 90)),
                Rseed.random_between(WIDTH/15, WIDTH/7.5)),
            ang: Rseed.random_between(-0.1, 0.1),
            //corner: Rseed.random_choice([0, 0, 5, 20, 50]),
            corner: Rseed.random_choice([0, 0, WIDTH/180, WIDTH/45, WIDTH/18]),
            //strokeWeight: Rseed.random_between(4 * 4, 8 * 4),
            strokeWeight: Rseed.random_between(WIDTH/45, WIDTH/22.5),
            //glassStrokeWeight: Rseed.random_between(15, 25),
            glassStrokeWeight: Rseed.random_between(WIDTH/45, WIDTH/30),
        };

        Object.assign(def, args);
        Object.assign(this, def);
        console.log({def})
        this.botGlasses = loadImage("data:image/svg+xml;base64," + btoa(combinedGlasses[def.glassSVG]))
        this.botLips = loadImage("data:image/svg+xml;base64," + btoa(allLips[def.mouthSvg]))
    }

    draw() {
        push();

        translate(this.p.x, this.p.y);
        /*if(HEIGHT < 600){
            scale(0.5)
        }*/
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
        //circle(-this.size.x / 2 - 5 * 4.5, 0, this.earSize.x * 3, this.eyeSizes.y * 3);
        circle(-this.size.x / 2 - this.p.x / 15, 0, this.earSize.x * 3, this.eyeSizes.y * 3);

        fill(this.colors[5]);
        //circle(this.size.x / 2 + 5 * 4.5, 0, this.earSize.x * 3, this.eyeSizes.x * 3);
        circle(this.size.x / 2 + this.p.x / 15, 0, this.earSize.x * 3, this.eyeSizes.x * 3);
        pop();


        rect(0, 0, this.size.x, this.size.y, this.corner);
        noStroke();


        stroke(this.colors[1]);
        strokeWeight(this.strokeWeight);
        fill(0);
        // circle(-18 * 4.5, 0, this.eyeSizes.x - sin(frameCount / 50 + mouseY / 20) * 2 * 4.5);
        circle(-WIDTH/10.9, 0, this.eyeSizes.x - sin(frameCount / 50 + mouseY / 20) * this.p.x / 50);

        stroke(this.colors[2]);
        strokeWeight(this.strokeWeight / 2);
        // circle(18 * 4.5, 0, this.eyeSizes.x + sin(frameCount / 50 + mouseY / 20) * 2 * 4.5);
        circle(WIDTH/10.9, 0, this.eyeSizes.x + sin(frameCount / 50 + mouseY / 20) * this.p.x / 50);
        noStroke();
        fill(this.colors[3]);


        push();
        fill(this.colors[4]);
        rotate(sin(frameCount / 30) / 6);
        //rect(18 * 4.5, -18 * 4.5 + sin(frameCount / 50 + this.p.y - mouseX / 25) * 5, this.eyeSizes.x * 1.5, 30);
        rect(WIDTH/10.9, -WIDTH/10.9 + sin(frameCount / 50 + this.p.y - mouseX / 25) * 5, this.eyeSizes.x * 1.3, this.p.x/15);
        pop();


        push();
        fill(this.colors[6]);
        rotate(sin(frameCount / 20 + 1) / 5);
        // rect(-18 * 4.5, -18 * 4.5 + sin(frameCount / 20 + mouseY / 25 + this.p.y) * 5, this.eyeSizes.x, 30);
        rect(-WIDTH/10.9, -WIDTH/10.9 + sin(frameCount / 20 + mouseY / 25 + this.p.y) * 5, this.eyeSizes.x, this.p.x/15);
        pop();


        fill(this.colors[3]);
        rect(0, -this.size.y / 2 + sin(frameCount / 20 + 0.5) * 5, this.antennaSize.x, this.antennaSize.y);


        fill(this.colors[5]);

        //circle(0, this.size.y / 10 + sin(frameCount / 20) * 5, 20, 20);
        circle(0, this.size.y / 10 + sin(frameCount / 20) * 5, WIDTH/45, WIDTH/45);


        push();
        switch (int(this.mouth)) {
            case 0:
                switch (this.mouthVector) {
                    case 0:
                        rotate(sin(frameCount / 10 + mouseX / 50 + mouseY / 50) / 5);
                        fill(this.colors[6]);
                        //rect(0, this.size.y / 3, this.size.x / 2, 5 * 4.5, 30);
                        rect(0, this.size.y / 3, this.size.x / 2, this.p.x/15, this.p.x/15);
                        break;
                    case 1:
                        rotate(sin(frameCount / 10 + mouseX / 50 + mouseY / 50) / 5);
                        noStroke();
                        fill(this.colors[7]);
                        //arc(0, this.size.y / 4, 160, 120, 0, PI, CHORD);
                        arc(0, this.size.y / 4, WIDTH/5.5, this.p.x/4, 0, PI, CHORD);
                        break;
                    case 2:
                        noStroke();
                        fill(this.colors[8]);
                        // arc(0, this.size.y / 3, 120 - sin(frameCount / 50) * 30, 80, 0, TWO_PI, CHORD);
                        arc(0, this.size.y / 3, this.p.x/4 - sin(frameCount / 50) * this.p.x/15, WIDTH/11, 0, TWO_PI, CHORD);
                        break;
                    case 3:
                        stroke(this.colors[2]);
                        noFill();
                        // arc(0, this.size.y / 2.5, 120, 70 - sin(frameCount / 50) * 10, PI, TWO_PI);
                        arc(0, this.size.y / 2.5, this.p.x/4, WIDTH/11.5 - sin(frameCount / 50) * this.p.x/45, PI, TWO_PI);
                        //  arc(0, this.size.y/4, 120-sin(frameCount/50)*30, 80, 0, PI, TWO_PI);
                        break;
                }
                break
            case 1:
                stroke(this.colors[2]);
                noFill();
                // arc(0, this.size.y / 4, 120 - sin(frameCount / 50) * 30, 80, 0, PI, TWO_PI);
                arc(0, this.size.y / 4, this.p.x/4 - sin(frameCount / 50) * this.p.x/15, WIDTH/11, 0, PI, TWO_PI);
                break;
            case 2:
                rotate(sin(frameCount / 10 + mouseX / 50 + mouseY / 50) / 5);
                fill(this.colors[6]);
                // rect(0, this.size.y / 3, this.size.x / 4, 5 * 4.5, 30);
                rect(0, this.size.y / 3, this.size.x / 4, this.p.x / 15, this.p.x/15);
                break;
            case 3:
                image(this.botLips, -WIDTH/12, WIDTH/10.2, WIDTH/6, WIDTH/16.5);
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
                        //rect(-81, 0, this.glassSize.x, this.glassSize.y, this.corner);
                        rect(-WIDTH/10.9, 0, this.glassSize.x, this.glassSize.y, this.corner);
                        rect(WIDTH/10.9, 0, this.glassSize.x, this.glassSize.y, this.corner);
                        fill(this.colors[9]);
                        noStroke();
                        //rect(0, 0, 60, 15, this.corner);
                        rect(0, 0, this.p.x/7.5, this.p.x/30, this.corner);
                        break;
                    case 1:
                        rotate(-sin(frameCount / 10 + mouseX / 50 + mouseY / 50) / 10);
                        stroke(this.colors[9]);
                        fill(123, 44, 191, 100);
                        //circle(-81, 0, 100);
                        circle(-WIDTH/10.9, 0, WIDTH/9);
                        //circle(81, 0, 100);
                        circle(WIDTH/10.9, 0, WIDTH/9);
                        fill(this.colors[9]);
                        noStroke();
                        //rect(0, 0, 60, 15, this.corner);
                        rect(0, 0, this.p.x/7.5, this.p.x/30, this.corner);
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
                //rect(-81, 0, this.glassSizeCrazy.x, this.glassSizeCrazy.y, this.corner);
                rect(-WIDTH/10.9, 0, this.glassSizeCrazy.x, this.glassSizeCrazy.y, this.corner);
                //rect(81, 0, this.glassSizeCrazy.x, this.glassSizeCrazy.y, this.corner);
                rect(WIDTH/10.9, 0, this.glassSizeCrazy.x, this.glassSizeCrazy.y, this.corner);
                fill(this.colors[9]);
                noStroke();
                //rect(0, 0, 60, 15, this.corner);
                rect(0, 0, this.p.x/7.5, this.p.x/30, this.corner);
                break;
            case 3:
                rotate(-sin(frameCount / 10 + mouseX / 50 + mouseY / 50) / 10);
                if(this.glassSVG === 17) {
                    image(this.botGlasses, -WIDTH/6, -WIDTH/24, WIDTH/3, WIDTH/8);
                } else {
                    image(this.botGlasses, -WIDTH/6, -WIDTH/24, WIDTH/3, WIDTH/10);
                }
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


