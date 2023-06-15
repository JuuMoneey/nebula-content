-- 1. What are the names and locations of all airports in Portugal? (name, city)
SELECT * FROM airport WHERE country='portugal'       
      1    Sa Carneiro      | Porto
      3    Portela          | Lisboa
      5    Faro             | Faro
      2    Madeira          | Funchal
      4    Ponta Delgada    | S. Miguel


-- 2. What are the names of all planes of the DC-10 version? (name)
SELECT * FROM model WHERE versions='DC-10'

-- 3. How many engines does each plane have? (plane_name, number)
SELECT plane.name as plane_name, model.engines AS number FROM plane JOIN model ON p.modelcod = model.modelcod

-- 4. How many flights with a 2 or 3 hour duration are there in the database? (number)
SELECT COUNT(*) FROM flight WHERE duration > 1 AND duration < 4;
                                    BETWEEN 2 AND 3
-- 5. What plane models have a version starting with A3? (modelcod, version)SELECT * FROM model;
SELECT version,modelcod FROM model WHERE version LIKE 'A3%';

-- 6. What is the code and duration of all flights. Sort the answer from longest to shortest flight. If two flights have the same duration, sort them by flight code from smallest to largest (flightcod, duration).
SELECT flightcod, duration FROM flight ORDER BY duration DESC, flightcod ASC;

-- 7. Knowing that there are no direct flights from airport 1 (Porto) to airport 12 (London), which 2 legged flights can we use to travel between those airports? (flightcod1, flightcod2, intermediate_airport_code) Note: Use the airports codes (1 and 12) instead of the airport names in your query.
SELECT * FROM flight WHERE fromairprotocol = 1;
SELECT * FROM flight WHERE toairprotocol = 12;

-- 8. How many airports are there in each country? Sort the answer in ascending order. (country, number)?


-- 9. What is the flight code, origin city and destination city of all flights in the database? Sort the answer by flight code. (flightcod, origin, destination)


--  10. What are the flight codes of all flights from Porto to Lisboa. (flightcod)? Note: Your query should use the city names, not the airport codes.


-- 11. How many airports are there in each country? (country, number); show only countries with more than 2 airports.


-- 12. What country, or countries, has more airports and how many? (country, number)


-- 13. How many actual planes are there for each plane model. Sort the result so that least frequent models appear last (make, version, number). Note: You do not need to show models that do not have planes.


