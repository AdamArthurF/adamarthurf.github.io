/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

define( function() {

"use strict";

function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};

return nodeName;

} );
