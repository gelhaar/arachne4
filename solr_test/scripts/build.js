//steal/js solr_test/scripts/compress.js

load("steal/rhino/steal.js");
steal.plugins('steal/build','steal/build/scripts','steal/build/styles',function(){
	steal.build('solr_test/scripts/build.html',{to: 'solr_test'});
});
