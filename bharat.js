// Coding Challenge 130.3: Drawing with Fourier Transform and Epicycles
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/130.1-fourier-transform-drawing.html
// https://thecodingtrain.com/CodingChallenges/130.2-fourier-transform-drawing.html
// https://thecodingtrain.com/CodingChallenges/130.3-fourier-transform-drawing.html
// https://youtu.be/7_vKzcgpfvU


///////////////////////////////////////////////////////////////////////////////////////////

const india = [
    { x: 102 , y: 28 },
  { x: 103 , y: 15 },
  { x: 116 , y: 10 },
  { x: 129 , y: 5 },
  { x: 141 , y: 2 },
  { x: 156 , y: 7 },
  { x: 163 , y: 18 },
  { x: 176 , y: 22 },
  { x: 178 , y: 32 },
  { x: 186 , y: 32 },
  { x: 190 , y: 39 },
  { x: 204 , y: 32 },
  { x: 214 , y: 30 },
  { x: 226 , y: 27 },
  { x: 240 , y: 37 },
  { x: 237 , y: 47 },
  { x: 238 , y: 49 },
  { x: 231 , y: 58 },
  { x: 224 , y: 68 },
  { x: 215 , y: 67 },
  { x: 216 , y: 75 },
  { x: 214 , y: 80 },
  { x: 224 , y: 85 },
  { x: 224 , y: 91 },
  { x: 228 , y: 95 },
  { x: 215 , y: 107 },
  { x: 206 , y: 101 },
  { x: 211 , y: 113 },
  { x: 213 , y: 127 },
  { x: 223 , y: 126 },
  { x: 226 , y: 134 },
  { x: 240 , y: 142 },
  { x: 253 , y: 150 },
  { x: 239 , y: 162 },
  { x: 242 , y: 170 },
  { x: 236 , y: 179 },
  { x: 250 , y: 187 },
  { x: 260 , y: 191 },
  { x: 267 , y: 198 },
  { x: 282 , y: 202 },
  { x: 294 , y: 211 },
  { x: 306 , y: 207 },
  { x: 321 , y: 209 },
  { x: 325 , y: 219 },
  { x: 337 , y: 221 },
  { x: 352 , y: 225 },
  { x: 361 , y: 224 },
  { x: 379 , y: 226 },
  { x: 382 , y: 217 },
  { x: 379 , y: 210 },
  { x: 380 , y: 198 },
  { x: 379 , y: 193 },
  { x: 386 , y: 191 },
  { x: 396 , y: 191 },
  { x: 396 , y: 200 },
  { x: 398 , y: 203 },
  { x: 394 , y: 212 },
  { x: 414 , y: 215 },
  { x: 426 , y: 213 },
  { x: 455 , y: 210 },
  { x: 454 , y: 203 },
  { x: 443 , y: 198 },
  { x: 442 , y: 189 },
  { x: 461 , y: 189 },
  { x: 462 , y: 181 },
  { x: 468 , y: 179 },
  { x: 471 , y: 171 },
  { x: 484 , y: 167 },
  { x: 493 , y: 155 },
  { x: 506 , y: 158 },
  { x: 521 , y: 150 },
  { x: 530 , y: 160 },
  { x: 526 , y: 170 },
  { x: 542 , y: 171 },
  { x: 546 , y: 176 },
  { x: 540 , y: 186 },
  { x: 544 , y: 195 },
  { x: 529 , y: 195 },
  { x: 516 , y: 208 },
  { x: 510 , y: 214 },
  { x: 510 , y: 227 },
  { x: 504 , y: 237 },
  { x: 504 , y: 252 },
  { x: 499 , y: 264 },
  { x: 492 , y: 274 },
  { x: 483 , y: 272 },
  { x: 484 , y: 283 },
  { x: 481 , y: 295 },
  { x: 483 , y: 309 },
  { x: 476 , y: 322 },
  { x: 467 , y: 293 },
  { x: 461 , y: 278 },
  { x: 454 , y: 290 },
  { x: 455 , y: 295 },
  { x: 439 , y: 279 },
  { x: 450 , y: 269 },
  { x: 457 , y: 261 },
  { x: 462 , y: 250 },
  { x: 456 , y: 243 },
  { x: 415 , y: 250 },
  { x: 416 , y: 235 },
  { x: 408 , y: 234 },
  { x: 398 , y: 231 },
  { x: 390 , y: 231 },
  { x: 386 , y: 235 },
  { x: 403 , y: 251 },
  { x: 395 , y: 257 },
  { x: 384 , y: 266 },
  { x: 399 , y: 274 },
  { x: 396 , y: 285 },
  { x: 404 , y: 295 },
  { x: 403 , y: 306 },
  { x: 406 , y: 321 },
  { x: 397 , y: 322 },
  { x: 387 , y: 329 },
  { x: 369 , y: 336 },
  { x: 369 , y: 349 },
  { x: 364 , y: 360 },
  { x: 353 , y: 367 },
  { x: 340 , y: 370 },
  { x: 320 , y: 396 },
  { x: 307 , y: 405 },
  { x: 302 , y: 417 },
  { x: 287 , y: 425 },
  { x: 284 , y: 435 },
  { x: 280 , y: 441 },
  { x: 262 , y: 441 },
  { x: 257 , y: 452 },
  { x: 244 , y: 456 },
  { x: 241 , y: 470 },
  { x: 240 , y: 486 },
  { x: 248 , y: 505 },
  { x: 234 , y: 531 },
  { x: 236 , y: 563 },
  { x: 222 , y: 565 },
  { x: 215 , y: 576 },
  { x: 218 , y: 584 },
  { x: 200 , y: 591 },
  { x: 197 , y: 599 },
  { x: 183 , y: 607 },
  { x: 167 , y: 601 },
  { x: 159 , y: 588 },
  { x: 155 , y: 574 },
  { x: 151 , y: 558 },
  { x: 144 , y: 545 },
  { x: 138 , y: 529 },
  { x: 130 , y: 519 },
  { x: 118 , y: 479 },
  { x: 99 , y: 442 },
  { x: 98 , y: 425 },
  { x: 86 , y: 370 },
  { x: 92 , y: 351 },
  { x: 86 , y: 339 },
  { x: 88 , y: 335 },
  { x: 87 , y: 333 },
  { x: 86 , y: 319 },
  { x: 80 , y: 329 },
  { x: 79 , y: 342 },
  { x: 65 , y: 346 },
  { x: 50 , y: 351 },
  { x: 27 , y: 327 },
  { x: 15 , y: 317 },
  { x: 16 , y: 313 },
  { x: 26 , y: 313 },
  { x: 41 , y: 311 },
  { x: 41 , y: 305 },
  { x: 23 , y: 303 },
  { x: 6 , y: 287 },
  { x: 4 , y: 278 },
  { x: 14 , y: 277 },
  { x: 16 , y: 271 },
  { x: 22 , y: 274 },
  { x: 31 , y: 272 },
  { x: 39 , y: 276 },
  { x: 44 , y: 271 },
  { x: 57 , y: 274 },
  { x: 60 , y: 263 },
  { x: 55 , y: 252 },
  { x: 45 , y: 242 },
  { x: 44 , y: 227 },
  { x: 34 , y: 220 },
  { x: 33 , y: 211 },
  { x: 43 , y: 205 },
  { x: 57 , y: 188 },
  { x: 61 , y: 200 },
  { x: 71 , y: 198 },
  { x: 82 , y: 195 },
  { x: 90 , y: 181 },
  { x: 101 , y: 173 },
  { x: 110 , y: 160 },
  { x: 117 , y: 151 },
  { x: 129 , y: 140 },
  { x: 132 , y: 132 },
  { x: 132 , y: 120 },
  { x: 138 , y: 111 },
  { x: 150 , y: 109 },
  { x: 141 , y: 99 },
  { x: 125 , y: 92 },
  { x: 117 , y: 88 },
  { x: 115 , y: 78 },
  { x: 113 , y: 69 },
  { x: 113 , y: 58 },
  { x: 123 , y: 50 },
  { x: 130 , y: 47 },
  { x: 125 , y: 39 },
  { x: 116 , y: 30 },
  { x: 110 , y: 29 }
  ];
  
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  class Complex {
    constructor(a, b) {
      this.re = a;
      this.im = b;
    }
  
    add(c) {
      this.re += c.re;
      this.im += c.im;
    }
  
    mult(c) {
      const re = this.re * c.re - this.im * c.im;
      const im = this.re * c.im + this.im * c.re;
      return new Complex(re, im);
    }
  }
  
  function dft(x) {
    const X = [];
    const N = x.length;
    for (let k = 0; k < N; k++) {
      let sum = new Complex(0, 0);
      for (let n = 0; n < N; n++) {
        const phi = (TWO_PI * k * n) / N;
        const c = new Complex(cos(phi), -sin(phi));
        sum.add(x[n].mult(c));
      }
      sum.re = sum.re / N;
      sum.im = sum.im / N;
  
      let freq = k;
      let amp = sqrt(sum.re * sum.re + sum.im * sum.im);
      let phase = atan2(sum.im, sum.re);
      X[k] = { re: sum.re, im: sum.im, freq, amp, phase };
    }
    return X;
  }
  
  //////////////////////////////////////////////////////////////////////////////////////////////
  
  const USER = 0;
  const FOURIER = 1;
  
  let x = [];
  let fourierX;
  let time = 0;
  let path = [];
  let drawing = [];
  let state = -1;
  
  function mousePressed() {
    state = USER;
    drawing = [];
    x = [];
    time = 0;
    path = [];
  }
  
  function mouseReleased() {
    state = FOURIER;
    const skip = 1;
    for (let i = 0; i < drawing.length; i += skip) {
      x.push(new Complex(drawing[i].x, drawing[i].y));
    }
    console.log(drawing);
    fourierX = dft(x);
    fourierX.sort((a, b) => b.amp - a.amp);
  }
  
  function setup() {
    createCanvas(600, 620);
    background(0);
    fill(255);
    textAlign(CENTER);
    textSize(44);
    text("Happy Independance Day", width/2, height/2);
    for (let i = 0; i < drawing.length; i++) {
        x.push(new Complex(drawing[i].x, drawing[i].y));
      }
      console.log(drawing);
      fourierX = dft(x);
      fourierX.sort((a, b) => b.amp - a.amp);
  }
  
  function epicycles(x, y, rotation, fourier) {
    for (let i = 0; i < fourier.length; i++) {
      let prevx = x;
      let prevy = y;
      let freq = fourier[i].freq;
      let radius = fourier[i].amp;
      let phase = fourier[i].phase;
      x += radius * cos(freq * time + phase + rotation);
      y += radius * sin(freq * time + phase + rotation);
      stroke(255, 100);
      noFill();
      ellipse(prevx, prevy, radius * 2);
      stroke(255);
      line(prevx, prevy, x, y);
    }
    return createVector(x, y);
  }
  
  function draw() {
    for(let i = 0; i < india.length; i++) {
      let point = createVector(india[i].x - width / 2, india[i].y - height / 2);
      drawing.push(point);
    }
 if (state == FOURIER) {
      background(0);
      let v = epicycles(width / 2, height / 2, 0, fourierX);
      path.unshift(v);
      beginShape();
      noFill();
      strokeWeight(2);
      stroke(255, 0, 255);
      for (let i = 0; i < path.length; i++) {
        vertex(path[i].x, path[i].y);
      }
      endShape();
  
      const dt = TWO_PI / fourierX.length;
      time += dt;
  
      if (time > TWO_PI) {
        state = USER;
        drawing = [];
        x = [];
        time = 0;
        path = [];
      }
    }
  }
  
  
  