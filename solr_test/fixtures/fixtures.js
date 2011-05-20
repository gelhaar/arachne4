steal({
	path: '//jquery/dom/fixture/fixture.js',
	ignore: false
}).then(function(){

	$.fixture.make(["search","item"],100, function(i, objects) {
		return {
  			id: i,
			kurzbeschreibung: "This is object " + i
  		}
	},	
	function(item, settings) {
		console.log(settings.data);
	    if(settings.data.q) {
	        var regex = new RegExp("^"+settings.data.q);
	        return regex.test(item.kurzbeschreibung);
	    }
	});

});
