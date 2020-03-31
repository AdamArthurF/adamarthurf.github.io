/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

define( [
	"../var/pnum"
], function( pnum ) {

"use strict";

return new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );

} );
