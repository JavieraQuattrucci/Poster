(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1074,
	height: 1538,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/afiche_atlas_.png?1491854856820", id:"afiche_atlas_"}
	]
};


// los recortes de la img
lib.ssMetadata = [
		{name:"afiche_atlas_", frames: [[171,1502,264,196],[0,1502,169,328],[437,1502,528,91],[0,0,1009,1500],[967,1502,258,185],[1011,0,1009,1500],[437,1595,64,26],[503,1595,62,25]]}
];


// symbols:



(lib.Mapadebits1 = function() {
	this.spriteSheet = ss["afiche_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits11 = function() {
	this.spriteSheet = ss["afiche_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits12 = function() {
	this.spriteSheet = ss["afiche_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits14 = function() {
	this.spriteSheet = ss["afiche_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits5 = function() {
	this.spriteSheet = ss["afiche_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits7 = function() {
	this.spriteSheet = ss["afiche_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits8 = function() {
	this.spriteSheet = ss["afiche_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits9 = function() {
	this.spriteSheet = ss["afiche_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,528,91);


(lib.Interpolación14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits14();
	this.instance.setTransform(-504.5,-750);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-504.5,-750,1009,1500);


(lib.Interpolación13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits14();
	this.instance.setTransform(-504.5,-750);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-504.5,-750,1009,1500);


(lib.Interpolación11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.brillo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.157)","rgba(255,255,255,0.376)","rgba(255,255,255,0)"],[0,0.498,1],-45.9,0,46,0).s().p("AnKRBMAAAgiBIOVAAMAAAAiBg");
	this.shape.setTransform(46,109);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92,217.9);


(lib.antenauno = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,25);


(lib.antena2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,26);


(lib.alader_int = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,258,185);


(lib.ala1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,264,196);


(lib.titulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo2();
	this.instance.setTransform(264,45.5,1,1,0,0,0,264,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.18},10).to({alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,528,91);


(lib.Interpolación18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.antena2();
	this.instance.setTransform(21.6,6.8,1,1,-11.9,0,0,3.3,24.1);

	this.instance_1 = new lib.antenauno();
	this.instance_1.setTransform(-18.7,15,1,1,-11.9,0,0,59.2,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.3,-29.3,162.6,58.7);


(lib.Interpolación17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.antena2();
	this.instance.setTransform(19.3,11,1,1,0,0,0,2.8,24);

	this.instance_1 = new lib.antenauno();
	this.instance_1.setTransform(-20.7,10.8,1,1,0,0,0,59.8,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-13,161,26);


(lib.Interpolación7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Interpolación17();
	this.instance.setTransform(-2.5,4);

	this.instance_1 = new lib.Interpolación18();
	this.instance_1.setTransform(-4.7,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-4.7,y:4.2},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-9,161,26);


(lib.fondo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Interpolación13();
	this.instance.setTransform(504.5,750);

	this.instance_1 = new lib.Interpolación14();
	this.instance_1.setTransform(504.5,750);
	this.instance_1.alpha = 0.25;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:0.25},13).to({_off:false,alpha:1},16).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},13).to({_off:true,alpha:1},16).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1009,1500);


(lib.brilloojos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.brillo = new lib.Interpolación11();
	this.brillo.setTransform(278,18);

	this.timeline.addTween(cjs.Tween.get(this.brillo).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.brillo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mascara copia (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg2cAFRQklh7AAiuQAAisElh7QElh7GdgBQGfABEkB7QElB7AACsQAACuklB7QkkB6mfAAQmdAAklh6gAflESQkuh/AAiwQAAixEuh/QEth9GrgBQGqABEuB9QEtB/AACxQAACwktB/QkuB9mqABQmrgBkth9g");
	mask.setTransform(565.9,102);

	// brillo copia
	this.instance = new lib.brillo2();
	this.instance.setTransform(641.8,101,1,1,0,0,0,46,109);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1128.1,y:109},50).wait(1));

	// mascara (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg2cAFRQklh7AAiuQAAisElh7QElh7GdgBQGfABEkB7QElB7AACsQAACuklB7QkkB6mfAAQmdAAklh6gAflESQkuh/AAiwQAAixEuh/QEth9GrgBQGqABEuB9QEtB/AACxQAACwktB/QkuB9mqABQmrgBkth9g");
	mask_1.setTransform(565.9,102);

	// brillo
	this.instance_1 = new lib.brillo2();
	this.instance_1.setTransform(34,109,1,1,0,0,0,46,109);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:490.3,y:123},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(595.8,56,92,92);


(lib.antenas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Interpolación7();
	this.instance.setTransform(80.5,25,1,1,0,0,0,-2,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,4,161,26);


(lib.aladerecha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.alader_int();
	this.instance.setTransform(1.1,96.5,1,1,0,0,0,1.1,96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:19.4,y:96.6},28).to({rotation:0,y:96.5},31).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,258,185);


(lib.alaizq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.alaizq = new lib.ala1();
	this.alaizq.setTransform(263.9,110,1,1,0,0,0,263.9,110);

	this.timeline.addTween(cjs.Tween.get(this.alaizq).to({rotation:-16.2},20).to({rotation:0},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,264,196);


// stage content:



(lib.afiche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// antenas
	this.instance = new lib.antenas();
	this.instance.setTransform(531.5,673,1,1,0,0,0,82.5,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ala izq
	this.instance_1 = new lib.alaizq();
	this.instance_1.setTransform(379,748,1,1,0,0,0,132,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// ala derecha
	this.instance_2 = new lib.aladerecha();
	this.instance_2.setTransform(679,753.5,1,1,0,0,0,129,92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// cuerpo bicho
	this.instance_3 = new lib.Mapadebits11();
	this.instance_3.setTransform(445,615);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// brillo ojos
	this.instance_4 = new lib.brillo();
	this.instance_4.setTransform(18,245,1,1,0,0,0,46,109);

	this.instance_5 = new lib.brilloojos();
	this.instance_5.setTransform(519,209,1,1,0,0,0,278,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// titulo
	this.instance_6 = new lib.titulo();
	this.instance_6.setTransform(543,1254.5,1,1,0,0,0,264,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// fondo 2
	this.instance_7 = new lib.fondo2();
	this.instance_7.setTransform(538.5,771,1,1,0,0,0,504.5,750);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// fondo
	this.instance_8 = new lib.Mapadebits7();
	this.instance_8.setTransform(34,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(497,790,1083,1500);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;