DROP DATABASE IF EXISTS produce_db;
CREATE DATABASE produce_db;
USE produce_db;
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    plu INT NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    prod_desc VARCHAR(255),
    category VARCHAR(255) NOT NULL,
    subcat VARCHAR(255) NOT NULL,
    prod_img VARCHAR(255),
    manufacturer VARCHAR(255) NOT NULL,
    price DEC(10,2) NOT NULL,
    case_count INT,
    case_dimensions VARCHAR(255),
    case_weight INT,
    on_hand INT,
    certs VARCHAR(255),
    PRIMARY KEY (id),
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    
);