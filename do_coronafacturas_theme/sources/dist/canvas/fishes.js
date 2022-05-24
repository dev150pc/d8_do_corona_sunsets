(function (cjs, an) {

	console.log('sds', AdobeAn)

	var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

	(function (cjs, an) {
		
		var p; // shortcut to reference prototypes
		var lib = {};
		var ss = {};
		var img = {};
		lib.ssMetadata = [{
			name: "peces_atlas_1",
			frames: [
				[0, 0, 123, 74],
				[125, 0, 123, 74],
				[0, 76, 123, 74],
				[125, 76, 123, 74],
				[0, 152, 123, 74]
			]
		}];


		(lib.AnMovieClip = function () {
			this.actionFrames = [];
			this.ignorePause = false;
			this.gotoAndPlay = function (positionOrLabel) {
				cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
			}
			this.play = function () {
				cjs.MovieClip.prototype.play.call(this);
			}
			this.gotoAndStop = function (positionOrLabel) {
				cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
			}
			this.stop = function () {
				cjs.MovieClip.prototype.stop.call(this);
			}
		}).prototype = p = new cjs.MovieClip();
		// symbols:



		(lib.Frame11107 = function () {
			this.initialize(ss["peces_atlas_1"]);
			this.gotoAndStop(0);
		}).prototype = p = new cjs.Sprite();



		(lib.Frame11108 = function () {
			this.initialize(ss["peces_atlas_1"]);
			this.gotoAndStop(1);
		}).prototype = p = new cjs.Sprite();



		(lib.Frame11109 = function () {
			this.initialize(ss["peces_atlas_1"]);
			this.gotoAndStop(2);
		}).prototype = p = new cjs.Sprite();



		(lib.Frame11110 = function () {
			this.initialize(ss["peces_atlas_1"]);
			this.gotoAndStop(3);
		}).prototype = p = new cjs.Sprite();



		(lib.Frame11111 = function () {
			this.initialize(ss["peces_atlas_1"]);
			this.gotoAndStop(4);
		}).prototype = p = new cjs.Sprite();



		(lib.pajaros = function (mode, startPosition, loop, reversed) {
			if (loop == null) {
				loop = true;
			}
			if (reversed == null) {
				reversed = false;
			}
			var props = new Object();
			props.mode = mode;
			props.startPosition = startPosition;
			props.labels = {};
			props.loop = loop;
			props.reversed = reversed;
			cjs.MovieClip.apply(this, [props]);

			// Layer_1
			this.instance = new lib.Frame11107();
			this.instance.setTransform(136, 48);

			this.instance_1 = new lib.Frame11108();
			this.instance_1.setTransform(136, 48);

			this.instance_2 = new lib.Frame11109();
			this.instance_2.setTransform(136, 48);

			this.instance_3 = new lib.Frame11110();
			this.instance_3.setTransform(136, 48);

			this.instance_4 = new lib.Frame11111();
			this.instance_4.setTransform(136, 48);

			this.timeline.addTween(cjs.Tween.get({}).to({
				state: [{
					t: this.instance
				}]
			}).to({
				state: [{
					t: this.instance_1
				}]
			}, 1).to({
				state: [{
					t: this.instance_2
				}]
			}, 1).to({
				state: [{
					t: this.instance_3
				}]
			}, 1).to({
				state: [{
					t: this.instance_4
				}]
			}, 1).wait(1));

			this._renderFirstFrame();

		}).prototype = p = new cjs.MovieClip();
		p.nominalBounds = new cjs.Rectangle(136, 48, 123, 74);


		// stage content:
		(lib.peces = function (mode, startPosition, loop, reversed) {
			if (loop == null) {
				loop = true;
			}
			if (reversed == null) {
				reversed = false;
			}
			var props = new Object();
			props.mode = mode;
			props.startPosition = startPosition;
			props.labels = {};
			props.loop = loop;
			props.reversed = reversed;
			cjs.MovieClip.apply(this, [props]);

			// Layer_1
			this.instance = new lib.pajaros();
			this.instance.setTransform(875.5, 39, 0.5, 0.5, 0, 0, 0, 72, 61);

			this.timeline.addTween(cjs.Tween.get(this.instance).to({
				regX: 72.1,
				x: -106.5,
				y: 37
			}, 95).wait(1));

			this._renderFirstFrame();

		}).prototype = p = new lib.AnMovieClip();
		p.nominalBounds = new cjs.Rectangle(375.5, 80.5, 593.5, -11);
		// library properties:
		lib.properties = {
			id: 'A5CCC40FA61F4C968FC85053D7814BCE',
			width: 900,
			height: 100,
			fps: 24,
			color: "#00FF00",
			opacity: 0.00,
			manifest: [{
				src: "https://eccorona.s3.us-east-2.amazonaws.com/imgs/peces_atlas_1.png",
				id: "peces_atlas_1"
			}],
			preloads: []
		};



		// bootstrap callback support:

		(lib.Stage = function (canvas) {
			createjs.Stage.call(this, canvas);
		}).prototype = p = new createjs.Stage();

		p.setAutoPlay = function (autoPlay) {
			this.tickEnabled = autoPlay;
		}
		p.play = function () {
			this.tickEnabled = true;
			this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
		}
		p.stop = function (ms) {
			if (ms) this.seek(ms);
			this.tickEnabled = false;
		}
		p.seek = function (ms) {
			this.tickEnabled = true;
			this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
		}
		p.getDuration = function () {
			return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
		}

		p.getTimelinePosition = function () {
			return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
		}

		an.bootcompsLoaded = an.bootcompsLoaded || [];
		if (!an.bootstrapListeners) {
			an.bootstrapListeners = [];
		}

		an.bootstrapCallback = function (fnCallback) {
			an.bootstrapListeners.push(fnCallback);
			if (an.bootcompsLoaded.length > 0) {
				for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
					fnCallback(an.bootcompsLoaded[i]);
				}
			}
		};

		an.compositions = an.compositions || {};
		an.compositions['A5CCC40FA61F4C968FC85053D7814BCE'] = {
			getStage: function () {
				return exportRoot.stage;
			},
			getLibrary: function () {
				return lib;
			},
			getSpriteSheet: function () {
				return ss;
			},
			getImages: function () {
				return img;
			}
		};

		an.compositionLoaded = function (id) {
			an.bootcompsLoaded.push(id);
			for (var j = 0; j < an.bootstrapListeners.length; j++) {
				an.bootstrapListeners[j](id);
			}
		}

		an.getComposition = function (id) {
			return an.compositions[id];
		}


		an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
			var lastW, lastH, lastS = 1;
			window.addEventListener('resize', resizeCanvas);
			resizeCanvas();

			function resizeCanvas() {
				var w = lib.properties.width,
					h = lib.properties.height;
				var iw = window.innerWidth,
					ih = window.innerHeight;
				var pRatio = window.devicePixelRatio || 1,
					xRatio = iw / w,
					yRatio = ih / h,
					sRatio = 1;
				if (isResp) {
					if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
						sRatio = lastS;
					} else if (!isScale) {
						if (iw < w || ih < h)
							sRatio = Math.min(xRatio, yRatio);
					} else if (scaleType == 1) {
						sRatio = Math.min(xRatio, yRatio);
					} else if (scaleType == 2) {
						sRatio = Math.max(xRatio, yRatio);
					}
				}
				domContainers[0].width = w * pRatio * sRatio;
				domContainers[0].height = h * pRatio * sRatio;
				domContainers.forEach(function (container) {
					container.style.width = w * sRatio + 'px';
					container.style.height = h * sRatio + 'px';
				});
				stage.scaleX = pRatio * sRatio;
				stage.scaleY = pRatio * sRatio;
				lastW = iw;
				lastH = ih;
				lastS = sRatio;
				stage.tickOnUpdate = false;
				stage.update();
				stage.tickOnUpdate = true;
			}
		}
		an.handleSoundStreamOnTick = function (event) {
			if (!event.paused) {
				var stageChild = stage.getChildAt(0);
				if (!stageChild.paused || stageChild.ignorePause) {
					stageChild.syncStreamSounds();
				}
			}
		}
		an.handleFilterCache = function (event) {
			if (!event.paused) {
				var target = event.target;
				if (target) {
					if (target.filterCacheList) {
						for (var index = 0; index < target.filterCacheList.length; index++) {
							var cacheInst = target.filterCacheList[index];
							if ((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)) {
								cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
							}
						}
					}
				}
			}
		}


	})(cjs, an);

	function initFish() {
		canvas = document.getElementById("canvas_fishes");
		anim_container = document.getElementById("animation_container_fishes");
		dom_overlay_container = document.getElementById("dom_overlay_container_fishes");
		var comp = AdobeAn.getComposition("A5CCC40FA61F4C968FC85053D7814BCE");
		var lib = comp.getLibrary();
		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", function (evt) {
			handleFileLoad(evt, comp)
		});
		loader.addEventListener("complete", function (evt) {
			handleComplete(evt, comp)
		});
		var lib = comp.getLibrary();
		loader.loadManifest(lib.properties.manifest);
	}
	function handleFileLoad(evt, comp) {
		var images = comp.getImages();
		if (evt && (evt.item.type == "image")) {
			images[evt.item.id] = evt.result;
		}
	}
	function handleComplete(evt, comp) {
		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
		var lib = comp.getLibrary();
		var ss = comp.getSpriteSheet();
		var queue = evt.target;
		var ssMetadata = lib.ssMetadata;
		for (i = 0; i < ssMetadata.length; i++) {
			ss[ssMetadata[i].name] = new createjs.SpriteSheet({
				"images": [queue.getResult(ssMetadata[i].name)],
				"frames": ssMetadata[i].frames
			})
		}
		exportRoot = new lib.peces();
		stage = new lib.Stage(canvas);
		//Registers the "tick" event listener.
		fnStartAnimation = function () {
			stage.addChild(exportRoot);
			createjs.Ticker.framerate = lib.properties.fps;
			createjs.Ticker.addEventListener("tick", stage);
		}
		//Code to support hidpi screens and responsive scaling.
		AdobeAn.makeResponsive(true, 'both', true, 1, [canvas, anim_container, dom_overlay_container]);
		AdobeAn.compositionLoaded(lib.properties.id);
		fnStartAnimation();
	}

	window.onload = () => initFish()
	
})(createjs = createjs || {}, AdobeAn = AdobeAn || {})
var createjs, AdobeAn;