import { degreeToRad } from './utils';

class Ship {
	constructor(params) {
		this.r = 0.04;
		this.rear_a = 50;
		this.a = 60;
		//
		this.x = VAR.W/2;
		this.y = VAR.H/2;
		this.points = [ {},{},{} ];
		//
		this.modX = 0;
		this.modY = 0;
		//
		this.acc = 0.0004;
		//
		this.maxMod = 0.019;
		//
		this.setupEvents();
	}

	setupEvents() {
		window.addEventListener('keydown', (event) => {
			this.onKey(event);
		})

		window.addEventListener('keyup', (event) => {
			this.onKey(event);
		})
	}

	onKey(event) {
		let kC = event.keyCode;

		if (kC === 32 || kC == 37 || kC == 38 || kC == 39) {
			event.preventDefault();

			let isKeydownEvent = event.type == 'keydown';

			if (isKeydownEvent && !Game['key_'+kC]) {
				Game['key_'+kC] = true;

				if (kC === 37) {
					Game.key_39 = false;
				} else if (kC === 39) {
					Game.key_37 = false;
				}

			} else if (!isKeydownEvent) {
				Game['key_'+kC] = false;
			}
		}
	}

	onKeyDown(event) {

	}

	draw() {
		Game.ctx.beginPath();

		if (Game.key_37 || Game.key_39) {
			this.a = this.a + 7 * (Game.key_37 ? -1 : 1);
		}

		if (Game.key_38) {
			this.modX = Math.max(-this.maxMod*VAR.d, Math.min( this.maxMod*VAR.d, this.modX + Math.sin( degreeToRad(this.a) )*this.acc*VAR.d));
			this.modY = this.modY - Math.cos( degreeToRad(this.a) )*this.acc*VAR.d;
		} else {
			this.modX = this.modX * 0.98;
			this.modX = Math.abs(this.modX) < 0.0001 ? 0 : this.modX;
			this.modY = this.modY * 0.98;

			this.modY = Math.abs(this.modY) < 0.0001 ? 0 : this.modY;
		}

		this.x += this.modX;
		this.y += this.modY;

		for (var i=0; i<3; i++) {
			let cond = (i === 1 ? this.rear_a : -this.rear_a),
				temp_r = (i === 0 ? this.r : this.r * 0.6),
				scale = (temp_r*VAR.d),
				lineToOrMoveTo = i === 0 ? 'moveTo' : 'lineTo';

			this.temp_a = i === 0 ? this.a : (this.a + 180 + cond);
			this.points[i].x = Math.sin(degreeToRad(this.temp_a))*scale+this.x;
			this.points[i].y = -Math.cos(degreeToRad(this.temp_a))*scale+this.y;

			Game.ctx[lineToOrMoveTo](this.points[i].x, this.points[i].y)
		}

		Game.ctx.closePath();
		Game.ctx.stroke();


		if (Game.key_38 && this.drawThrust) {
			Game.ctx.beginPath();
			this.drawThrust = false;


			for (let i=0; i<3; i++) {

				let x, y,
					temp_a = i != 1 ? this.a + 180 + (i === 0 ? -this.rear_a + 14 : this.rear_a - 14) : this.a + 180,
					temp_r = i === 1 ? this.r : this.r*0.5;

				x = Math.sin(degreeToRad(temp_a))*temp_r*VAR.d+this.x;
				y = -Math.cos(degreeToRad(temp_a))*temp_r*VAR.d+this.y;

				Game.ctx[i === 0 ? 'moveTo' : 'lineTo'](x, y)
			}

			Game.ctx.stroke();
			Game.ctx.closePath();

		} else if (Game.key_38 && !this.drawThrust) {
			this.drawThrust = true;
		}

	}
}

export default Ship;