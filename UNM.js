if (!window.UNM) {
	(function(d, t) {
		var timestamp = new Date();
		var g = d.createElement(t),
			s = d.getElementsByTagName(t)[0];
		g.src = 'https://cdn.jsdelivr.net/gh/xUndisputed/UltraNightMusic.js/unm-loader.js?v=' + timestamp.getTime();
		s.parentNode.insertBefore(g, s)
		
	}(document, 'script'));
} else {
	UNM.init();
