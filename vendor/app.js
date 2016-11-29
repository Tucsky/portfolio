$.extend($.easing, {
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		return $.easing[$.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p)) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p)) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p)*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return $.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

jQuery.fn.extend({
	scrollTo: function() {
		var $target = this.first();

		$('html,body').animate({
			scrollTop: Math.max(0, $target.offset().top)
		}, {
			duration: 1000,
			easing: 'easeInOutExpo'
		});

		return $target;
	}
});

$('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

		if (target.length) {
			$(target).scrollTo();
			return false;
		}
	}
});

$('.btn-tilt').on('mousedown', function(event) {
	var force = parseFloat($(this).data('force')) || 0.075;
	$(this).css({
		'transform': 'perspective(200px) scale('+(1-force)+') rotateX('+(((event.offsetY/$(this).outerHeight()) * -(100*force*2)) + 100*force)+'deg) rotateY('+(((event.offsetX/$(this).outerWidth()) * 100*force*2) - 100*force)+'deg)'
	}).addClass('is-tilt');
});

$(document).on('mouseup', function(event) {
	$('.btn-tilt.is-tilt')
		.removeClass('is-tilt')
		.css({
			'transform': 'perspective(200px) scale(1) rotateX(0deg) rotateY(0deg)'
		});
});

$('.grid').masonry({
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	percentPosition: true
})

jQuery(document).ready(function($) {
	var timelineBlocks = $('.timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.timeline-img, .timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.timeline-img').hasClass('is-hidden') ) && $(this).find('.timeline-img, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
}).on('click', '[data-dialog]', function(e) {
	e.preventDefault();

	var target = document.getElementById($(this).data('dialog'));
	if (!target)
		return false;

	new Dialog(target);

	return false;
})

