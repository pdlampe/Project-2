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
  // var gridWrapper = document.querySelector("#mainContent");

  function loadData(ev, itemName, plu, ndbno) {
    ev.preventDefault();
    closeMenu();
    // gridWrapper.innerHTML = "";
    $.ajax({
      url: "api/search/" + plu,
      type: "GET"
    }).then(function(data) {
      console.log(data);
      buildProductPage(data);
    });
  }
})();

// var searchSubmit = $("#searchSubmit");

// searchSubmit.on("click", loadSearchData);
// var searchQuery;

// var searchPageLink = $("#searchPageLink");

// searchPageLink.on("click", buildSearchPage);

// function buildSearchPage() {
//   gridWrapper.innerHTML = "";
//   var searchPage =
//     "<br><br><figure class='image center'><img src='/img/inSeasonlogo.png' style='max-width: 600px; max-height: 160'></figure><br><br><form><div class='field has-addons has-addons-centered'>" +
//     "<div class='control'><input id='searchQuery' class='input' type='text' placeholder='Find a fruit or vegetable'>" +
//     "</div><div class='control'><button id='searchSubmit' class='button is-warning'>" +
//     "Search" +
//     "</button></div></div></form>";

//   gridWrapper.innerHTML = searchPage;
//   searchSubmit = $("#searchSubmit");
// }

$(document).on("click", "#searchSubmit", function(event) {
  event.preventDefault();
  searchQuery = $("#searchQuery")
    .val()
    .trim();

  function loadSearchData() {
    if (!searchQuery) {
      alert("You must enter a PLU or product name!");
      return;
    }
    $.ajax({
      url: "api/search/" + searchQuery,
      type: "GET"
    }).done(function(data) {
      // gridWrapper = $("#mainContent");
      // console.log(gridWrapper);
      // gridWrapper.innerHTML = "";
      buildProductPage(data);
    });
  }

  loadSearchData();
});

function buildProductPage(data) {
  var productData =
    "<div id='productData'><img src=" +
    data[0].prodImg +
    ">" +
    "<h2 class='title is-2'>" +
    data[0].productName +
    "</h2>" +
    "<li>Product Description: " +
    data[0].prodDesc +
    "</li>" +
    "<li>Category: " +
    data[0].category +
    "</li>" +
    "<li>Subcategory: " +
    data[0].subcat +
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
    "<li>Nutrition Databse No.: " +
    data[0].ndbno +
    "<div id='nfp'></div>";

  var gridWrapper = $("#mainContent");
  gridWrapper.empty();
  gridWrapper.append(productData);

  $.ajax({
    url: "/api/search/nfp/" + data[0].ndbno,
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
      valueCalories: response.report.food.nutrients[1].value,
      valueTotalFat: response.report.food.nutrients[4].value,
      valueCholesterol: response.report.food.nutrients[13].value,
      valueSodium: response.report.food.nutrients[22].value,
      valueTotalCarb: response.report.food.nutrients[6].value,
      valueFibers: response.report.food.nutrients[7].value,
      valueSugars: response.report.food.nutrients[8].value,
      valueProteins: response.report.food.nutrients[3].value,
      valueVitaminD: response.report.food.nutrients[59].value,
      valuePotassium_2018: response.report.food.nutrients[24].value,
      valueCalcium: response.report.food.nutrients[16].value,
      valueIron: response.report.food.nutrients[21].value,
      showLegacyVersion: false
    });
  });
}
