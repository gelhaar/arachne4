module("solr_test test", { 
	setup: function(){
		S.open("//solr_test/solr_test.html");
	}
});

test("Copy Test", function(){
	equals(S("h1").text(), "Welcome to JavaScriptMVC 3.0!","welcome text");
});