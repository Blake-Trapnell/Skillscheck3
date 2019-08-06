CREATE table houses (
id serial primary key,
name VARCHAR(255)
address VARCHAR(255),
city VARCHAR(100),
state VARCHAR(2),
zip int,
img text
mortgage decimal
rent decimal
);

INSERT INTO houses (name, address, city, zipcode, state)
VALUES ('Pheasant Pointe 5 bed 3 bath', '553 Pheasant Pointe dr', 'Lehi', '84505', 'UT'),
('Triple crown 8 bed 5 bath white 4 floor', '2925 s 148 triple crown dr', 'Mapleton', '84664', 'UT'),
('Harvest Park 3 bed 2 bath 2 floor', '1523 e harvest park way', 'Mapleton', '84664', 'UT');
SELECT * FROM  houses;