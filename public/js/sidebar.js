(function() {
  var menuEl = document.getElementById("ml-menu"),
    mlmenu = new MLMenu(menuEl, {
      // breadcrumbsCtrl : true, // show breadcrumbs
      // initialBreadcrumb : 'all', // initial breadcrumb text
      backCtrl: false, // show back button
      // itemsDelayInterval : 60, // delay between each menu item sliding animation
      onItemClick: loadData // callback: item that doesn´t have a submenu gets clicked - onItemClick([event], [inner HTML of the clicked item])
    });
  // mobile menu toggle
  var openMenuCtrl = document.querySelector(".action--open"),
    closeMenuCtrl = document.querySelector(".action--close");

  openMenuCtrl.addEventListener("click", openMenu);
  closeMenuCtrl.addEventListener("click", closeMenu);

  function openMenu() {
    classie.add(menuEl, "menu--open");
    closeMenuCtrl.focus();
  }

  function closeMenu() {
    classie.remove(menuEl, "menu--open");
    openMenuCtrl.focus();
  }

  // simulate grid content loading
  var gridWrapper = document.querySelector("#mainContent");

  function loadData(ev, itemName, plu) {
    ev.preventDefault();
    closeMenu();
    gridWrapper.innerHTML = "";
    $.ajax({
      url: "api/search/" + plu,
      type: "GET"
    }).then(function(data) {
      console.log(data);
      var productData =
        "<li><img src=" +
        data[0].prodImg +
        "></li>" +
        "<li>" +
        data[0].productName +
        "</li>" +
        "<li>Product Description: " +
        data[0].prodDesc +
        "</li>" +
        "<li>Subcategory: " +
        data[0].subcat +
        "</li>" +
        "<li>Category: " +
        data[0].category +
        "</li>" +
        "<li>Manufacturer: " +
        data[0].manufacturer +
        "</li>" +
        "<li>Certifications: " +
        data[0].certs +
        "</li>" +
        "<li>PLU: " +
        data[0].plu +
        "</li>" +
        "<li>Price: $" +
        data[0].price +
        "</li>" +
        "<li>Case Dimensions: " +
        data[0].caseDimensions +
        "</li>" +
        "<li>Case Weight: " +
        data[0].caseWeight +
        "</li>" +
        "<div id='nfp'>";

      gridWrapper.innerHTML = productData;
      $.ajax({
        url: "/api/search/nfp/" + "09503",
        type: "GET"
      }).then(function(response) {
        console.log(response);
        $("#nfp").nutritionLabel({
          showServingUnitQuantity: false,
          itemName: response.report.food.name,
          decimalPlacesForQuantityTextbox: 2,
          valueServingUnitQuantity: 1,
          allowFDARounding: true,
          decimalPlacesForNutrition: 2,
          showPolyFat: false,
          showMonoFat: false,
          valueCalories: response.report.food.nutrients[0].value,
          valueFatCalories: 430,
          valueTotalFat: response.report.food.nutrients[2].value,
          valueSatFat: response.report.food.nutrients[11].value,
          valueTransFat: response.report.food.nutrients[12].value,
          valueCholesterol: response.report.food.nutrients[13].value,
          valueSodium: response.report.food.nutrients[8].value,
          valueTotalCarb: response.report.food.nutrients[3].value,
          valueFibers: response.report.food.nutrients[4].value,
          valueSugars: response.report.food.nutrients[5].value,
          valueProteins: 3,
          valueVitaminD: 12.22,
          valuePotassium_2018: 4.22,
          valueCalcium: 7.22,
          valueIron: 11.22,
          valueAddedSugars: 17,
          showLegacyVersion: false
        });
      });
    });
  }
})();
