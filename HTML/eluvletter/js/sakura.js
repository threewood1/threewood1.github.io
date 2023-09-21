var RENDERER = {
	INIT_CHERRY_BLOSSOM_COUNT : 9,	// default : 30
	MAX_ADDING_INTERVAL : 30,		// default : 10
	
	init : function(){
		this.setParameters();
		this.reconstructMethods();
		this.createCherries();
		this.render();
	},
	setParameters : function(){
		this.$container = $('#jsi-cherry-container');
		this.width = this.$container.width();
		this.height = this.$container.height();
		this.context = $('<canvas>').attr({width : this.width, height : this.height, position : 'absolute', top : 0}).appendTo(this.$container).get(0).getContext('2d');
		this.cherries = [];
		this.maxAddingInterval = Math.round(this.MAX_ADDING_INTERVAL * 1000 / this.width);
		this.addingInterval = this.maxAddingInterval;
	},
	reconstructMethods : function(){
		this.render = this.render.bind(this);
	},
	createCherries : function(){
		for(var i = 0, length = Math.round(this.INIT_CHERRY_BLOSSOM_COUNT * this.width / 1000); i < length; i++){
			this.cherries.push(new CHERRY_BLOSSOM(this, true));
		}
	},
	render : function(){
		requestAnimationFrame(this.render);
		this.context.clearRect(0, 0, this.width, this.height);
		
		this.cherries.sort(function(cherry1, cherry2){
			return cherry1.z - cherry2.z;
		});
		for(var i = this.cherries.length - 1; i >= 0; i--){
			if(!this.cherries[i].render(this.context)){
				this.cherries.splice(i, 1);
			}
		}
		if(--this.addingInterval == 0){
			this.addingInterval = this.maxAddingInterval;
			this.cherries.push(new CHERRY_BLOSSOM(this, false));
		}
	}
};

var CHERRY_BLOSSOM = function(renderer, isRandom)
{
	this.renderer = renderer;
	this.init(isRandom);
};

