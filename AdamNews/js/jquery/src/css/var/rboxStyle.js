/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

define( [
	"./cssExpand"
], function( cssExpand ) {
	"use strict";

	return new RegExp( cssExpand.join( "|" ), "i" );
} );
