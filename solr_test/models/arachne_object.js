/**
 * @tag models, home
 * Wraps backend arachne_object services.  Enables 
 * [SolrTest.Models.ArachneObject.static.findAll retrieving],
 * [SolrTest.Models.ArachneObject.static.update updating],
 * [SolrTest.Models.ArachneObject.static.destroy destroying], and
 * [SolrTest.Models.ArachneObject.static.create creating] arachne_objects.
 */
$.Model.extend('SolrTest.Models.ArachneObject',
/* @Static */
{
	/**
 	 * Retrieves arachne_objects data from your backend services.
 	 * @param {Object} params params that might refine your results.
 	 * @param {Function} success a callback function that returns wrapped arachne_object objects.
 	 * @param {Function} error a callback function for an error in the ajax request.
 	 */
	findAll: function( params, success, error ){
		$.ajax({
			url: '/arachne_objects.json',
			type: 'get',
			dataType: 'json',
			data: params,
			success: this.callback(['wrapMany',success]),
			error: error,
			fixture: "-search"
			//fixture: "//solr_test/fixtures/arachne_objects.json.get" //calculates the fixture path from the url and type.
		});
	},
	/**
	 * Updates a arachne_object's data.
	 * @param {String} id A unique id representing your arachne_object.
	 * @param {Object} attrs Data to update your arachne_object with.
	 * @param {Function} success a callback function that indicates a successful update.
 	 * @param {Function} error a callback that should be called with an object of errors.
     */
	update: function( id, attrs, success, error ){
		$.ajax({
			url: '/arachne_objects/'+id,
			type: 'put',
			dataType: 'json',
			data: attrs,
			success: success,
			error: error,
			fixture: "-restUpdate" //uses $.fixture.restUpdate for response.
		});
	},
	/**
 	 * Destroys a arachne_object's data.
 	 * @param {String} id A unique id representing your arachne_object.
	 * @param {Function} success a callback function that indicates a successful destroy.
 	 * @param {Function} error a callback that should be called with an object of errors.
	 */
	destroy: function( id, success, error ){
		$.ajax({
			url: '/arachne_objects/'+id,
			type: 'delete',
			dataType: 'json',
			success: success,
			error: error,
			fixture: "-restDestroy" // uses $.fixture.restDestroy for response.
		});
	},
	/**
	 * Creates a arachne_object.
	 * @param {Object} attrs A arachne_object's attributes.
	 * @param {Function} success a callback function that indicates a successful create.  The data that comes back must have an ID property.
	 * @param {Function} error a callback that should be called with an object of errors.
	 */
	create: function( attrs, success, error ){
		$.ajax({
			url: '/arachne_objects',
			type: 'post',
			dataType: 'json',
			success: success,
			error: error,
			data: attrs,
			fixture: "-restCreate" //uses $.fixture.restCreate for response.
		});
	}
},
/* @Prototype */
{});
