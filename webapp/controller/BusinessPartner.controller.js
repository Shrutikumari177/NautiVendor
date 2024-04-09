
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
function (Controller, MessageBox) {
    "use strict";
     let selectedDataArr = [];
    return Controller.extend("com.ingenx.nauti.nauticalvendor.controller.BusinessPartner", {
        onInit: function () {
            
            var oView = this.getView();
            var oSmartTable = oView.byId("LineItemsSmartTable");
            var oInnerTable = oSmartTable.getTable();
            oInnerTable.attachRowSelectionChange(this.onRowSelectionChange, this);
        },
 
        onRowSelectionChange: function(oEvent) {
            // Get the selected row(s)
            var aSelectedIndices = oEvent.getParameter("rowIndices");
            var oTable = oEvent.getSource();
            let payLoad = {}
           
            // Get the selected items data
            var aSelectedData = aSelectedIndices.map(function(index) {
                return oTable.getContextByIndex(index).getObject();
            });
 
            // Display data of selected row(s) in console
            console.log("Selected row(s) data:",  aSelectedData[0]);
            selectedDataArr.push(aSelectedData[0]);
            console.log(selectedDataArr);
            
        },

        onSubmit : function(oEvent){
        //   let payLoad  = {
        //        "Lifnr" : "",
        // "PartnerRole" : "",
        // "Anred" : "",
        // "Name1" : "",
        // "Name2" : "",
        // "Name3" : "",
        // "Sort1" : "",
        // "StrSuppl1" : "",
        // "StrSuppl2" : "",
        // "HouseNum1" : "",
        // "Stras" : "",
        // "Pstlz" : "",
        // "Ort01" : "",
        // "Land1" : "",
        // "Regio" : "",
        // "TimeZone" : "",
        // "Spras" : "",
        // "Telf1" : "",
        // "Telf2" : "",
        // "Telfx" : "",
        // "SmtpAddr" : "",
        // "Erdat" : "",
        // "DateTo" : null
      
        //   }
          let oModel = this.getOwnerComponent().getModel("MASTER_BTP_SRV");
          console.log("My model",oModel);

          let payLoad = {  "Lifnr" : "2100000009",
            "PartnerRole" : "",
            "Anred" : "Company",
            "Name1" : "The Shipping Corporation Of India",
            "Name2" : "Limited",
            "Name3" : "",
            "Sort1" : "",
            "StrSuppl1" : "",
            "StrSuppl2" : "",
            "HouseNum1" : "",
            "Stras" : "1st floor, Chandralok Buillding,",
            "Pstlz" : "110001",
            "Ort01" : "Delhi",
            "Land1" : "IN",
            "Regio" : "30",
            "TimeZone" : "",
            "Spras" : "EN",
            "Telf1" : "0124-3345678",
            "Telf2" : "9911267017",
            "Telfx" : "0124-3345678",
            "SmtpAddr" : "",
            "Erdat" : "\/Date(1661126400000)\/",
            "DateTo" : null
          }

          // for( let i=0; i< selectedDataArr.length ; i++){
          //   // payLoad = {
          //   //   "Lifnr" : selectedDataArr[i].ReconciliationAccount,
          //   //   "PartnerRole" : "",
          //   //   "Anred" : "",
          //   //   "Name1" : selectedDataArr[i].SupplierName,
          //   //   "Name2" : "",
          //   //   "Name3" : "",
          //   //   "Sort1" : "",
          //   //   "StrSuppl1" : "",
          //   //   "StrSuppl2" : "",
          //   //   "HouseNum1" : "",
          //   //   "Stras" : selectedDataArr[i].StreetName,
          //   //   "Pstlz" : selectedDataArr[i].PostalCode,
          //   //   "Ort01" : selectedDataArr[i].CityName,
          //   //   "Land1" : selectedDataArr[i].Country,
          //   //   "Regio" : null,
          //   //   "TimeZone" : null,
          //   //   "Spras" : null,
          //   //   "Telf1" : selectedDataArr[i].PhoneNumber1,
          //   //   "Telf2" : selectedDataArr[i].PhoneNumber2,
          //   //   "Telfx" : null,
          //   //   "SmtpAddr" : null,
          //   //   "Erdat" : null,
          //   //   "DateTo" : null
          //   // }

          //   let payLoad = {  "Lifnr" : "2100000009",
          //   "PartnerRole" : "",
          //   "Anred" : "Company",
          //   "Name1" : "The Shipping Corporation Of India",
          //   "Name2" : "Limited",
          //   "Name3" : "",
          //   "Sort1" : "",
          //   "StrSuppl1" : "",
          //   "StrSuppl2" : "",
          //   "HouseNum1" : "",
          //   "Stras" : "1st floor, Chandralok Buillding,",
          //   "Pstlz" : "110001",
          //   "Ort01" : "Delhi",
          //   "Land1" : "IN",
          //   "Regio" : "30",
          //   "TimeZone" : "",
          //   "Spras" : "EN",
          //   "Telf1" : "0124-3345678",
          //   "Telf2" : "9911267017",
          //   "Telfx" : "0124-3345678",
          //   "SmtpAddr" : "",
          //   "Erdat" : "\/Date(1661126400000)\/",
          //   "DateTo" : null
          // }
          //   console.log(payLoad);
          //   oModel.create( "/BusinessPartnerSet", payLoad, {
          //     success : (data, response) =>{
          //       MessageBox.success("Data successfully created",response);
          //       oModel.refresh();
          //     },
          //     error :  function( error){
          //       MessageBox.error("Error:",error)
          //     }
          //   })

              
          // }

          oModel.create( "/BusinessPartnerSet", payLoad, {
            success : (data, response) =>{
              MessageBox.success("Data successfully created",response);
              oModel.refresh();
            },
            error :  function( error){
              MessageBox.error("Error:",error)
            }
          })
        }
    });
});
 