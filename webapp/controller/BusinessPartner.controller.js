
sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageBox"
],
  function (Controller, MessageBox) {
    "use strict";
    let selectedDataArr = [];
    return Controller.extend("com.ingenx.nauti.nauticalvendor.controller.BusinessPartner", {
      onInit: function () {
        // var oView = this.getView();
        // var oTable = oView.byId("LineItemsSmartTable");
        // oTable.attachRowSelectionChange(this.onRowSelectionChange, this);
      },

      onRowSelectionChange: function (oEvent) {
        // You can still handle row selection changes here if needed
      },

      onSubmit: function () {
        var oSmartTable = this.byId("LineItemsSmartTable");
        console.log(oSmartTable);
        var aSelectedContexts = oSmartTable.getSelectedContexts();

        if (aSelectedContexts && aSelectedContexts.length > 0) {
          for (var i = 0; i < aSelectedContexts.length; i++) {
            var oSelectedRowData = aSelectedContexts[i].getObject();
            console.log("Selected Row Data:", oSelectedRowData);
          }
        } else {
          console.log("No rows selected.");
        }
      }


    });
  });
