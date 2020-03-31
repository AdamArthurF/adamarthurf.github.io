/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

define( [
	"../core"
], function( jQuery ) {

"use strict";

jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};

} );