var Motion = function() {
	var that = this;

	that.$ = $('#motion');
	that.nodes = [];
	that.places = ['hi', 'whoiam', 'experiences', 'portfolio', 'contact'];
	that.icons = {
		whoiam: ['shoe', 'running-fast', 'smile-o', 'gamepad', 'user-circle-o', 'bicycle', 'beer', 'coffee-code', 'code', 'css3', 'terminal', 'plane', 'world-tour', 'html5'],
		experiences: ['hello-bubble', 'handshake', 'target', 'calendar', 'building', 'plane', 'users-linked'],
		portfolio: ['idea', 'lightbulb-o', 'magic', 'coffee', 'code', 'brain', 'pipette-tool', 'macbook', 'paint-board', 'flask'],
		contact: ['facebook-official', 'twitter', 'linkedin', 'envelope', 'reply', 'pencil', 'lightbulb-o', 'at', 'handshake', 'globe', 'facebook'],
	};
	that.actives = 5;
	that.location = null;

	that.init = function() {
		$(document).scroll(function() {
			var viewMin = $(window).scrollTop(),
				viewMax = viewMin + $(window).height(),
				place = that.places[0],
				close = 0;

			$('body > *').each(function() {
				var id = $(this).attr('id');

				if (that.places.indexOf(id) === -1)
					return;

				var min = $(this).offset().top,
					max = min + $(this).height(),
					visibility = (Math.min(viewMax, max) - Math.max(viewMin, min)) / $(this).height();

				if (visibility > close) {
					close = visibility;
					place = id;
				}
			});

			that.refresh(place);
		});

		if (!$(window).scrollTop())
			$(document).trigger('scroll');

		console.log('motion initialized');
	}

	that.refresh = function(place) {
		console.log('refresh', place);

		that.scroll = $(window).scrollTop();
		that.offset = that.scroll - $('#'+place).offset().top;

		var remaining = that.actives;

		that.nodes.forEach(function(node) {
			if (node.place == place) {
				remaining--;
				return node.move();
			}
			
			node.hide(that.places.indexOf(place) > that.places.indexOf(node.place));
		});

		for (var i=0; i<remaining; i++)
			that.nodes.push(new that.Node(place));

		that.location = place;
	}

	/*that.switch = function(place) {
		clearTimeout(that.timeout);

		console.log('switch from', that.location, 'to', place);

		that.location = place;

		var remaining = 5;

		that.$.find('i').each(function(i) {
			if ($(this).data('motion.place') != place)
				return $(this).data('motion.remove')(i);

			remaining--;
			$(this).data('motion.respawn')(i);
		});

		that.timeout = setTimeout(function() {
			console.log('prepare to add', remaining);
			for (var i=0; i<remaining; i++)
				that.add(place, i);
		}, 2000)
	}*/

	that.Node = function(place, source) {
		var node = this;
		node.place = place;
		node.$div = $('#'+place);

		if (!node.$div.length)
			return;

		node.pickIcon = function(index) {
			var library = !that.icons[node.place] ? that.icons[Object.keys(that.icons)[Math.floor(Math.random()*Object.keys(that.icons).length)]] : that.icons[node.place];

			if (!library)
				return 'code';

			var icon = library[Math.floor(Math.random()*library.length)],
				index = index || 0;

			if (index < 5)
				for (var i=0; i<that.nodes.length; i++) {
					if (that.nodes[i].place != node.place)
						continue;

					if (that.nodes[i].icon == icon)
						return node.pickIcon(++index);
				}
			return icon;
		}

		node.init = function() {
			node.speed = Math.random();
			node.size = 3 + node.speed * 3;
			node.x = Math.min(Math.floor((($(window).width() - node.size*24) / $(window).width()) * 100), Math.random() * 33 + (Math.random() > .5 ? (33 * 2) : 0));
			node.y = Math.random();
			node.icon = node.pickIcon();
			node.variant = parseInt(Math.random() * 10);

			node.$ = $('<i/>', {class: 'icon-'+node.icon+' node-variant-'+node.variant})
				.css({
					left: node.x+'%',
					top: node.$div.offset().top + (node.y * node.$div.height()) + (that.scroll - node.$div.offset().top) * node.speed,
					fontSize: node.size+'rem',
					'filter': 'blur('+(node.speed * 4).toFixed(2)+'px)'
				});

			that.$.prepend(node.$);

			node.timeout = setTimeout(function() {
				node.move();
			}, node.speed * 1000);

			return node;
		}

		node.move = function() {
			clearTimeout(node.timeout);

			node.$.removeClass('node-disappearing').addClass('node-appearing').css({
				top: node.$div.offset().top + (node.y * node.$div.height()) + (that.scroll - node.$div.offset().top) * node.speed
			});

			return node;
		}

		node.hide = function(top) {
			if (node.$.hasClass('node-disappearing'))
				return;

			clearTimeout(node.timeout);

			node.$.addClass('node-disappearing');

			node.timeout = setTimeout(function() {
				node.remove();
			}, 1000)

			return node;
		}

		node.remove = function() {
			node.$.remove();

			if (that.nodes.indexOf(node) > -1)
				that.nodes.splice(that.nodes.indexOf(node), 1);
		}

		return node.init();
	}

	return that.init();
}

var back = new Motion();

function Dialog(el, options) {
	var self = this;

	this.options = {};

	for (var property in Dialog.prototype.options)
		this.options[property] = Dialog.prototype.options[property];

	if (options && typeof options === 'object')
		for (var property in options)
			this.options[property] = options[property];

	this.el = typeof el === 'string' ? $(el).get(0) : ((el && typeof el === 'object' && el.nodeName) ? el : (el instanceof jQuery ? el.get(0) : null));

	if (!this.el) {
		console.log('instanciate new dialog');

		if (typeof el === 'string' && !options)
			this.options.content = el;
				
		if (!self.options.ephemeral)
			self.options.ephemeral = true;

		if (this.options.url) {
			$.ajax({
				url: this.options.url
			}).done(function(data) {
				if (!data)
					return;

				if (typeof data === 'string')
					data = {content: data};

				delete self.options.url;

				self.options.title = data.title || null;
				self.options.content = data.content || null;
				self.options.class = data.class || null;

				return new Dialog(null, self.options);
			});

			return;
		}

		this.el = document.createElement('div')
		this.el.className = 'dialog'+(this.options.class ? ' '+this.options.class : '');
		this.el.innerHTML = '<div class="dialog-overlay"></div>\
		<div class="dialog-content">\
			'+(this.options.closeButton ? '<div class="dialog-toggle" data-dialog-close></div>' : '')+'\
			'+(this.options.title ? '<h2>'+this.options.title+'</h2>' : '')+'\
			'+(this.options.content ? this.options.content : '')+'\
		</div>';

		document.body.appendChild(this.el);
	} else if (this.el.data && this.el.data.Dialog) {
		console.log('instanciate already instanciated dialog');

		if (options === true)
			return this.el.data.Dialog;
		else
			return this.el.data.Dialog.toggle();
	} else {
		console.log('instanciate dialog from DOM');
	}

	this.id = + new Date();

	this.ctrlClose = this.el.querySelector('[data-dialog-close]');
	this.ctrlOverlay = this.el.querySelector('.dialog-overlay');
	this.ctrlContent = this.el.querySelector('.dialog-content');

	this.isOpen = false;

	if (!this.el.data)
		this.el.data = {};

	this.el.data.Dialog = this;

	this.toggle();
}

