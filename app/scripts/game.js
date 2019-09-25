// import * as PIXI from 'pixi.js';
// import '../index.html';

// import { randomRange,
// 		degreeToRadians,
// 		requestAnimationFramePolyfill } from './utils'

// requestAnimationFramePolyfill();

// class Game {
// 	// x, y, my_canvas, fps
// 	constructor() {
// 		this.createCanvas();
// 		this.setCanvasSize();
// 		this.lastTime = 0;
// 		this.rectangles = [];
// 		this.animationLoop();
// 	}

// 	createCanvas() {
// 		this.my_canvas = document.createElement('canvas');
// 		this.my_canvas.width = window.innerWidth;
// 		this.my_canvas.height = window.innerHeight;
// 		document.body.appendChild(this.my_canvas);
// 		this.ctx = this.my_canvas.getContext('2d');
// 	}

// 	setCanvasSize() {
// 		this.FPS = 60;
// 	}

// 	animationLoop(time) {
// 		requestAnimationFrame((time) => {
// 			this.animationLoop(time);
// 		})

// 		this.rectangles.push({
// 			x: this.my_canvas.width / 2,
// 			y: this.my_canvas.height / 2,
// 			r: 255,
// 			g: randomRange(120, 230),
// 			b: randomRange(0, 100),

// 			h: randomRange(4, 10),

// 			speedX: randomRange(-1000, 1000)/100,
// 			speedY: randomRange(-1000, 1000)/100
// 		});

// 		if (time - this.lastTime >= 1000/this.FPS) {
// 			let { h } = this;

// 			this.lastTime = time;

// 			this.ctx.fillStyle = 'rgba(255,255,255, 0.2)';
// 			this.ctx.fillRect(0, 0, this.my_canvas.width, this.my_canvas.height);

// 			for (var i in this.rectangles) {
// 				let rect = this.rectangles[i];
// 				this.ctx.fillStyle = 'rgb('+rect.r+','+rect.g+','+rect.b+')';

// 				rect.x = rect.x + rect.speedX;
// 				rect.y = rect.y + rect.speedY;
// 				rect.speedY += 0.2;
// 				this.ctx.fillRect(rect.x-rect.h/2, rect.y-rect.h/2, rect.h, rect.h);
// 				// rect.h = rect.h + rect.speedX;
// 				// this.ctx.fillRect(rect.x-rect.h/2, rect.y-rect.h/2, rect.h, rect.h);

// 				if (this.rectangles.length > 100) {
// 					this.rectangles.shift();
// 				}
// 			}
// 		}

// 	}

// 	clearCanvas() {
// 		let { my_canvas } = this;
// 		this.ctx.clearRect(0, 0, my_canvas.width, my_canvas.height)
// 	}
// }

// window.game = new Game();
