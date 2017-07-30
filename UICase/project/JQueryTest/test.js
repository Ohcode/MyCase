;!function(win) {
	'use strict';
	
	var Test = function(){
		this.name = 'JQuery测试';
	}
	
	Test.fn = Test.prototype;
	//获取JS路径
	var GetPath = function(){
		var doc = document,js = doc.scripts,jsUrl = js[js.length - 1].src;
		return jsUrl.substring(0,jsUrl.lastIndexOf('/') + 1);
	},
	
	//定义模块
	modules = {
		alert : 'Alert/alert'
	}
	
	//加载
	Test.fn.load = function(app,callback){
		var t = this,
			doc = document,
			appUrl = GetPath() + modules[app] + '.js',
			//加载模块
			node = doc.createElement('script'),
			head = doc.getElementsByTagName('head')[0];
			node.type = 'text/javascript';
			node.src = appUrl;
			head.appendChild(node);
			$.each(modules, function() {
			});
			return t , callback();
	}
	
	//模块拓展
	Test.fn.module = function(modname ,callback){
		var t = this,
			mod = function() {
				typeof callback === 'function' && callback(function(app, exports) {
					jQueryTest[app] = exports;
				});
				return this;
			};
		t.load(modname,mod);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	win.jQueryTest = new Test();
	console.log(jQueryTest.name);

}(window)