Dialog.prototype.options = {
	closeButton: true,
	ephemeral: false,
	transitionDuration: 1000,
	resizeDelay: 1000,
	onOpen: function() { return false; },
	onClose: function() { return false; },
}

Dialog.prototype.listen = function(add) {
	if (add) {
		this._toggle = this.toggle.bind(this);
		this._resize = this.resize.bind(this);
	}

	var direction = add ? 'addEventListener' : 'removeEventListener';

	console.log('dialog '+(add ? 'add' : 'remove')+' event(s)');

	this.ctrlClose && this.ctrlClose[direction]('click', this._toggle);
	this.ctrlOverlay && this.ctrlOverlay[direction]('click', this._toggle);
	document[direction]('keydown', this._toggle);
	window[direction]('resize', this._resize);
}

Dialog.prototype.open = function() {
	if (this.isOpen)
		return;

	console.log('open dialog');

	clearTimeout(this.timeoutTransition);

	this.isOpen = true;

	document.body.style.overflow = 'hidden';

	this.listen(true);

	this.el.style.display = 'block';
	this.center();
	this.el.classList.add('dialog-open');

	this.options.onOpen.apply(this, [this.el]);
}

Dialog.prototype.close = function() {
	if (!this.isOpen)
		return;

	var self = this;

	console.log('close dialog');

	clearTimeout(this.timeoutTransition);

	this.isOpen = false;

	document.body.style.overflow = '';

	this.listen();

	this.el.classList.remove('dialog-open');
	
	console.log('hide in', this.options.transitionDuration+'ms');
	this.timeoutTransition = setTimeout(this.hide.bind(this), this.options.transitionDuration);

	this.options.onClose.apply(this, [this.el]);

	return this;
}

Dialog.prototype.hide = function() {
	console.log('hide dialog');

	this.isOpen = false;

	this.el.style.display = 'none';

	if (!this.options.ephemeral)
		return this;

	console.log('remove dialog');

	delete this.el.data.Dialog;
	this.el.parentElement.removeChild(this.el)
}

Dialog.prototype.toggle = function(e) {
	if (e && e.type == 'keydown' && ((e.keyCode || e.which) !== 27 || !this.isOpen))
		return;

	console.log('toggle', this.isOpen ? 'hide' : 'show');

	if (this.isOpen)
		this.close();
	else
		this.open();

	return this;
};

Dialog.prototype.center = function(e) {
	try {
		var margin = window.getComputedStyle(this.el).getPropertyValue('padding-left');
	} catch(e) {
		var margin = this.el.style.paddingLeft;
	} 

	margin = parseInt(margin) || 0;

	console.log('resize dialog', margin);

	this.ctrlContent.style.top = parseInt(Math.max(0, (window.innerHeight - this.ctrlContent.clientHeight) / 2 - margin)) + 'px';
	this.ctrlContent.style.left = parseInt(Math.max(0, (window.innerWidth - this.ctrlContent.clientWidth) / 2 - margin)) + 'px';

	return this;
}

Dialog.prototype.resize = function(e) {
	console.log('resize detected');

	clearTimeout(this.timeoutResize);

	this.timeoutResize = setTimeout(this.center.bind(this), this.options.resizeDelay);
}

