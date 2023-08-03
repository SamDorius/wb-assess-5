
-- Problem 1
SELECT email FROM customers 
ORDER BY email ASC;
-- 

-- Problem 2
SELECT id FROM orders 
WHERE customer_id = 
(SELECT id FROM customers 
WHERE fname = 'Elizabeth' 
AND lname = 'Crocker');
--

-- Problem 3
SELECT SUM(num_cupcakes) FROM orders 
WHERE processed = false;
--

-- Problem 4
SELECT C.name, SUM(O.num_cupcakes) 
FROM cupcakes C LEFT JOIN orders O 
ON O.cupcake_id = C.id 
GROUP BY C.name ORDER BY C.name ASC;
--

-- Problem 5
SELECT C.email, SUM( O.num_cupcakes) 
FROM customers C 
INNER JOIN orders O 
ON O.customer_id = C.id 
GROUP BY C.email ORDER BY C.email ASC;
--

-- Problem 6
SELECT C.fname, C.lname, C.email 
FROM customers C 
INNER JOIN orders O ON O.customer_id = C.id 
WHERE O.cupcake_id = 5 AND O.processed = true GROUP BY C.id;
--