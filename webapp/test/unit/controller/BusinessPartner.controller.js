/*global QUnit*/

sap.ui.define([
	"comingenxnauti/nauticalvendor/controller/BusinessPartner.controller"
], function (Controller) {
	"use strict";

	QUnit.module("BusinessPartner Controller");

	QUnit.test("I should test the BusinessPartner controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
