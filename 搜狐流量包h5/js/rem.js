(function (win, designW = 750) { //750为设计稿宽度px值,根据实际设计稿大小对应设置
	var doc = win.document;
	var docEle = doc.documentElement;
	designW = designW || 750; //设计稿宽度px,默认640px设计稿
	var ratio = designW / 100; //640px=> 1rem = 100px, 超出640px font-size：100px;
	_refreshRem();
	// 屏幕改变的时候
	window.onresize = function () {
		_refreshRem()
	}
	/**
	 * 动态更新rem
	 */
	function _refreshRem() {
		var clientW = docEle.clientWidth || 320;
		//设置最大和最小宽度取值
		if (clientW < 320) {
			clientW = 320;
		}
		docEle.style.fontSize = clientW / ratio + "px";
		console.log('fontSize:' + docEle.style.fontSize);
	};

})(window);
