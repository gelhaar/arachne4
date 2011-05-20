module("Model: SolrTest.Models.ArachneObject")

test("findAll", function(){
	stop(2000);
	SolrTest.Models.ArachneObject.findAll({}, function(arachne_objects){
		start()
		ok(arachne_objects)
        ok(arachne_objects.length)
        ok(arachne_objects[0].name)
        ok(arachne_objects[0].description)
	});
	
})

test("create", function(){
	stop(2000);
	new SolrTest.Models.ArachneObject({name: "dry cleaning", description: "take to street corner"}).save(function(arachne_object){
		start();
		ok(arachne_object);
        ok(arachne_object.id);
        equals(arachne_object.name,"dry cleaning")
        arachne_object.destroy()
	})
})
test("update" , function(){
	stop();
	new SolrTest.Models.ArachneObject({name: "cook dinner", description: "chicken"}).
            save(function(arachne_object){
            	equals(arachne_object.description,"chicken");
        		arachne_object.update({description: "steak"},function(arachne_object){
        			start()
        			equals(arachne_object.description,"steak");
        			arachne_object.destroy();
        		})
            })

});
test("destroy", function(){
	stop(2000);
	new SolrTest.Models.ArachneObject({name: "mow grass", description: "use riding mower"}).
            destroy(function(arachne_object){
            	start();
            	ok( true ,"Destroy called" )
            })
})