function getImageBrightness(src, callback) {
	var img = document.createElement("img");
		img.src = src;
		img.style.display = "none";

	document.body.appendChild(img);

	var colorSum = 0;

	img.onload = function() {
		var ratio = this.height / this.width;

		var canvas = document.createElement("canvas");
			canvas.width = 100;
			canvas.height = 100 * ratio;

		var ctx = canvas.getContext("2d");
		ctx.drawImage(this, 0, this.height / 2, this.width, this.height / 2, 0, 0, canvas.width, canvas.height);

		var data = ctx.getImageData(0, 0, canvas.width, canvas.height),
			pixels = data.data;
		
		var r,g,b,avg;

		for(var x = 0, len = pixels.length; x < len; x+=4) {
			r = pixels[x];
			g = pixels[x+1];
			b = pixels[x+2];

			avg = Math.floor((r+g+b)/3);
			colorSum += avg;
		}

		var brightness = Math.floor(colorSum / (canvas.width * canvas.height));

		callback(brightness);
	}
}

Dialog.prototype.options.onOpen = function() {
	console.log('onOpen event handler');
	$(this.el).find('.screenshots').flickity({
		// options
		percentPosition: false,
		cellAlign: 'left',
		contain: true,
		prevNextButton: true,
		pageDots: false,
		bgLazyLoad: 2,
	}).on('bgLazyLoad.flickity', function(e, screenshot) {
		var style = screenshot.currentStyle || window.getComputedStyle(screenshot, false),
			src = style.backgroundImage.slice(4, -1).replace(/"/g, "");

		getImageBrightness(src, function(brightness) {
			screenshot.classList.add(brightness / 255 * 100 > 50 ? 'screenshot-light' : 'screenshot-dark');
		});
	}).on('select.flickity', function() {
		$(this).find('video').each(function() {
			$(this).get(0).pause();
		});

		$(this).find('.flickity-prev-next-button').each(function() {
			if ($(this).prop('disabled'))
				$(this).addClass('disabled');
			else
				$(this).removeClass('disabled')

			$(this).prop('disabled', false);
		});
		console.log($(this).find('.is-selected video').length);
		if ($(this).find('.is-selected video').length) {
			$(this).find('.is-selected video').get(0).play();
		}
	}).trigger('select.flickity');
}

$('.screenshots').on('click', function(e) {
	console.log($(e.target).get(0));
	if ($(e.target).is('video')) {
		var video = $(e.target).get(0);

		return video[video.paused ? 'play' : 'pause']();
	}

	if (!$(e.target).is('.is-selected.flickity-bg-lazyloaded'))
		return;

	$(this).toggleClass('toggle-zoom');

	$(this).trigger('mousemove', e);
}).on('mousemove', function(e, delegated) {
	var $element = $('.screenshot-zoom'),
		$image = $(this).find('.is-selected.flickity-bg-lazyloaded'),
		delegated = delegated || {};

	if (!$(this).hasClass('toggle-zoom'))
		return $element.fadeOut(200);

	if (!$image.length)
		return $element.fadeOut(200);

	var offset = $(this).offset(),
		scrollTop = $(window).scrollTop(),
		scrollLeft = $(window).scrollLeft(),
		clientX = e.clientX || delegated.clientX || 0,
		clientY = e.clientY || delegated.clientY || 0,
		x = clientX - (offset.left - scrollLeft),
		y = clientY - (offset.top - scrollTop);

	$element.css({
		left: Math.min($(window).width() - $element.width(), Math.max(0, clientX + 20)),
		top: Math.min($(window).height() - $element.height(), Math.max(0, clientY + 20)),
		'backgroundImage': $image.css('backgroundImage'),
		'backgroundPosition': (x / $image.width() * 100).toFixed(4)+'% '+(y / $image.height() * 100).toFixed(4)+'%'
	}).fadeIn(200);
}).on('mouseleave', function() {
	var $element = $('.screenshot-zoom');

	$element.fadeOut(200);
});

$('[data-toggle="tooltip"]').tooltip({container: 'body'});