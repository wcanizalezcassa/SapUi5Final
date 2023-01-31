/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapui5final/sapui5final/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
