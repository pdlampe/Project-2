USE produce_db;

INSERT INTO items
    (plu, productName, prodDesc, category, subcat, prodImg, manufacturer, price, caseCount, caseDimensions, caseWeight, onHand, certs, ndbno)
VALUES
    ("32175", "Gala Apples", "These sweet apples are delicious and available year-round.", "Fruits", "Pomes",
        "https://i.imgur.com/ulWgRBf.jpg", "Red Orchards", 44.56, 125, "16 x 24 x 16", 45, 300, "Certified organic", "09503");

INSERT INTO items
    (plu, productName, prodDesc, category, subcat, prodImg, manufacturer, price, caseCount, caseDimensions, caseWeight, onHand, certs, ndbno)
VALUES
    ("31492", "Danvers Carrots (5 lbs)", "Crisp, juicy carrots that are a great addition to any dish.", "Vegetables", "Root Vegetables",
        "https://i.imgur.com/J99eHe6.jpg", "Earth's Bounty Farms", 159.98, 12, "18 x 22 x 14", 60, 250, "GMO-Free", "11124");

INSERT INTO items
    (plu, productName, prodDesc, category, subcat, prodImg, manufacturer, price, caseCount, caseDimensions, caseWeight, onHand, ndbno)
VALUES
    ("38501", "Key Limes (5 lbs)", "Tangy, juicy limes perfect for pies and more.", "Fruits", "Citrus",
        "https://i.imgur.com/Pumbnt0.jpg", "Taste of Florida", 198.49, 8, "12 x 24 x 16", 40, 220, "09159");

INSERT INTO items
    (plu, productName, prodDesc, category, subcat, prodImg, manufacturer, price, caseCount, caseDimensions, caseWeight, onHand, ndbno)
VALUES
    ("31670", "Mangos (12)", "Sweet, tropical fruits ideal for smoothies, or being diced into a healthy snack.", "Fruits", "Tropical", "https://i.imgur.com/c0VvhJk.jpg", "California Fruit Growers", 181.79, 6, "16 x 10 x 14", 35, 120, "09176");

INSERT INTO items
    (plu, productName, prodDesc, category, subcat, prodImg, manufacturer, price, caseCount, caseDimensions, caseWeight, onHand, ndbno, certs)
VALUES
    ("39561", "Organic Cucumbers", "Juicy, crisp cucumbers sourced from organic growers.", "Vegetables", "Seeded Vegetables", "https://i.imgur.com/2OPx2xL.jpg", "Jane's Produce", 128.89, 40, "8 x 16 x 12", 35, 140, "11205", "Certified organic");

INSERT INTO items
    (plu, productName, prodDesc, category, subcat, prodImg, manufacturer, price, caseCount, caseDimensions, caseWeight, onHand, ndbno, certs)
VALUES
    ("35676", "Fresh Basil (2.5 oz)", "This fragrant herb can be used to make fresh pesto, or as a delicious garnish.", "Vegetables", "Herbs", "https://i.imgur.com/C8q87yD.jpg", "Good Thymes Growers", 269.98, 96, "6 x 10 x 8", 15, 48, "02044", "GMO-free");


