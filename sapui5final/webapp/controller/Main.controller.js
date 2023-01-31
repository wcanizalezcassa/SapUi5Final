sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/library"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.library} library
     */
    function (Controller, sapMLib) {
        "use strict";

        function onInit(){
		
        }
        
        function onAfterRendering(){
    
        }
        
        //Tile Crear Empleado
        function navToCreateEmployee(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CreateEmployee",{},false);
        }
        
        //Tile Ver empleados
        function navToShowEmployee(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("ShowEmployee",{},false);
        }
    
        //Ruta deploy
        function openEmployees () {
            const url = "https://5e4b635ftrial-dev-logali-approuter.cfapps.us10-001.hana.ondemand.com/logaliemployees/index.html";
            const { URLHelper } = sapMLib;
            URLHelper.redirect(url);
        }
    
        return Controller.extend("sapui5final.sapui5final.controller.Main", {
            onInit: onInit,
            onAfterRendering : onAfterRendering,
            navToCreateEmployee : navToCreateEmployee,
            navToShowEmployee : navToShowEmployee,
            openEmployees: openEmployees
        });
    });