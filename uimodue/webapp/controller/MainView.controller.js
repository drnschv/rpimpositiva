sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("profertil.uimodue.controller.MainView", {
			onInit: function () {
                //sap.ui.getCore().applyTheme("profertil_theme"); 
                sap.ui.getCore().applyTheme("sap_fiori_3");
            }
		});
	});
