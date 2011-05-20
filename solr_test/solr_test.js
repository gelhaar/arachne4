steal({path: '//solr_test/fixtures/fixtures.js',ignore: true});

steal.plugins(	
	'jquery/controller',			// a widget factory
	'jquery/controller/subscribe',	// subscribe to OpenAjax.hub
	'jquery/view/ejs',				// client side templates
	'jquery/controller/view',		// lookup views with the controller's name
	'jquery/model',					// Ajax wrappers
	'jquery/dom/fixture',			// simulated Ajax requests
	'jquery/dom/form_params')		// form data helper
	
	.css('solr_test')	// loads styles

	.resources()					// 3rd party script's (like jQueryUI), in resources folder

	.models('arachne_object')						// loads files in models folder 

	.controllers('arachne_object')					// loads files in controllers folder

	.views();						// adds views to be added to build
