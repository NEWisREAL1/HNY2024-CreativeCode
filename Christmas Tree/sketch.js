let snows = [];

class snowFlake {
    constructor() {
        let x = random(width);
        this.pos = createVector(x,0);
        this.speed = createVector(0,1);
        this.r = random(4,10);
    }
    render() {
        strokeWeight(this.r + 1);
        stroke(100,150,200);
        point(this.pos.x, this.pos.y);
        this.pos.add(this.speed);
        strokeWeight(this.r);
        stroke(255);
        point(this.pos.x, this.pos.y);
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    let timeStep = millis();
    background('#99ccff');
    const w = width/2;
    const h = height/2;
    rectMode(CENTER);
    //noStroke();
    
    if (timeStep % 2 == 0) {
        snows.push(new snowFlake);
    }
    for (let snow of snows) {
        snow.render();
        if (snow.pos.y > height) {
            snows.splice(snow.index, 1);
        }
    }
    
    // wink wink
    strokeWeight(4);
    if (timeStep % 2000 < 1000) {
        stroke(255,255,0);
        line(w,h-180,w,h-200);
        line(w+25,h-165,w+42,h-175);
        line(w-25,h-165,w-42,h-175);
    }

    noStroke();
    fill(200);
    ellipse(width/2,height/2+160,350,80);

    fill(139,69,19);
    rect(width/2,height/2+100,50,100);

    fill(0,110,0);
    triangle(w-125,h+100,w+125,h+100,w,h-50);
    
    fill(0,128,0);
    triangle(w-100,h+20,w+100,h+20,w,h-100);
    
    fill(34,139,34);
    triangle(w-75,h-50,w+75,h-50,w,h-140);
    
    noFill();
    stroke(255);
    strokeWeight(3);
    // cables
    arc(w-92,h+100,69,37,PI,0);
    arc(w-31,h+100,69,37,PI,0);
    arc(w+31,h+100,69,37,PI,0);
    arc(w+92,h+100,69,37,PI,0);
    
    arc(w-65,h+20,69,37,PI,0);
    arc(w,h+20,69,37,PI,0);
    arc(w+65,h+20,69,37,PI,0);
    
    arc(w-37,h-50,69,37,PI,0);
    arc(w+37,h-50,69,37,PI,0);

    noStroke()
    // upper light
    if (timeStep % 2000 < 1000) {
        fill(255,255,0);
    }
    else {
        fill(255,0,0);
    }
    circle(w-37,h-70,15);
    circle(w+37,h-70,15);

    if (timeStep % 2000 < 1000) {
        fill(255,0,0);
    }
    else {
        fill(255,255,0);
    }
    circle(w-75,h-50,15);
    circle(w,h-50,15);
    circle(w+75,h-50,15);

    // middle light
    if (timeStep % 2000 < 1000) {
        fill(255,255,0);
    }
    else {
        fill(255,0,0);
    }
    circle(w-65,h,15);
    circle(w,h,15);
    circle(w+65,h,15);
    
    if (timeStep % 2000 < 1000) {
        fill(255,0,0);
    }
    else {
        fill(255,255,0);
    }
    circle(w-100,h+20,15);
    circle(w-35,h+20,15);
    circle(w+35,h+20,15);
    circle(w+100,h+20,15);
    
    // lower light
    if (timeStep % 2000 < 1000) {
        fill(255,255,0);
    }
    else {
        fill(255,0,0);
    }
    circle(w-92,h+80,15);
    circle(w-31,h+80,15);
    circle(w+31,h+80,15);
    circle(w+92,h+80,15);
    
    if (timeStep % 2000 < 1000) {
        fill(255,0,0);
    }
    else {
        fill(255,255,0);
    }
    circle(w-125,h+100,15);
    circle(w-62,h+100,15);
    circle(w,h+100,15);
    circle(w+62,h+100,15);
    circle(w+125,h+100,15);
    
    // star
    noStroke();
    fill(255,255,0);
    //circle(w,h-130,20);
    triangle(w,h-160,w+10,h-130,w-10,h-130);
    triangle(w+30,h-140,w,h-120,w,h-140);
    triangle(w-30,h-140,w,h-120,w,h-140);
    triangle(w+10,h-130,w+20,h-105,w,h-120);
    triangle(w-10,h-130,w-20,h-105,w,h-120);

    // presents
    fill(220,40,100);
    rect(w+70,h+150,70,50);
    fill(20,80,200);
    rect(w+70,h+150,10,50);
    fill(50,90,180);
    rect(w+70,h+150,70,10);

    fill(180,40,40);
    rect(w-80,h+140,50,60);
    fill(20,200,20);
    rect(w-80,h+140,10,60);
    fill(20,150,20);
    rect(w-80,h+140,50,10);
    
    fill(80,80,200);
    rect(w-50,h+170,70,30);
    fill(180,200,20);
    rect(w-50,h+170,10,30);
    fill(180,200,20);
    rect(w-50,h+170,70,5);
}

function windowResized() {
    for (let flake of snows) {
        flake.pos.x = map(flake.pos.x, 0, width, 0, windowWidth)
    }
    resizeCanvas(windowWidth, windowHeight);
}