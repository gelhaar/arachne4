/*global module: true, ok: true, equals: true, S: true, test: true */
module("arachne_object", {
	setup: function () {
		// open the page
		S.open("//solr_test/solrtest.html");

		//make sure there's at least one arachne_object on the page before running a test
		S('.arachne_object').exists();
	},
	//a helper function that creates a arachne_object
	create: function () {
		S("[name=name]").type("Ice");
		S("[name=description]").type("Cold Water");
		S("[type=submit]").click();
		S('.arachne_object:nth-child(2)').exists();
	}
});

test("arachne_objects present", function () {
	ok(S('.arachne_object').size() >= 1, "There is at least one arachne_object");
});

test("create arachne_objects", function () {

	this.create();

	S(function () {
		ok(S('.arachne_object:nth-child(2) td:first').text().match(/Ice/), "Typed Ice");
	});
});

test("edit arachne_objects", function () {

	this.create();

	S('.arachne_object:nth-child(2) a.edit').click();
	S(".arachne_object input[name=name]").type(" Water");
	S(".arachne_object input[name=description]").type("\b\b\b\b\bTap Water");
	S(".update").click();
	S('.arachne_object:nth-child(2) .edit').exists(function () {

		ok(S('.arachne_object:nth-child(2) td:first').text().match(/Ice Water/), "Typed Ice Water");

		ok(S('.arachne_object:nth-child(2) td:nth-child(2)').text().match(/Cold Tap Water/), "Typed Cold Tap Water");
	});
});

test("destroy", function () {

	this.create();

	S(".arachne_object:nth-child(2) .destroy").click();

	//makes the next confirmation return true
	S.confirm(true);

	S('.arachne_object:nth-child(2)').missing(function () {
		ok("destroyed");
	});

});