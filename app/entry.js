
import * as PIXI from 'pixi.js';
import './index.html';

let renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight)

class App {
  constructor() {
    this.appendRenderer()
  }

  appendRenderer() {
    let stage = new PIXI.Container()
    renderer.render(stage)
    document.body.appendChild(renderer.view)
  }

}

let app = new App();