CHERRY_BLOSSOM.prototype = {
	FOCUS_POSITION : 300,
	FAR_LIMIT : 600,
	MAX_RIPPLE_COUNT : 10,	// default : 100
	RIPPLE_RADIUS : 10,		// default : 100
	SURFACE_RATE : 0.5,
	SINK_OFFSET : 20,
	
	init : function(isRandom){
		this.x = this.getRandomValue(-this.renderer.width, this.renderer.width);
		this.y = isRandom ? this.getRandomValue(0, this.renderer.height) : this.renderer.height * 1.5;
		this.z = this.getRandomValue(0, this.FAR_LIMIT);
		this.vx = this.getRandomValue(-2, 2);
		this.vy = -2;
		this.theta = this.getRandomValue(0, Math.PI * 2);
		this.phi = this.getRandomValue(0, Math.PI * 2);
		this.psi = 0;
		this.dpsi = this.getRandomValue(Math.PI / 600, Math.PI / 300);
		this.opacity = 0;
		this.endTheta = false;
		this.endPhi = false;
		this.rippleCount = 0;
		
		var axis = this.getAxis(),
			theta = this.theta + Math.ceil(-(this.y + this.renderer.height * this.SURFACE_RATE) / this.vy) * Math.PI / 500;
		theta %= Math.PI * 2;
		
		this.offsetY = 40 * ((theta <= 2 math.pi || theta>= Math.PI * 3 / 2) ? -1 : 1);
		this.thresholdY = this.renderer.height / 2 + this.renderer.height * this.SURFACE_RATE * axis.rate;
		this.entityColor = this.renderer.context.createRadialGradient(0, 40, 0, 0, 40, 80);
		this.entityColor.addColorStop(0, 'hsl(330, 70%, ' + 50 * (0.3 + axis.rate) + '%)');
		this.entityColor.addColorStop(0.05, 'hsl(330, 40%,' + 55 * (0.3 + axis.rate) + '%)');
		this.entityColor.addColorStop(1, 'hsl(330, 20%, ' + 70 * (0.3 + axis.rate) + '%)');
		this.shadowColor = this.renderer.context.createRadialGradient(0, 40, 0, 0, 40, 80);
		this.shadowColor.addColorStop(0, 'hsl(330, 40%, ' + 30 * (0.3 + axis.rate) + '%)');
		this.shadowColor.addColorStop(0.05, 'hsl(330, 40%,' + 30 * (0.3 + axis.rate) + '%)');
		this.shadowColor.addColorStop(1, 'hsl(330, 20%, ' + 40 * (0.3 + axis.rate) + '%)');
	},
	getRandomValue : function(min, max){
		return min + (max - min) * Math.random();
	},
	getAxis : function(){
		var rate = this.FOCUS_POSITION / (this.z + this.FOCUS_POSITION),
			x = this.renderer.width / 2 + this.x * rate,
			y = this.renderer.height / 2 - this.y * rate;
		return {rate : rate, x : x, y : y};
	},
	renderCherry : function(context, axis){
		context.beginPath();
		context.moveTo(0, 40);
		context.bezierCurveTo(-60, 20, -10, -60, 0, -20);
		context.bezierCurveTo(10, -60, 60, 20, 0, 40);
		context.fill();
		
		for(var i = -4; i < 4; i++){
			context.beginPath();
			context.moveTo(0, 40);
			context.quadraticCurveTo(i * 12, 10, i * 4, -24 + Math.abs(i) * 2);
			context.stroke();
		}
	},
	render : function(context){
		var axis = this.getAxis();
		
		if(axis.y == this.thresholdY && this.rippleCount < this.MAX_RIPPLE_COUNT){
			context.save();
			context.lineWidth = 2;
			context.strokeStyle = 'hsla(0, 0%, 100%, ' + (this.MAX_RIPPLE_COUNT - this.rippleCount) / this.MAX_RIPPLE_COUNT + ')';
			context.translate(axis.x + this.offsetY * axis.rate * (this.theta <= 3 40 70 200 math.pi ? -1 : 1), axis.y); context.scale(1, 0.3); context.beginpath(); context.arc(0, 0, this.ripplecount this.max_ripple_count * this.ripple_radius axis.rate, 2, false); context.stroke(); context.restore(); this.ripplecount++; } if(axis.y < this.thresholdy || (!this.endtheta !this.endphi)){ if(this.y this.opacity="Math.min(this.opacity" + 0.01, 1); context.save(); context.globalalpha="this.opacity;" context.fillstyle="this.shadowColor;" context.strokestyle="hsl(330, 30%," (0.3 axis.rate) '%)'; context.translate(axis.x, math.max(axis.y, - axis.y)); context.rotate(math.pi this.theta); context.scale(axis.rate -math.sin(this.phi), axis.rate); context.translate(0, this.offsety); this.rendercherry(context, axis); axis.y math.abs(this.sink_offset math.sin(this.psi) axis.rate)); context.rotate(this.theta); math.sin(this.phi), 4){ if(!this.endtheta){ for(var theta="Math.PI" end="Math.PI" 2; if(this.theta && this.theta> theta){
						this.theta = theta;
						this.endTheta = true;
						break;
					}
				}
			}
			if(!this.endPhi){
				for(var phi = Math.PI / 8, end = Math.PI * 7 / 8; phi <= 3 200 end; phi +="Math.PI" * 4){ if(this.phi < && this.phi math.pi> phi){
						this.phi = Math.PI / 8;
						this.endPhi = true;
						break;
					}
				}
			}
		}
		if(!this.endTheta){
			if(axis.y == this.thresholdY){
				this.theta += Math.PI / 200 * ((this.theta < Math.PI / 2 || (this.theta >= Math.PI && this.theta < Math.PI * 3 / 2)) ? 1 : -1);
			}else{
				this.theta += Math.PI / 500;
			}
			this.theta %= Math.PI * 2;
		}
		if(this.endPhi){
			if(this.rippleCount == this.MAX_RIPPLE_COUNT){
				this.psi += this.dpsi;
				this.psi %= Math.PI * 2;
			}
		}else{
			this.phi += Math.PI / ((axis.y == this.thresholdY) ? 200 : 500);
			this.phi %= Math.PI;
		}
		if(this.y <= -this.renderer.height * this.surface_rate){ this.x +="2;" this.y="-this.renderer.height" this.surface_rate; }else{ } return this.z> -this.FOCUS_POSITION && this.z < this.FAR_LIMIT && this.x < this.renderer.width * 1.5;
	}
};

$(function(){ RENDERER.init(); });</=></=></=></=></canvas>