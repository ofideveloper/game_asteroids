import './index.html';
import { VAR } from './VAR.js';

import { requestAnimationFramePolyfill } from './utils';
import { randomRange } from './utils';

import Ship from './Ship';

requestAnimationFramePolyfill();

window.VAR = VAR;

class Game {
  constructor() {
    //
    this.createCanvas();
    this.setLayout();
    this.setupEvents();

    this.ship = new Ship();

    this.animationLoop();
  }

  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.setLayout();
    document.body.appendChild(this.canvas);
  }

  setupEvents() {
    window.addEventListener('resize', () => {
      this.setLayout();
    });
  }

  setLayout() {
    VAR.W = window.innerWidth;
    VAR.H = window.innerHeight;
    VAR.d = Math.min(VAR.W, VAR.H);

    this.canvas.width = VAR.W;
    this.canvas.height = VAR.H;

    this.ctx.fillStyle = 'white';
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 3;
    this.ctx.lineJoin = 'round';
  }

  animationLoop(time) {
    requestAnimationFrame(time => {
      this.animationLoop(time);
    });

    if (time - VAR.lastTime >= 1000 / VAR.FPS) {
      VAR.lastTime = time;
      // clear canvas
      this.ctx.clearRect(0, 0, VAR.W, VAR.H);
      //
      this.gameLoop();
    }
  }
  gameLoop() {
    this.ship.draw();
  }

  drawTriangle() {}
}

window.onload = function() {
  window.Game = new Game();
};
