/**
 * @tag controllers, home
 * Displays a table of arachne_objects.	 Lets the user 
 * ["SolrTest.Controllers.ArachneObject.prototype.form submit" create], 
 * ["SolrTest.Controllers.ArachneObject.prototype.&#46;edit click" edit],
 * or ["SolrTest.Controllers.ArachneObject.prototype.&#46;destroy click" destroy] arachne_objects.
 */
$.Controller.extend('SolrTest.Controllers.ArachneObject',

	/* @Static */
	{
		onDocument: true
	},
	
	/* @Prototype */
	
	{
		/**
		* When the page loads, gets all arachne_objects to be displayed.
		*/
		load: function(){
			if(!$("#arachne_object").length){
				$(document.body).append($('<div/>').attr('id','arachne_object'));
			}	
			SolrTest.Models.ArachneObject.findAll({}, this.callback('list'));
		},
		
		/**
		* Displays a list of arachne_objects and the submit form.
		* @param {Array} arachne_objects An array of SolrTest.Models.ArachneObject objects.
		*/
		list: function( arachne_objects ){
			$('#arachne_object').html(this.view('init', {arachne_objects:arachne_objects} ));
		},
		
		/**
		* Shows a arachne_object's information.
		*/
		show: function( arachne_object ){
			arachne_object.elements().html(this.view('show',arachne_object));
		},

		/**
		* When search form is submitted
	 	* @param {jQuery} el A jQuery wrapped element.
	 	* @param {Event} ev A jQuery event whose default action is prevented.
		*/
		'form.search submit': function( el, ev ) {
			ev.preventDefault();
			var query = el.children(0).val();
			SolrTest.Models.ArachneObject.findAll({q:query}, this.callback('list'))
		}
	
	}

);
