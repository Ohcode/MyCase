jQueryTest.module(function(exports) {
	'use strick';
	var ALERT = 'alert',
		Alert = function() {
			var t = this;
			return t;
		};

	Alert.prototype = {
		type: function() {
			return 'ok';
		}
	}

	var alert = new Alert();
	exports(ALERT, alert);
	console.log(Alert.type);
});