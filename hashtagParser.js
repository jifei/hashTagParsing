String.prototype.parseHashtag = function() {
	return this.replace(/([^A-Za-z0-9_\u4E00-\u9FA5]#|^#)([#A-Za-z0-9_\u4E00-\u9FA5]+)/g, function($0,$1,$2) {
	    var t =$2;
	    if(t.indexOf('#')!=-1){
	       return $0;
	    }
	    t = '#'+t;
	    var tag = t.replace("#","%23")
		return $1.substr(0,$1.length-1)+t.link("http://search.twitter.com/search?q="+tag);
	});
};
test = "#Simon is#writing 我#们 a #post #测试，#哈哈 about #中国...   #c#twitter, #繁體-中国。 and parsing hashtags as URLs";
document.writeln(test.parseHashtag())

