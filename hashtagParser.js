String.prototype.parseHashtag = function() {
	return this.replace(/[#]+[#-A-Za-z0-9-_\u4E00-\u9FA5]+/g, function(t) {
	    if(t.indexOf('#',1)!=-1){
	       return t;
	    }
	    var tag = t.replace("#","%23")
		return t.link("http://search.twitter.com/search?q="+tag);
	});
};
test = "Simon is writing a post about #中国   #c#twitter, #繁體-中国。 and parsing hashtags as URLs";
document.writeln(test.parseHashtag());
