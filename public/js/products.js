var itemList = $("#item-list");

$("#submit-product").on("click", function () {

    var plu = $("#plu").val().trim();
    var ndbno = $("#ndbno").val().trim();
    var productName = $("#product-name").val().trim();
    var prodDesc = $("#product-desc").val().trim();
    var manufacturer = $("#manufacturer").val().trim();
    var subcat = $("#category-select").val();
    var prodImg = $("#prod-img").val().trim();
    var priceInput = $("#price").val().trim();
    var price = parseFloat(priceInput);
    var caseCountInput = $("#case-count").val().trim();
    var caseCount = parseInt(caseCountInput);
    var caseDimensions = $("#case-dimensions").val().trim();
    var caseWeightInput = $("#case-weight").val().trim();
    var caseWeight = parseInt(caseWeightInput);
    var certs = $("#prod-certs").val().trim();
    var onHandInput = $("#on-hand").val().trim();
    var onHand = parseInt(onHandInput);

    var category;

    if (plu === null || productName === null || manufacturer === null || subcat === "Select One" || price === null) {
        alert("Please fill out all required fields before submitting!");
    }

    else {
        if (subcat === "Citrus" || subcat === "Tropical" || subcat === "Pomes") {
            category = "Fruits";
        }

        else {
            category = "Vegetables";
        };

        var newProduct = {
            plu: plu,
            productName: productName,
            prodDesc: prodDesc,
            category: category,
            subcat: subcat,
            prodImg: prodImg,
            manufacturer: manufacturer,
            price: price,
            caseCount: caseCount,
            caseDimensions: caseDimensions,
            caseWeight: caseWeight,
            certs: certs,
            ndbno: ndbno,
            onHand: onHand
        }

        $.post("/api/items", newProduct, function () {
            window.location.href = "/admin/products"
        })
    }
});

function deleteExample(id) {
    return $.ajax({
      url: "api/items/" + id,
      type: "DELETE"
    });
};

var handleDeleteBtnClick = function() {
    var idToDelete = $(this)
      .parent()
      .attr("data-id");
  
    deleteExample(idToDelete).then(function() {
      window.location.href = "/admin/products"
    });
};

itemList.on("click", ".delete", handleDeleteBtnClick);